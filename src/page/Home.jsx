import React from "react";
import Navbar from "../components/Navbar";
import fuel from "../assets/refuel.png";
import shadow from "../assets/shadow.png";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import telegramblack from "../assets/blacktelegram.png";
import img from "../assets/blockchains/botxcoin.png";
import img2 from "../assets/blockchains/celodolar.png";
import img3 from "../assets/blockchains/chainlink.png";
import img4 from "../assets/blockchains/ethereum.png";
import img5 from "../assets/blockchains/bitcoin.png";
import img6 from "../assets/blockchains/feiprotocol.png";
import img7 from "../assets/blockchains/mixing.png";
import img8 from "../assets/blockchains/shiba.png";
import img9 from "../assets/blockchains/solana.png";
import img10 from "../assets/blockchains/tether.png";
import img11 from "../assets/blockchains/tron.png";
import img12 from "../assets/blockchains/xrp.png";
import f1 from "../assets/features/one.png";
import f2 from "../assets/features/two.png";
import f3 from "../assets/features/three.png";
import f4 from "../assets/features/four.png";
import iphone from "../assets/iphone.png";
import quote from "../assets/quote.png";
import human from "../assets/image.png";
import telegramblue from "../assets/telegram.png";
import telegramblue2 from "../assets/telegram2.png";
import logo from "../assets/logo.png";
import social1 from "../assets/socialsicon/github.png";
import social2 from "../assets/socialsicon/telegram.png";
import social3 from "../assets/socialsicon/twitter.png";
import Navbar2 from "../components/Navbar2";

