import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import bm from "../assets/ham.svg";
import close from "../assets/close.svg";

const Navbar2 = () => {
  const [show, setShow] = useState(false);

  return (
    <Main
      className={`ctn_ grid grid-cols-2 py-[30px] px-[30px] lg:px-[86px] justify-center items-center`}
    >
      <div>
        <img src={Logo} alt="" />
      </div>
      <div
        className={`dropdown xl:justify-between items-center justify-center ${
          !show ? "hidden" : "flex"
        } xl:flex xl:relative`}
      >
        <p className="font-medium text-2xl lg:text-[16px]  xl:text-xl xl:px-0 py-7">
          Home
        </p>
        <p className="font-medium text-2xl lg:text-[16px] xl:text-xl xl:px-0 py-7">
          Features
        </p>
        <p className="font-medium text-2xl lg:text-[16px] xl:text-xl xl:px-0 py-7">
          How it works
        </p>
        <p className="font-medium text-2xl lg:text-[16px] xl:text-xl xl:px-0 py-7">
          Twitter
        </p>
        <div className="yellow_btn">
          <p>Get Started</p>
        </div>
      </div>
      <div
        className="xl:hidden flex justify-end cursor-pointer"
        onClick={() => setShow((e) => !e)}
      >
        <img
          src={!show ? bm : close}
          alt=""
          srcset=""
          className={`nav ${show ? "fixed top-12" : ""}`}
        />
      </div>
    </Main>
  );
};

export default Navbar2;

const Main = styled.div`
  height: 128px;
  color: black;
  width: 100%;

  .ctn_ {
    @media (max-width: 1200px) {
      /* grid-template-columns: auto 1fr; */
    }
  }
  @media (max-width: 1000px) {
    color: white;
    height: 100px;
  }

  .dropdown {
    @media (max-width: 1280px) {
      position: fixed;
      top: 0;
      left: 0;
      background-color: black;
      height: 100vh;
      width: 100%;
      z-index: 1;
      flex-direction: column;
    }
  }

  .nav {
    width: 50px;
    color: rebeccapurple;
    z-index: 2;
  }

  button {
    background-color: rgba(43, 100, 242, 1);
    padding: 20px 50px;
    border-radius: 10px;
    box-shadow: 0px 4px 46px 0px rgba(43, 100, 242, 0.53);
    font-weight: 700;
    font-size: 18px;
  }
`;
