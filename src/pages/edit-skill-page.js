import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import EditSkill from "../components/edit-skill";

function EditSkillPage() {
  const { id } = useParams();
  return (
    <main>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <EditSkill id={id}/>
    </main>
  );
}

export default EditSkillPage;
