import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Faq() {
  return (
    <>
      <Navbar />
      <div className="container-faq" style={{ marginBottom: "2rem" }}>
        <h1 style={{ marginTop: "2rem" }}>FAQ's on Income Tax E-filing:</h1>
        <hr />
        <h2>What is e-filing of income tax returns?</h2>
        <p>
          E-filing of income tax returns refers to the process of filing ITR
          (Income Tax Return) online. In other words, it is the process of
          submitting your tax returns electronically.
        </p>
        <hr />
        <h2>What are the documents required for e-filing?</h2>
        <p>Following are the documents required for filing ITR:</p>
        <ul>
          <li>Form 16</li>
          <li>Bank interest certificates</li>
          <li>TDS certificates and Form 16A</li>
          <li>Annual Information Statement</li>
          <li>Proofs of tax-saving investment</li>
          <li>Capital gains statement</li>
          <li>Form 26AS</li>
        </ul>
        <hr />
        <h2>What are the benefits of filing an ITR?</h2>
        <p>
          Apart from staying compliant, there are various other benefits of
          filing an ITR. Some of them are listed below:
        </p>
        <ul>
          <li>Easy loan approval</li>
          <li>Quick income tax refund</li>
          <li>Acts as the proof of income and address</li>
          <li>Quick visa processing</li>
          <li>Allows carry forward of losses</li>
          <li>Helps claim income tax refunds easily</li>
          <li>Helps buy term insurance</li>
          <li>Helps avoid penalties for non-filing</li>
        </ul>
        <hr />
        <h2>Is it compulsory to do the e-filing of ITR?</h2>
        <p>
          People having an annual income exceeding the basic exemption limit,
          i.e., Rs. 2.5 lakhs, are mandatorily required to do e-filing of ITR.
          Any individual below 60 years of age having an income exceeding Rs.
          2.5 lakhs has to file an ITR.
        </p>
        <hr />
      </div>
      <Footer />
    </>
  );
}

export default Faq;
