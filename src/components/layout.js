import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import HeaderMainNavBar from "./HeaderMenu";

import Home from "../pages/Home";
import About from "../pages/AboutUs";
import SignIn from "../pages/Login";
import Contact from "../pages/ContactUs";

function layout() {
  return (
    <>
      <HeaderMainNavBar />
      <Container fluid>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </Container>
    </>
  );
}

export default layout;
