import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <img className="image" src={require("../images/Home-mob.png")} alt="" />
        <div className="text-home">
          <h1 className="h1-home" style={{ color: "black" }}>
            File Returns Made Simple – Leave the Legal Work to Us! <hr />
            Maximizing Returns, Minimizing Hassle - Your Trusted Filing Partner!
          </h1>
          <h1 className="h1-home2">-ANAND RAJ</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
