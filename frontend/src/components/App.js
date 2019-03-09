import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Grid from "./Grid";
import ProjectPage from "./ProjectPage";
import Contact from "./Contact";
import About from "./About";

function Generic(props) {
  return(
    <h3>{props.endpoint}</h3>
  );
}

const routes = [
  {
    path: `/פרטי`,
    component: Grid,
  },
  {
    path: `/פרטי/:pk`,
    component: ProjectPage,
  },
  {
    path: `/ציבורי`,
    component: Grid,
  },
  {
    path: `/ציבורי/:pk`,
    component: ProjectPage,
  },
  {
    path: `/פרסומים`,
    component: Generic,
  },
  {
    path: `/צור-קשר`,
    component: Contact,
  },
  {
    path: `/אודות`,
    component: About,
  },
]

const App = () => (
  <Router>
    <div>
      <Navbar />
      <div className="container-fluid pt-4">
        {routes.map(({path, component: C}, index) => (
          <Route
            exact path = {path}
            render = {(props) => <C {...props} />}
            key={index}
          />
        ))}
      </div>
    </div>
  </Router>
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
