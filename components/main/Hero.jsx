import React, { useState } from "react";
import Image from "next/image";
import deepi from "@/components/assets/deepanshiimg.jpg";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  const [transformStyle, setTransformStyle] = useState({});

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setTransformStyle({
      transform: `translate(${x * 0.02}px, ${y * 0.02}px)`,
      transition: "transform 0.1s ease-out",
    });
  };

  return (
    <div
      className="flex lg:min-h-screen flex-col items-center justify-center py-24 bg-gray-100"
      onMouseMove={handleMouseMove}
    >
      <div
        className="flex h-5/6 w-5/6 justify-center bg-white rounded-3xl shadow-lg"
        style={transformStyle}
      >
        <div className="flex flex-col items-center w-full bg-white rounded-3xl p-6 shadow-md">
          <div className="bg-gray-200 rounded-full w-[10rem] h-[10rem] lg:w-[20rem] lg:h-[20rem] md:w-[15rem] md:h-[15rem] flex items-center justify-center">
            <Image
              src={deepi}
              alt="logo"
              className="rounded-full transition duration-200 transform hover:scale-95"
            />
          </div>
          <div className="w-[13rem] lg:w-[50rem] md:w-[30rem] h-[2px] bg-gray-300 mt-2"></div>
          <div
            className={`lg:text-[3rem] md:text-[2rem] text-[1rem] text-gray-800 mt-4 typing-animation`}
          >
            Deepanshi Gautam
          </div>
          <div
            className={`lg:text-[2rem] md:text-[1rem] text-[10px] text-gray-600 mt-2 typing-animation-student`}
          >
            Student
          </div>

          <div className="flex flex-row gap-5 lg:gap-8 mt-10 mb-4">
  {[
    { href: "https://www.linkedin.com/in/deepanshi-gautam-754532278/", icon: <FaLinkedin className="w-8 h-8" />, bgColor: "#0e76a8" },
    { href: "https://github.com/deepanshigautam", icon: <FaGithub className="w-8 h-8" />, bgColor: "#333" },
    { href: "https://twitter.com", icon: <FaTwitter className="w-8 h-8" />, bgColor: "#1da1f2" },
    { href: "https://www.instagram.com", icon: <FaInstagram className="w-8 h-8" />, bgColor: "#e1306c" },
    { href: "mailto:gdeepanshi7505@gmail.com", icon: <FaEnvelope className="w-8 h-8" />, bgColor: "#e74c3c" },
  ].map(({ href, icon, bgColor }, index) => (
    <button
      key={index}
      onClick={() => window.open(href, "_blank")}
      className={`group flex justify-center p-2 rounded-full drop-shadow-xl text-white font-semibold transition-all duration-500`}
      style={{ backgroundColor: bgColor }}
    >
      {icon}
      <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
        {href.includes('linkedin') ? 'LinkedIn' : href.includes('github') ? 'GitHub' : href.includes('twitter') ? 'Twitter' : href.includes('instagram') ? 'Instagram' : 'Email'}
      </span>
    </button>
  ))}
</div>


        </div>
      </div>

      <style jsx>{`
        .typing-animation {
          overflow: hidden;
          white-space: nowrap;
          border-right: transparent;
          animation: typing 8s steps(30, end) infinite, blink-caret 0.75s step-end infinite;
          animation-fill-mode: forwards;
          text-align: center;
          width: 15ch;
        }
      `}</style>
    </div>
  );
};

export default Hero;
