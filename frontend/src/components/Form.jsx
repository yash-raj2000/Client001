import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from "./Footer";

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/send",
        formData,
        { rejectUnauthorized: false }
      );
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container cont-form">
        <div className="form-container">
          <h2
            style={{
              margin: "0 0 0 1rem",
              "font-family": '"Roboto Mono", monospace',
              fontSize: "2rem",
            }}
          >
            Contact Us:
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
            />
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile*"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              id="message"
              cols="30"
              rows="10"
              placeholder="Message*"
            ></textarea>

            <button type="submit" className="btn-form">
              SEND
            </button>
          </form>
        </div>
        <div className="text">
          <h1 style={{ color: "black" }}>
            Navigate Taxes with Ease, Achieve Financial Peace!
            <br />
            Hit <em>Send</em> and lets's start working together.
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GetInTouch;
