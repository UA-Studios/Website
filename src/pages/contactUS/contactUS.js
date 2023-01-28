import React from "react";
import LandingImage from "../../components/landingImage/landingImage";
import { contactLandingImg } from "../../data";
import Address from "./components/address";

const ContactUS = () => {
  return (
    <div className="home_root">
      <LandingImage image={contactLandingImg} />
      <Address />
    </div>
  );
};

export default ContactUS;
