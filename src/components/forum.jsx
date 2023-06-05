import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import "./forum.css";
import UserComment from "./UserComment";

export default function Forum() {
	const [comments, setComments] = useState([]);
	const [name, setName] = useState("");
	const [comment, setComment] = useState("");

	/*useEffect(() => {
		if (localStorage.getItem("state")) {
			setComments(...JSON.parse(localStorage.getItem("state")));
		}
	});*/

	const removeComment = (id) => {
		const newComments = comments.filter((comment) => comment.id !== id);
		setComments(newComments);

		//localStorage.removeItem((comment) => {
		//	JSON.stringify(name), JSON.stringify(comment);
		//	});
	};

	const addComment = () => {
		//localStorage.setItem("state", JSON.stringify(comments));

		setComments((oldComments) => [
			{
				id: comments.length
					? comments.reduce((p, c) => (p.id > c.id ? p : c)).id + 1
					: 1,
				name: name,
				comment: comment,
				date: new Date(),
				isNewUserComment: true,
			},
			...oldComments,
		]);
		localStorage.setItem("state", JSON.stringify(comments));
		setName("");
		setComment("");
	};

	return (
		<form className="container">
			<div className="messages">
				{comments.map((comment, key) => (
					<UserComment
						id={comment.id}
						key={comment.id}
						name={comment.name}
						comment={comment.comment}
						date={comment.date}
						removeComment={removeComment}
						isNewUserComment={key === 0}
					/>
				))}
			</div>
			<label>
				NickName{" "}
				<input
					className="user-nickname"
					type="text"
					value={name}
					name="name"
					onChange={({ target }) => {
						setName(target.value);
					}}
				/>
			</label>

			<input
				className="user-text"
				placeholder="add your comment..."
				type="textarea"
				value={comment}
				name="name"
				onChange={({ target }) => {
					setComment(target.value);
				}}
			/>
			<button
				className="btn"
				type="button"
				onClick={() => {
					addComment();
				}}
			>
				Send
			</button>
		</form>
	);
}
