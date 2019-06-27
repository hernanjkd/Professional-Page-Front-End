import React, { useState } from "react";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import { SkillCard } from "../component/skillCard";

export const Skills = () => {
	const [editMode, setEditMode] = useState(false);
	const [skill, setSkill] = useState("");
	const [resume, setResume] = useState(false);
	const [page, setPage] = useState(false);

	const clearFields = () => {
		setSkill("");
		setResume(false);
		setPage(false);
	};

	return (
		<Context.Consumer>
			{({ store, actions }) => {
				return (
					<div className="container">
						{!editMode ? (
							<div className="editItem card mt-2 bg-info" onClick={() => setEditMode(!editMode)}>
								<div className="">
									<i className="fas fa-plus d-inline" />
									<span className="d-inline pl-3">ADD ITEM</span>
								</div>
							</div>
						) : (
							<div className="card mt-2 bg-light">
								<div className="card-body">
									<input
										className="input-field m-1"
										type="text"
										placeholder="Skill"
										value={skill}
										onChange={({ target: { value: v } }) => setSkill(v)}
									/>
								</div>
								<div className="card-footer text-muted">
									<input
										className="display-inline-block"
										type="checkbox"
										checked={resume ? "checked" : ""}
										onClick={() => setResume(resume === "true" ? "false" : "true")}
									/>
									Resume
									<input
										className="ml-4 display-inline-block"
										type="checkbox"
										checked={page ? "checked" : ""}
										onClick={() => setPage(page === "true" ? "false" : "true")}
									/>
									Page
									<button
										className="btn btn-info float-right"
										onClick={() => {
											clearFields();
											const randomNumber = Math.floor(Math.random() * 1000);
											const obj = {
												id: randomNumber,
												skill: skill,
												resume: resume,
												page: page
											};
											actions.addItem("skills", obj);
										}}>
										Save
									</button>
								</div>
							</div>
						)}
						{store.skills.map((item, index) => {
							return (
								<SkillCard
									key={index}
									index={index}
									id={item.id}
									skill={item.skill}
									resume={item.resume}
									page={item.page}
								/>
							);
						})}
					</div>
				);
			}}
		</Context.Consumer>
	);
};
