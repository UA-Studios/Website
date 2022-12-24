import React from "react";
import LandingImage from "../../components/landingImage/landingImage";
import { LandingCardImg } from "../../data";
import ServicesCard from "./components/services";
import Portfolio from "./components/portfolio";
import Working from "./components/working";
// import { image, text } from "../../data";
// import "./home.scss";

const Home = () => {
  return (
    <div className="home_root">
      <LandingImage image={LandingCardImg} sx={{}} />
      <ServicesCard />
      <Portfolio />
      <Working />
    </div>
  );
};

export default Home;
