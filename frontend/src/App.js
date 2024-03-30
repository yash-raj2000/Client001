import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Faq from "./components/Faq";

import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/getintouch" element={<Form />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
