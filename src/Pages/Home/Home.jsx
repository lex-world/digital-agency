import React from "react";
import "./style.scss";

/**
 * @components
 */
import Navbar from "../../Components/Navbar/Navbar";

/**
 * @assets
 */
import LandingBlob from "../../Assets/landing-blob.png";
import LandingBannerImage from "../../Assets/landing.png";

export default function Home() {
  return (
    <div className="home__container">
      <div className="home__container__landing">
        <img
          className="home__container__landing__blob"
          src={LandingBlob}
          alt=""
        />
        <Navbar />

          <img className="home__container__landing__bannerImage" src={LandingBannerImage} alt="" />
      </div>
    </div>
  );
}
