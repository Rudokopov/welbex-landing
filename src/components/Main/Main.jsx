import Header from "../Header/Header";
import React from "react";
import "./Main.css";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <div className="main">
      <div className="background__red-light"></div>
      <div className="background__purple-light"></div>
      <div className="background__red-ball"></div>
      <div className="background__red-ball background__red-ball_lolly"></div>
      <div className="background__purple-ball"></div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
