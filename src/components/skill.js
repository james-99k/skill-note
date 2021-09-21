import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Delete, Edit } from "@material-ui/icons";
import ErrorMessage from "./error-message";
import { skillsCollection } from "../data/firebase";
import "./skill.css";

function Skill(props) {
  const { id, data } = props;
  const { title, note, rating } = data;

  const ratingString = "💪".repeat(rating) + "◽".repeat(5 - rating);

  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteSkill = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = skillsCollection.doc(id);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while deleting. Please try again.");
      setIsDeleting(false);
    }
  };

  return (
    <div className="skill">
      <div className="skill__contents">
        <div className="skill__title">{title}</div>
        <div className="skill__buttons">
          <button
            className="skill__button delete"
            disabled={isDeleting}
            onClick={deleteSkill}
          >
            <Delete />
          </button>
          <button
            className="skill__button edit"
            onClick={() => history.push(`/edit/${id}`)}
          >
            <Edit />
          </button>
        </div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <div className="skill__rating">{ratingString}</div>
      </div>
      <div>
        <div className="skill__note">{note}</div>
      </div>
    </div>
  );
}

export default Skill;
