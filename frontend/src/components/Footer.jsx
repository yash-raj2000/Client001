import React, { useEffect, useState } from "react";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const storedVisits = Number(localStorage.getItem("visitCounter")) || 0;
    setVisits(storedVisits + 1);
  }, []);

  useEffect(() => {
    localStorage.setItem("visitors", visits);
  }, [visits]);

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
        <p style={{ margin: "0", fontSize: "10px" }}>Visitors: {visits}</p>
      </span>
    </footer>
  );
}

export default Footer;