const Home = () => {
  const data = [
    {
      pathname: img6,
    },
    {
      pathname: img5,
    },
    {
      pathname: img4,
    },
    {
      pathname: img10,
    },
    {
      pathname: img12,
    },
    {
      pathname: img,
    },
    {
      pathname: img9,
    },
    {
      pathname: img3,
    },
    {
      pathname: img11,
    },
    {
      pathname: img8,
    },
    {
      pathname: img2,
    },

    {
      pathname: img7,
    },
  ];

  const dataFeatures = [
    {
      pathname: f1,
      text1: "Emergency Funds",
      text2:
        "Securely store gas funds for quick access across various blockchains.",
    },
    {
      pathname: f2,
      text1: "Quick Refueling",
      text2: "No need for external exchanges like Binance or Bybit.",
    },
    {
      pathname: f3,
      text1: "Easy to Use",
      text2: "Simple steps to keep your wallet fueled.",
    },
    {
      pathname: f4,
      text1: "Secure Transactions",
      text2: "Ensuring your trades are never halted due to a lack of gas.",
    },
  ];

  const data2 = [
    {
      text1: "Store Funds",
      text2: "Deposit a small amount of funds for emergencies.",
    },
    {
      text1: "Trade Freely",
      text2: "Swap and trade your tokens without interruption.",
    },
    {
      text1: "Refuel Instantly",
      text2: "Top up your gas fees directly from the bot when needed.",
    },
  ];

  const dataTestimonials = [
    {
      pathname: f1,
      text1: "Emergency Funds",
      text2:
        "Securely store gas funds for quick access across various blockchains.",
    },
    {
      pathname: f2,
      text1: "Quick Refueling",
      text2: "No need for external exchanges like Binance or Bybit.",
    },
    {
      pathname: f3,
      text1: "Easy to Use",
      text2: "Simple steps to keep your wallet fueled.",
    },
    {
      pathname: f4,
      text1: "Secure Transactions",
      text2: "Ensuring your trades are never halted due to a lack of gas.",
    },
    {
      pathname: f4,
      text1: "Secure Transactions",
      text2: "Ensuring your trades are never halted due to a lack of gas.",
    },
    {
      pathname: f4,
      text1: "Secure Transactions",
      text2: "Ensuring your trades are never halted due to a lack of gas.",
    },
    {
      pathname: f4,
      text1: "Secure Transactions",
      text2: "Ensuring your trades are never halted due to a lack of gas.",
    },
    {
      pathname: f4,
      text1: "Secure Transactions",
      text2: "Ensuring your trades are never halted due to a lack of gas.",
    },
  ];

  return (
    <div>
      <Navbar2 />
      <div className="pt-[120px] bg-[] lg:pt-[196px] pl-[10px] lg:pl-[100px] h-[100vh] relative overflow-hidden">
        <div className="absolute right-0 bottom-0">
          <img src={fuel} alt="" className="" />
        </div>
        <div className="absolute left-0 top-0" style={{ zIndex: -22 }}>
          <img src={shadow} alt="" className="" />
        </div>
        <div className="absolute left-0 top-0" style={{ zIndex: -22 }}>
          <img src={frame3} alt="" className="" />
        </div>

        <p className="text-[43px] lg:text-[86.5px]">Never run out of gas</p>
        <p className="pt-[10px] lg:pt-[30px] text-xl">
          Top up your gas fees anytime, anywhere with and keep your crypto
          operations running <br /> smoothly. Store funds and refuel instantly
          with our telegram Bot
        </p>
        <div className="flex mt-[30px]">
          <div className="yellow_btn mr-[20px] lg:mr-[37px]">
            <p className="">Get Started</p>
          </div>
          <div className="white_btn flex justify-center items-center">
            <p className="mr-4">Get Started</p>
            <img src={telegramblack} alt="" className="w-[21.39px] h-[22px]" />
          </div>
        </div>
      </div>
      <div className="py-[101px] lg:px-[84px]">
        <p className="text-center pb-[43px] px-[30px] lg:[px-0px] text-[20px]">
          Compatible with a wide range of digital assets and cryptocurrencies
        </p>
        <div
          className={`flex justify-center overflow-scroll scrollable-container`}
        >
          {data.slice(0, 6).map((val, i) => (
            <div
              className={`flex mb-[14px] justify-center items-center pr-[16px] 
                ml-[${i == 0 ? "21px" : "0px"}]`}
            >
              <img
                src={`${val.pathname}`}
                alt=""
                style={{ objectFit: "contain" }}
                className={`bg-[#F4F4F4] py-[16px] px-[30px] rounded-[220px] min-w-[182px] min-h-[74px]`}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center  overflow-scroll scrollable-container">
          {data.slice(6, 12).map((val, i) => (
            <div
              className={`flex mb-[14px] justify-center items-center pr-[16px] `}
            >
              <img
                src={`${val.pathname}`}
                alt=""
                style={{ objectFit: "contain" }}
                className={`bg-[#F4F4F4] py-[16px] px-[33px] rounded-[220px] min-w-[182px] min-h-[74px]`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-2 bg-[#060806] text-[#fff] pt-[175px] px-[20px] lg:px-[120px] pb-[131px]">
        <div>
          <p className="font-[590] text-[60.71px]">How it works</p>
          <p className="text-[18px]">
            Step by Step guide on how to use the telegram bot
          </p>
          <div className="flex justify-center items-center">
            <img
              src={iphone}
              alt=""
              className="pt-[105px] w-[280px] h-[auto] lg:w-[auto] lg:h-[auto]"
            />
          </div>
        </div>
        <div className="">
          {data2.map((val, i) => (
            <div className="flex items-center mx-[20px] my-[20px] lg:mx-[66.67px] lg:my-[66.67px] relative">
              {window.innerWidth > 500 && (
                <>
                  <div className={`${i != 2 ? "line line1" : ""}`}></div>
                  <div className={`${i != 2 ? "line line2" : ""}`}></div>
                  <div className={`${i != 2 ? "line line3" : ""}`}></div>
                  <div className={`${i != 2 ? "line line4" : ""}`}></div>
                  <div className={`${i != 2 ? "line line5" : ""}`}></div>
                  <div className={`${i != 2 ? "line line5" : ""}`}></div>
                  <div className={`${i != 2 ? "line line6" : ""}`}></div>
                  <div className={`${i != 2 ? "line line7" : ""}`}></div>
                  <div className={`${i != 2 ? "line line8" : ""}`}></div>
                  <div className={`${i != 2 ? "line line9" : ""}`}></div>

                  <div className="circle bg-[#F2A700] w-[94.24px] h-[94.24px] flex justify-center items-center mr-[66px]">
                    <p className="text-[40.34px] font-[700]">{i + 1}</p>
                  </div>
                </>
              )}
              <div className="lg:w-[366px] h-[312px] px-[20px] flex flex-col justify-center align-center text-center border">
                <p className="text-[34.87px]">{val.text1}</p>
                <p className="text-[16px]">{val.text2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-[163px] pb-[243px] px-[30px] lg:px-[129px] ">
        <p className="text-center text-[60.71px] font-[590] mb-[105px]">
          Features
        </p>
        <div className="grid lg:grid-cols-2 gap-[32px]">
          {dataFeatures.map((val) => (
            <div className="flex bg-[#061417] h-[278px] border2 px-[13px] lg:px-[66px] py-[83px]">
              <div className="bg-[#F2A700] p-[20px] rounded-full  w-[70px] h-[70px] lg:w-[89px] lg:h-[89px] flex items-center justify-center ">
                <img
                  src={val.pathname}
                  alt=""
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <div>
                <p className="ml-[27px] text-white text-[20px] lg:text-[34.87px]">
                  {val.text1}
                </p>
                <p className="text-white  ml-[27px]">{val.text2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={``}>
        <p className="text-[30px] lg:text-[60.71px] font-[590] text-center">
          Testimonials
        </p>
        <p className="text-[16px] lg:text-[18px] font-[400 text-center">
          Reviews from users who have benefited from using the Refuel Bot.
        </p>
        {/* <marquee width={window.innerWidth} direction="left" height="auto"> */}
        <div
          className={`flex lg:grid lg:grid-cols-4 gap-x-20 mt-[50px] lg:mt-[107px] min-w-[${"600px"}] overflow-x-scroll scrollable-container`}
        >
          {dataTestimonials.map((val, i) => (
            <div
              key={i}
              className={`border3 ml-[24px] pl-[24px] pr-[26px] pt-[41px] pb-[24px] lg:mb-[24px] min-w-[377px]
                ${
                  i + 1 > Math.round(dataTestimonials.length / 2)
                    ? "lg:ml-[50%]"
                    : ""
                }
                `}
            >
              <img src={quote} alt="" className="pb-[16px]" />
              <p className="">
                Refuel Bot has been a lifesaver! I can trade without worrying
                about gas fees interrupting my strategy.
              </p>
              <div className="flex mt-[44px] justify-center items-center">
                <img src={human} alt="" />
                <div className="ml-[24px]">
                  <p>John Doe</p>
                  <p>CEO at FinTech Solutions</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* </marquee> */}
      </div>
      <div className="pt-[243px] mb-[203px]">
        <div className="bg-[#060806] lg:rounded-[20px] relative lg:mx-[61px] pt-[150px] pb-[100px] flex flex-col items-center justify-center">
          <img
            src={telegramblue}
            alt=""
            className="absolute left-[30px] lg:left-[90px] bottom-[-10px] w-[100px] lg:w-auto"
          />
          <img
            src={telegramblue2}
            alt=""
            className="absolute right-[0] top-[-0px] w-[130px] lg:w-auto"
          />
          <p className="text-white text-[30px] lg:text-[60.71px] font-[590]">
            Try Refuel Bot Now
          </p>
          <p
            className="text-white text-[16px] lg:text-[18px] text-center pt-[27px] pb-[30px]"
            style={{ lineHeight: "30px", letterSpacing: "1.5px" }}
          >
            Get started now and keep your crypto journey moving forward without{" "}
            <br />
            interruption. Download the telegram bot to get started
          </p>
          <button className="bg-[#F2A700] text-white py-[20px] px-[25px] lg:px-[50px]">
            Download Telegram Bot
          </button>
        </div>
      </div>
      <div className="footer grid lg:grid-cols-3 grid-cols-1  items-center pb-[91px] px-[101px]">
        <div className="flex justify-center md:justify-left mb-[20px] lg:mb-0">
          <img src={logo} alt="" />
        </div>
        <div className="grid lg:grid-cols-4 justify-center items-center">
          <p className="font-[500] text-center mb-[20px] lg:mb-0">About</p>
          <p className="font-[500] text-center mb-[20px] lg:mb-0">
            Help Centre
          </p>
          <p className="font-[500] text-center mb-[20px] lg:mb-0">Privacy</p>
          <p className="font-[500] text-center mb-[20px] lg:mb-0">Terms</p>
        </div>
        <div className="flex justify-center">
          <img src={social1} alt="" className="px-[10px] w-[52px]" />
          <img src={social2} alt="" className="px-[10px] w-[52px]" />
          <img src={social3} alt="" className="px-[10px] w-[52px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;