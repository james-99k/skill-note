import db from "./firebase";
import sampleData from "./sample-data.json";

async function loadSampleData() {
  sampleData.map(addSkill);
}

async function addSkill({ title, rating, note }) {
  try {
    const data = { title, rating, note };

    // Look up a skill matching the title and release year.
    const snapshot = await db
      .collection("skills")
      .where("title", "==", title)
      .where("note", "==", note)
      .get();

    // Create a doc reference that points to where this skill is located in the DB - either a new
    // doc if it is not there, or the existing doc.
    let docRef;
    if (snapshot.empty) {
      docRef = db.collection("skills").doc();
    } else {
      docRef = snapshot.docs[0].ref;
    }

    // Update the doc with the given data.
    await docRef.set(data);
  } catch (error) {
    console.log(error);
  }
}

export default loadSampleData;
