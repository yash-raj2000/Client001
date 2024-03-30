import React from "react";
import Navbar from "./Navbar";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import Footer from "./Footer";

function Contact() {
  const handleClick = () => {
    window.open("https://anandraaz.netlify.app/getintouch", "_self");
  };

  return (
    <div>
      <Navbar />
      <div className="container container-cont">
        <div className="section sec-cont">
          <div className="sub-section">
            <div className="sec-left">
              <h1 className="slogan">
                Streamlining Taxes, Empowering Businesses – Connect with Us for
                Hassle-Free Filing! <br />
                Contact Now:
              </h1>
              <button onClick={handleClick} className="btn-contact">
                <span>CONTACT US</span>
              </button>
            </div>
            <div className="sec-right" style={{ marginTop: "3rem" }}>
              <div className="box">
                <div className="icon">
                  <EmailIcon />
                </div>
                <div className="text-cont">
                  <a
                    className="text-a"
                    href="mailto:yashrajsingh282@gmail.com?subject=SendMail&body=Description"
                  >
                    EMAIL
                  </a>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <FacebookIcon />
                </div>
                <div className="text-cont">
                  <a className="text-a" href="www.facebook.com">
                    FACEBOOK
                  </a>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <CallIcon />
                </div>
                <div className="text-cont">+91 9229320397</div>
              </div>
              <div className="box">
                <div className="icon">
                  <WhatsAppIcon />
                </div>
                <div className="text-cont">+91 7631691749</div>
              </div>
              <div className="box">
                <div className="icon">
                  <InstagramIcon />
                </div>
                <div className="text-cont">
                  <a className="text-a" href="www.instagram.com">
                    INSTAGRAM
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
