import { Link } from "react-router-dom";
import { MessageCircle, Sparkles, Zap } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("human");
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-25 min-h-screen py-10 md:py-0 px-4 md:px-0">
      <img
        className="absolute bottom-0 left-0 opacity-5 -z-10"
        src="/orbital.png"
        alt=""
        style={{ animation: "100s linear infinite rotateOrbit" }}
      />
      <div className="flex-1 flex flex-col gap-4 text-center items-center justify-center">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#217bfe] via-[#e55571] to-pink-500">
          SUZGPT
        </h1>
        <h2 className="text-lg md:text-xl text-gray-300 max-w-lg font-light px-4 md:px-0">
          Instant answers. Creative assistance.
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-3 md:gap-5 mb-8 md:mb-12 animate-fade-in-up [animation-delay:600ms]">
          <div className="flex items-center gap-2 text-gray-300">
            <MessageCircle className="w-4 md:w-5 h-4 md:h-5 text-blue-500" />
            <span className="text-sm md:text-base">Natural Conversations</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Zap className="w-4 md:w-5 h-4 md:h-5 text-blue-500" />
            <span className="text-sm md:text-base">Lightning Fast</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-blue-500" />
            <span className="text-sm md:text-base">Creative & Intelligent</span>
          </div>
        </div>
        <Link to="/dashboard">
          <button className="bg-blue-500 px-5 md:px-6 py-2.5 md:py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform cursor-pointer">
            Get Started
          </button>
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center w-full md:h-full">
        {/* img container */}
        <div className="flex items-center justify-center bg-[#140e2d] rounded-3xl md:rounded-4xl w-[95%] md:w-[80%] h-[300px] md:h-[50%] relative">
          {/* bg container */}
          <div className="w-full h-full overflow-hidden absolute top-0 left-0 rounded-3xl md:rounded-4xl">
            {/* bg */}
            <div
              className="w-full h-full opacity-5 bg-size-[auto_100%]"
              style={{
                backgroundImage: `url(/bg.png)`,
                animation: "8s ease-in-out infinite alternate slideBg",
              }}
            ></div>
          </div>
          <img
            src="/bot.png"
            alt=""
            className="w-full h-full object-contain"
            style={{
              animation: "3s ease-in-out infinite alternate botAnimate",
            }}
          />
          <div className="absolute -bottom-4 right-2 md:-right-5 flex items-center gap-2 md:gap-3 p-3 md:p-5 bg-[#2c2937] rounded-2xl md:rounded-3xl">
            <img
              src={
                typingStatus === "human"
                  ? "https://i.postimg.cc/MHNTng3H/48967698-human-face.jpg"
                  : "bot.png"
              }
              className="w-6 md:w-8 h-6 md:h-8 rounded-full object-contain"
              alt=""
            />
            <TypeAnimation
              sequence={[
                "Your intelligent co-pilot for any task.",
                2000,
                () => {
                  setTypingStatus("human");
                },
                "Get instant, creative help.",
                2000,
                () => {
                  setTypingStatus("ai");
                },
                "Simplify your workflow.",
                2000,
                () => {
                  setTypingStatus("human");
                },
                "Bring your ideas to life.",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
              className="text-sm md:text-base"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
