import React from "react";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer>
      <span style={{ color: "black" }}>
        &copy; Copyright {currentYear} - Anand Raj
      </span>
      <span style={{ display: "block" }}>
        <a
          href="https://yashrajsinghwebverse.netlify.app/"
          rel="noreferrer"
          target="_blank"
          style={{
            listStyle: "none",
            fontSize: "0.9rem",
          }}
        >
          [About The Developer]
        </a>
      </span>
    </footer>
  );
}

export default Footer;
