import React, { useState } from "react";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import { ExperienceCard } from "../component/experienceCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Experiences = () => {
	const [editMode, setEditMode] = useState(false);
	const [title, setTitle] = useState("");
	const [company, setCompany] = useState("");
	const [description, setDescription] = useState("");
	const [fromDate, setFromDate] = useState(null);
	const [toDate, setToDate] = useState(null);
	const [resume, setResume] = useState(false);
	const [page, setPage] = useState(false);

	const clearFields = () => {
		setTitle("");
		setCompany("");
		setDescription("");
		setFromDate(null);
		setToDate(null);
		setResume(false);
		setPage(false);
	};

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
						<div className="text-center">
							<DatePicker
								className="datepicker"
								selected={fromDate ? new Date(fromDate) : null}
								dateFormat="MM/dd/yyyy"
								fixedHeight
								showMonthDropdown
								showYearDropdown
								placeholderText="From Date"
								onChange={date => {
									setFromDate(date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear());
								}}
							/>
							<DatePicker
								className="datepicker"
								selected={toDate ? new Date(toDate) : null}
								dateFormat="MM/dd/yyyy"
								fixedHeight
								showMonthDropdown
								showYearDropdown
								placeholderText="To Date"
								onChange={date => {
									setToDate(date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear());
								}}
							/>
						</div>
						<input
							className="input-field m-1"
							type="text"
							placeholder="Title"
							value={title}
							onChange={({ target: { value: v } }) => setTitle(v)}
						/>
						<input
							className="input-field m-1"
							type="text"
							placeholder="Company"
							value={company}
							onChange={({ target: { value } }) => setCompany(value)}
						/>
						<textarea
							className="input-field m-1"
							rows="3"
							name="description"
							placeholder="Description"
							value={description}
							onChange={e => setDescription(e.target.value)}
						/>
					</div>
					<div className="card-footer text-muted">
						<input
							className="display-inline-block"
							type="checkbox"
							checked={resume === "true" ? "checked" : ""}
							onChange={() => setResume(resume === "true" ? "false" : "true")}
						/>
						Resume
						<input
							className="ml-4 display-inline-block"
							type="checkbox"
							checked={page === "true" ? "checked" : ""}
							onChange={() => setPage(page === "true" ? "false" : "true")}
						/>
						Page
						<Context.Consumer>
							{({ store, actions }) => {
								return (
									<button
										className="btn btn-info float-right"
										onClick={() => {
											clearFields();
											const randomNumber = Math.floor(Math.random() * 1000);
											const obj = {
												id: randomNumber,
												title: title,
												company: company,
												description: description,
												fromDate: fromDate,
												toDate: toDate,
												resume: resume,
												page: page
											};
											actions.addItem("experience", obj);
										}}>
										Save
									</button>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
			)}
			<Context.Consumer>
				{({ store }) => {
					return store.experience.map((item, index) => {
						return (
							<ExperienceCard
								key={index}
								index={index}
								id={item.id}
								title={item.title}
								company={item.company}
								description={item.description}
								fromDate={item.fromDate}
								toDate={item.toDate}
								resume={item.resume}
								page={item.page}
							/>
						);
					});
				}}
			</Context.Consumer>
		</div>
	);
};
