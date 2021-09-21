import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./skill-form.css";

function SkillForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;

  if (initialState.title === undefined) initialState.title = "";
  if (initialState.rating === undefined) initialState.title = 3;
  if (initialState.note === undefined) initialState.title = "";

  const [title, setTitle] = useState(initialState.title);
  const [rating, setRating] = useState(initialState.rating);
  const [note, setNote] = useState(initialState.note);
  const [errorMessage, setErrorMessage] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onRatingChange = (event) => {
    setRating(event.target.value);
  };
  const onNoteChange = (event) => {
    setNote(event.target.value);
  };

  const onSkillSumbit = async (event) => {
    event.preventDefault();
    onSubmit(title, rating, note);
  };

  return (
    <form className="skill-form" onSubmit={onSkillSumbit}>
      <h2 className="skill-form__title">Skill Details</h2>
      {message && <p className="skill-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="skill-form__controls" disabled={isSaving}>
        <label className="skill-form__label">Skill Title:</label>
        <input className="skill-form__input" type="text" value={title} onChange={onTitleChange} />
        <label className="skill-form__label">Rating:</label>
        <input
          className="skill-form__input"
          type="number"
          value={rating}
          onChange={onRatingChange}
        />
        <label className="skill-form__label">Note:</label>
        <input
          className="skill-form__input note"
          type="text"
          value={note}
          onChange={onNoteChange}
        />
        <input
          className="skill-form__submit"
          type="submit"
          value={isSaving ? "Saving..." : "Save"}
        />
      </fieldset>
    </form>
  );
}

export default SkillForm;
