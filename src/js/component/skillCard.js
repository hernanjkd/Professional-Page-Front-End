import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const SkillCard = props => {
	const [saveCard, setSaveCard] = useState(false);
	const [editMode, setEditMode] = useState(false);
	const [skill, setSkill] = useState(props.skill);

	useEffect(
		() => {
			if (props.skill != skill) setSkill(props.skill);
		},
		[saveCard]
	);

	return (
		<div className="card mt-2 bg-light">
			<div className="card-body text-left">
				<div className="float-right">
					{editMode ? (
						<i className="fas fa-times fa-lg mr-3" onClick={() => setEditMode(!editMode)} />
					) : (
						<i className="fas fa-pencil-alt mr-3" onClick={() => setEditMode(!editMode)} />
					)}
					<i className="fas fa-trash-alt" />
				</div>
				{editMode ? (
					<input
						className="input-field m-1"
						type="text"
						value={skill}
						onChange={({ target: { value: v } }) => setSkill(v)}
					/>
				) : (
					<h5 className="card-title text-center">{skill}</h5>
				)}
			</div>

			<Context.Consumer>
				{({ actions }) => {
					return (
						<div className="card-footer text-muted">
							<input
								className="display-inline-block"
								type="checkbox"
								checked={props.resume === "true" ? "checked" : ""}
								onChange={() => {
									let resume = props.resume === "true" ? "false" : "true";
									actions.editSkill(props.id, skill, resume, props.page);
								}}
							/>
							Resume
							<input
								className="ml-4 display-inline-block"
								type="checkbox"
								checked={props.page === "true" ? "checked" : ""}
								onChange={() => {
									let page = props.page === "true" ? "false" : "true";
									actions.editSkill(props.id, skill, props.resume, page);
								}}
							/>
							Page
							{editMode ? (
								<button
									className="btn btn-info float-right"
									onClick={() => {
										setEditMode(!editMode);
										setSaveCard(!saveCard);
										actions.editSkill(props.id, skill, props.resume, props.page);
									}}>
									Save
								</button>
							) : (
								""
							)}
						</div>
					);
				}}
			</Context.Consumer>
		</div>
	);
};

SkillCard.propTypes = {
	id: PropTypes.number,
	skill: PropTypes.string,
	resume: PropTypes.string,
	page: PropTypes.string
};
