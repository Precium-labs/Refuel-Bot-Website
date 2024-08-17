import React from "react";
import img from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between py-[30px] px-[86px]">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="flex justify-between items-center">
        <p className="pr-[44px] font-medium">Home</p>
        <p className="pr-[44px] font-medium">Features</p>
        <p className="pr-[44px] font-medium">How it works</p>
        <p className="pr-[44px] font-medium">Twitter</p>
        <div className="yellow_btn">
          <p>Get Started</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
