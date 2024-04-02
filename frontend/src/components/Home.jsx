import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SecurityIcon from "@mui/icons-material/Security";
import TodayIcon from "@mui/icons-material/Today";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import BeenhereIcon from "@mui/icons-material/Beenhere";

function Home() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="home">
        <div className="sec-one">
          <div className="box-one">
            <img
              src={require("../images/Home-mob.png")}
              alt="Income Tax Related Pic*"
            />
          </div>
          <div className="box-one-">
            <h1>File Returns Made Simple Leave the Legal Work to Us!</h1>
            <hr />
            <h1>
              Maximizing Returns, Minimizing Hassle - Your Trusted Filing
              Partner!
            </h1>
          </div>
        </div>

        <div className="sec-two">
          <div className="box-two">
            <div className="rows">
              <div className="cols">
                <div className="icon" style={{ textAlign: "center" }}>
                  <SecurityIcon
                    style={{
                      fontSize: "3rem",
                    }}
                  />
                </div>
                <h1>Secure and Private </h1>
                <p>
                  Your data security is our top priority. Rest assured, your
                  information is kept private.
                </p>
              </div>
              <div className="cols">
                <div className="icon" style={{ textAlign: "center" }}>
                  <TodayIcon
                    style={{
                      fontSize: "3rem",
                    }}
                  />
                </div>
                <h1>Timely Filing</h1>
                <p>
                  Never miss a deadline again. We will send you timely
                  reminders, ensuring you file your ITR on time.
                </p>
              </div>
            </div>
            <div className="rows">
              <div className="cols">
                <div className="icon" style={{ textAlign: "center" }}>
                  <LiveHelpIcon
                    style={{
                      fontSize: "3rem",
                    }}
                  />
                </div>
                <h1> Assistance </h1>
                <p>
                  I am always ready to help you with any queries or concerns you
                  may have regarding any of our services.
                </p>
              </div>
              <div className="cols">
                <div className="icon" style={{ textAlign: "center" }}>
                  <AccessTimeIcon
                    style={{
                      fontSize: "3rem",
                    }}
                  />
                </div>
                <h1>Seamlless Integration </h1>
                <p>
                  We make the process much easier for you making the filing
                  process quick and efficient.
                </p>
              </div>
            </div>
          </div>

          <div className="box-3">
            <img src={require("../images/tax-pic.png")} alt="Animated Pic*" />
          </div>
        </div>

        <div className="sec-three">
          <div className="cont-three">
            <div className="box-three">
              <h2 style={{ color: "blue" }}>Clients:</h2>
              <div className="box-icon">
                <SupervisorAccountIcon style={{ fontSize: "1.5rem" }} />{" "}
                <span>200+</span>
              </div>
              <p>200+ Active Clients Trusts Anand Raj.</p>
            </div>
            <div className="box-three">
              <h2 style={{ color: "blue" }}>Impact:</h2>
              <div className="box-icon">
                <TipsAndUpdatesIcon style={{ fontSize: "1.5rem" }} />{" "}
                <span>90%</span>
              </div>
              <p>
                That’s how many 1st time users experience and save tax with us.
              </p>
            </div>
            <div className="box-three">
              <h2 style={{ color: "blue" }}>Experience:</h2>
              <div className="box-icon">
                <BeenhereIcon style={{ fontSize: "1.5rem" }} />
                <span>4+ Years</span>
              </div>
              <p>Having 4+ Years of Expertise in this field.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
