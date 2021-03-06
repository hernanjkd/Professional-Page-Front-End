import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const EducationCard = props => {
	const [saveCard, setSaveCard] = useState(false);
	const [editMode, setEditMode] = useState(false);
	const [degree, setDegree] = useState(props.degree);
	const [school, setSchool] = useState(props.school);
	const [course, setCourse] = useState(props.course);
	const [fromDate, setFromDate] = useState(props.fromDate);
	const [toDate, setToDate] = useState(props.toDate);

	useEffect(
		() => {
			if (props.degree != degree) setDegree(props.degree);
			if (props.school != school) setSchool(props.school);
			if (props.course != course) setCourse(props.course);
			if (props.fromDate != fromDate) setFromDate(props.fromDate);
			if (props.toDate != toDate) setToDate(props.toDate);
		},
		[saveCard]
	);

	return (
		<Context.Consumer>
			{({ actions }) => {
				return (
					<div className="card mt-2 bg-light">
						<div className={editMode ? "card-body text-center" : "card-body text-left"}>
							<div className="float-left">
								<i
									className="fas fa-trash-alt mr-3"
									onClick={() => actions.deleteEducation(props.id)}
								/>
								{editMode ? (
									<i className="fas fa-times fa-lg" onClick={() => setEditMode(!editMode)} />
								) : (
									<i className="fas fa-pencil-alt" onClick={() => setEditMode(!editMode)} />
								)}
							</div>
							<div className={editMode ? "text-center" : "text-right"}>
								{editMode ? (
									<DatePicker
										className="datepicker"
										selected={new Date(fromDate)}
										dateFormat="MM/dd/yyyy"
										fixedHeight
										showMonthDropdown
										showYearDropdown
										onChange={date => {
											setFromDate(
												date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
											);
										}}
									/>
								) : (
									<i className="dates">{fromDate} - </i>
								)}
								{editMode ? (
									<DatePicker
										className="datepicker"
										selected={new Date(toDate)}
										dateFormat="MM/dd/yyyy"
										fixedHeight
										showMonthDropdown
										showYearDropdown
										onChange={date => {
											setToDate(
												date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
											);
										}}
									/>
								) : (
									<i className="dates">{toDate}</i>
								)}
							</div>
							{editMode ? (
								<input
									className="input-field m-1"
									type="text"
									value={degree}
									onChange={({ target: { value: v } }) => setDegree(v)}
								/>
							) : (
								<h5 className="card-title text-center">{degree}</h5>
							)}
							{editMode ? (
								<input
									className="input-field m-1"
									type="text"
									value={school}
									onChange={e => setSchool(e.target.value)}
								/>
							) : (
								<h6 className="card-title text-center">{school}</h6>
							)}
							{editMode ? (
								<input
									className="input-field m-1"
									type="text"
									value={course}
									onChange={e => setCourse(e.target.value)}
								/>
							) : (
								<p className="card-text text-center">{course}</p>
							)}
						</div>
						<div className="card-footer text-muted">
							<input
								className="display-inline-block"
								type="checkbox"
								checked={props.resume === "true" ? "checked" : ""}
								onChange={() => {
									let resume = props.resume === "true" ? "false" : "true";
									const obj = {
										id: props.id,
										school: school,
										degree: degree,
										course: course,
										fromDate: fromDate,
										toDate: toDate,
										resume: resume
									};
									actions.editItem("education", props.index, obj);
								}}
							/>
							Resume
							{editMode ? (
								<button
									className="btn btn-info float-right"
									onClick={() => {
										setEditMode(!editMode);
										setSaveCard(!saveCard);
										const obj = {
											id: props.id,
											school: school,
											degree: degree,
											course: course,
											fromDate: fromDate,
											toDate: toDate,
											resume: props.resume
										};
										actions.editItem("education", props.index, obj);
									}}>
									Save
								</button>
							) : (
								""
							)}
						</div>
					</div>
				);
			}}
		</Context.Consumer>
	);
};

EducationCard.propTypes = {
	id: PropTypes.number,
	index: PropTypes.number,
	degree: PropTypes.string,
	school: PropTypes.string,
	course: PropTypes.string,
	fromDate: PropTypes.string,
	toDate: PropTypes.string,
	resume: PropTypes.string
};
