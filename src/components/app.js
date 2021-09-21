import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddSkillPage from "../pages/add-skill-page";
import EditSkillPage from "../pages/edit-skill-page";
import SkillsPage from "../pages/skill-page";
import NotFoundPage from "../pages/not-found-page";
import Nav from "./nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <SkillsPage />
        </Route>

        <Route path="/add">
          <AddSkillPage />
        </Route>

        <Route path="/edit/:id">
          <EditSkillPage />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
