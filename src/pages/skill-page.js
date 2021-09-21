import React from "react";
import { Helmet } from "react-helmet";
import SkillListing from "../components/skill-listing";

function SkillsPage() {
  return (
    <main>
      <Helmet>
        <title>Skills Tracker</title>
      </Helmet>
      <SkillListing />
    </main>
  );
}

export default SkillsPage;
