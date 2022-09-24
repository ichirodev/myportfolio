import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactMe from "../ContactMe";

export default class ContactPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ContactMe />
        <Footer />
      </>
    );
  }
}
