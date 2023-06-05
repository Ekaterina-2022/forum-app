import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import "./userComment.css";

export default function UserComment(props, { isNewUserComment }) {
	const { id, name, comment, date } = props;
	const newCommentClass = props.isNewUserComment ? "new" : "old";

	return (
		<div key={id} className={newCommentClass}>
			<p>
				{id}. {date.toLocaleDateString()}
			</p>
			<p>{name} </p>
			<p className="comment">{comment}</p>
			<button
				className="btn-del"
				onClick={() => {
					props.removeComment(id);
				}}
			>
				Delete
			</button>
		</div>
	);
}
