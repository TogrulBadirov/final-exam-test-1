import React from "react";
import "./index.scss";
import CustomButton from "../../components/CustomButton";
const Header = () => {
  return (
    <section id="header">
      <div className="header-container">
        <div className="left-side">
          <img
            src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png.webp"
            alt=""
          />
        </div>
        <div className="right-side">
          <span className="header-top">Shop is fun</span>
          <h1 className="content-header">BROWSE OUR PREMIUM PRODUCT</h1>
          <p className="header-paragraph">
            Us which over of signs divide dominion deep fill bring they're meat
            beho upon own earth without morning over third. Their male dry. They
            are great appear whose land fly grass.
          </p>
          <CustomButton content={"Browse Now"}/>
        </div>
      </div>
      <div className="bacground-left"></div>
      <div className="bacground-right"></div>
    </section>
  );
};

export default Header;
