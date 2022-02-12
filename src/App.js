import React from "react";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Stack from "./components/stack/Stack";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }}>
      <Header />
      <Hero />
      <About />

      <Contact />
    </SimpleBar>
  );
}

export default App;
