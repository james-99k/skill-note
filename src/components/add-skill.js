import React, { useState } from "react";
import { skillsCollection } from "../data/firebase";
import "./add-skill.css";
import SkillForm from "./skill-form";

function AddSkill() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const onSkillSumbit = async (title, rating, note) => {
    // alert(`You want to add : ${title}, ${rating}, ${note}.`);
    setIsSaving(true);
    setFormMessage("");
    try {
      await skillsCollection.add({
        title,
        rating,
        note
      });
      setFormMessage("Added Successfully")
      console.log("saved");
    } catch (error) {
      setFormMessage("Please try again.")
      console.error("Boo!");
    }
    setIsSaving(false);
  };

  return (
    <div className="add-container">
      <h1>Add Skill</h1>
      <SkillForm onSubmit={onSkillSumbit} isSaving={isSaving} message={formMessage}/>
    </div>
  );
}

export default AddSkill;
