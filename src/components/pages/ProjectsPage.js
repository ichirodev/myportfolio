import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Projects from "../Projects";

export default class ProjectsPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Projects />
        <Footer />
      </>
    );
  }
}
