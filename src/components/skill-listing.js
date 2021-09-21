import React, { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import { skillsCollection } from "../data/firebase";
import Skill from "./skill";
import "./skill-listing.css";

// useEffect Hook:
// > Guide, https://reactjs.org/docs/hooks-effect.html
// > API Docs, https://reactjs.org/docs/hooks-reference.html#useeffect

function SkillListing() {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect allows us to run side-effects after rendering.
  // Passing in an empty array for the 2nd parameter allows us to run the effect conditionally and
  // only when the component mounts to the page.
  useEffect(() => {
    // Method 1 of reading the database - read only once:
    // async function getAllSkills() {
    //   setIsLoading(true);
    //   try {
    //     const snapshot = await skillsCollection.get();
    //     const docs = snapshot.docs;
    //     // This is so that we can test our error flow:
    //     // throw new Error("Something has gone wrong!");
    //     setSkills(docs);
    //   } catch (error) {
    //     setErrorMessage("There was a problem loading your skill ratings. Please try again.");
    //     console.error(error);
    //   }
    //   setIsLoading(false);
    // }
    // getAllSkills();

    // Method 2 of reading the database - listening for realtime updates:
    setIsLoading(true);
    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setSkills(docs);
    };
    const onError = (error) => {
      setErrorMessage("There was a problem loading your skill ratings. Please try again.");
      console.error(error);
    };
    const unsubscribe = skillsCollection.orderBy("rating", "desc").onSnapshot(onNext, onError);
    return unsubscribe;
  }, []);

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      <ul className="skill-list">
        {skills.map((skillDoc) => {
          const skillId = skillDoc.id;
          const skillData = skillDoc.data();
          return (
            <li key={skillId}>
              <Skill id={skillId} data={skillData} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SkillListing;
