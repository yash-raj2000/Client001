import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <div
        className="container-abt"
        style={{ }}
      >
        <div className="section">
          <h1>ABOUT</h1>
          <hr style={{ color: "black" }} />
          <p>
            Hello, I am <em>Anand Raj</em>, a dedicated and driven student
            currently pursuing the{" "}
            <span style={{ background: "bisque" }}>Company Secretary</span> (CS)
            qualification at the{" "}
            <span style={{ background: "bisque" }}>professional level</span>,
            Completed My Foundation Level and Executive Level. I have always
            been passionate about the intricate workings of corporate
            governance, compliance, and legal frameworks that shape the business
            world. <br />
            My journey towards becoming a Company Secretary has been marked by a
            strong academic foundation coupled with practical experiences. I
            believe in continuous learning and staying updated with the latest
            regulatory changes and industry trends. <br />
            Through my education and experiences, I aim to contribute
            meaningfully to organizations by ensuring adherence to legal and
            ethical standards, promoting transparency, and fostering good
            corporate governance practices. <br />
            <br />
            I am excited about the opportunities that lie ahead and am
            determined to make a positive impact in the corporate world as a
            competent and ethical professional. <br />
            <br />
            Thank you for taking the time to learn about me.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
