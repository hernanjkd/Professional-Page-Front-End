import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { Context } from "../store/appContext";
import { EducationCard } from "../component/educationCard";
import "../../styles/index.scss";
import "react-datepicker/dist/react-datepicker.css";

export const Education = () => {
	const [editMode, setEditMode] = useState(false);
	const [degree, setDegree] = useState("");
	const [school, setSchool] = useState("");
	const [course, setCourse] = useState("");
	const [fromDate, setFromDate] = useState("");
	const [toDate, setToDate] = useState("");
	const [resume, setResume] = useState(false);

	const clearFields = () => {
		setDegree("");
		setSchool("");
		setCourse("");
		setFromDate(null);
		setToDate(null);
		setResume(false);
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
							placeholder="Degree"
							value={degree}
							onChange={({ target: { value: v } }) => setDegree(v)}
						/>
						<input
							className="input-field m-1"
							type="text"
							placeholder="School"
							value={school}
							onChange={({ target: { value } }) => setSchool(value)}
						/>
						<textarea
							className="input-field m-1"
							rows="3"
							placeholder="Courses"
							defaultValue={course}
							onChange={e => setCourse(e.target.value)}
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
												school: school,
												degree: degree,
												course: course,
												fromDate: fromDate,
												toDate: toDate,
												resume: resume
											};
											actions.addItem("education", obj);
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
					return store.education.map((item, index) => {
						return (
							<EducationCard
								key={index}
								index={index}
								id={item.id}
								degree={item.degree}
								school={item.school}
								course={item.course}
								fromDate={item.fromDate}
								toDate={item.toDate}
								resume={item.resume}
							/>
						);
					});
				}}
			</Context.Consumer>
		</div>
	);
};
