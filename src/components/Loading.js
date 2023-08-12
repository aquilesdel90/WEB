import React from "react";
import { FadeLoader } from "react-spinners";
import logo_gunny from "../assets/imgs/gunny-logo.png";

import "../assets/styles/Loading.css";
const Loading = ({ isLoading }) => {
  return (
    <div className="loading-container">
      <img src={logo_gunny} alt="logo" />
      <div className="loader">
        <FadeLoader size={150} color={"#123abc"} loading={isLoading} />
      </div>
    </div>
  );
};

export default Loading;
