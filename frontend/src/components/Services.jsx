import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Services() {
  return (
    <div>
      <Navbar />
      <h1 className="h1-serv">OUR SERVICES:</h1>
      <div className="container-services">
        <div className="boxes">ITR FILING</div>
        <div className="boxes">TDS FILING</div>
        <div className="boxes">TDS REFUND</div>
        <div className="boxes">GST REGISTRATION</div>
        <div className="boxes">GST RETURN</div>
        <div className="boxes flex">
          COMPANY INCORPORATION <br />
          <p style={{ margin: "0", fontSize: "20px" }}>
            LLP/PARTNERSHIP FIRM/NGO/TRUST
          </p>
        </div>
        <div className="boxes">PAN / TAN</div>
        <div className="boxes">PROJECT REPORT</div>
        <div className="boxes">P & L AND BALANCE SHEET</div>
        <div className="boxes">CMA DATA</div>
        <div className="boxes">TRADEMARK REGISTRATION</div>
        <div className="boxes">EPFO/ESI </div>
        <div className="boxes">BOOK KEEPING</div>
        <div className="boxes">LOAN APPLY</div>
        <div className="boxes">MSME / UDYOG AADHAR</div>
        <div className="boxes">FSSAI LICENCE</div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
