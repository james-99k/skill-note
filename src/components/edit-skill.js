import React, { useState, useEffect } from "react";
import { skillsCollection } from "../data/firebase";
import "./edit-skill.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import SkillForm from "./skill-form";

function EditSkill(props) {
  const { id } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [skillData, setSkillData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    async function getSkill() {
      setIsLoading(true);
      try {
        const skillSnapshot = await skillsCollection.doc(id).get();

        if (!skillSnapshot.exists) {
          throw new Error("No skill exist!");
        }

        const data = skillSnapshot.data();
        setSkillData(data);
      } catch (error) {
        setErrorMessage("error");
        console.error(error);
      }
      setIsLoading(false);
    }

    getSkill();
  }, [id]);

  const onSkillSubmit = async (title, rating, note) => {
    // alert(`mic test`);
    setIsSaving(true);
    setFormMessage("");
    try {
      await skillsCollection.doc(id).set({
        title,
        rating,
        note
      })
      setFormMessage("Updated!");
    } catch (error) {
      setFormMessage("Error");
      console.error(error);
    }
    setIsSaving(false);
  };

  return (
    <div className="edit-container">
      <h2>Edit Skill</h2>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      {skillData && <SkillForm initialState={skillData} onSubmit={onSkillSubmit} isSaving={isSaving} message={formMessage}/>}
    </div>
  );
}

export default EditSkill;
