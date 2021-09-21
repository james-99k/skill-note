import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { skillsCollection } from "./data/firebase";
import loadSampleData from "./data/load-sample-data";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// loadSampleData();


