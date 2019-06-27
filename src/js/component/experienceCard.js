import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const ExperienceCard = props => {
	const [saveCard, setSaveCard] = useState(false);
	const [editMode, setEditMode] = useState(false);
	const [title, setTitle] = useState(props.title);
	const [company, setCompany] = useState(props.company);
	const [description, setDescription] = useState(props.description);
	const [fromDate, setFromDate] = useState(props.fromDate);
	const [toDate, setToDate] = useState(props.toDate);

	useEffect(
		() => {
			if (props.title != title) setTitle(props.title);
			if (props.company != company) setCompany(props.company);
			if (props.description != description) setDescription(props.description);
			if (props.fromDate != fromDate) setFromDate(props.fromDate);
			if (props.toDate != toDate) setToDate(props.toDate);
		},
		[saveCard]
	);

	return (
		<div className="card mt-2 bg-light">
			<div className={editMode ? "card-body text-center" : "card-body text-left"}>
				<div className="float-left">
					<i className="fas fa-trash-alt mr-3" />
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
								setFromDate(date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear());
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
								setToDate(date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear());
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
						value={title}
						onChange={({ target: { value: v } }) => setTitle(v)}
					/>
				) : (
					<h5 className="card-title text-center">{title}</h5>
				)}
				{editMode ? (
					<input
						className="input-field m-1"
						type="text"
						value={company}
						onChange={e => setCompany(e.target.value)}
					/>
				) : (
					<h6 className="card-title text-center">{company}</h6>
				)}
				{editMode ? (
					<textarea
						className="input-field m-1"
						rows="3"
						onChange={e => setDescription(e.target.value)}
						value={description}
					/>
				) : (
					<p className="card-text text-left">{description}</p>
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
									const obj = {
										id: props.id,
										title: title,
										company: company,
										description: description,
										fromDate: fromDate,
										toDate: toDate,
										resume: resume,
										page: props.page
									};
								}}
							/>
							Resume
							<input
								className="ml-4 display-inline-block"
								type="checkbox"
								checked={props.page === "true" ? "checked" : ""}
								onChange={() => {
									let page = props.page === "true" ? "false" : "true";
									const obj = {
										id: props.id,
										title: title,
										company: company,
										description: description,
										fromDate: fromDate,
										toDate: toDate,
										resume: props.resume,
										page: page
									};
									actions.editItem("experience", props.index, obj);
								}}
							/>
							Page
							{editMode ? (
								<button
									className="btn btn-info float-right"
									onClick={() => {
										setEditMode(!editMode);
										setSaveCard(!saveCard);
										const obj = {
											id: props.id,
											title: title,
											company: company,
											description: description,
											fromDate: fromDate,
											toDate: toDate,
											resume: props.resume,
											page: props.page
										};
										actions.editItem("experience", props.index, obj);
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

ExperienceCard.propTypes = {
	title: PropTypes.string,
	company: PropTypes.string,
	description: PropTypes.string,
	fromDate: PropTypes.string,
	toDate: PropTypes.string,
	resume: PropTypes.string,
	page: PropTypes.string,
	id: PropTypes.number,
	index: PropTypes.number
};
