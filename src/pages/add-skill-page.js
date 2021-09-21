import React from "react";
import { Helmet } from "react-helmet";
import AddSkill from "../components/add-skill";

function AddSkillPage() {
  return (
    <main>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <AddSkill />
    </main>
  );
}

export default AddSkillPage;
