import Header from "../Header/Header";
import React from "react";
import { useResize } from "../../tools/useResize/useResize";
import "./Main.css";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

export default function Main() {
  const screenChecker = useResize();
  const isMobile = screenChecker.isScreenLg;
  return (
    <div className="main">
      <div className="background__red-light"></div>
      <div className="background__purple-light"></div>
      <div className="background__red-ball"></div>
      <div className="background__red-ball_lolly"></div>
      <div className="background__purple-ball"></div>
      <Header isMobile={isMobile} />
      <Content isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </div>
  );
}
