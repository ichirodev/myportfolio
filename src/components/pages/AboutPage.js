import React, { Component } from "react";
import Navbar from "../Navbar";
import About from "../About";
import Footer from "../Footer";

export default class AboutPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    );
  }
}
