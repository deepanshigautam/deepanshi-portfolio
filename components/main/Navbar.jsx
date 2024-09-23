import React from 'react';

const Navbar = () => {
  return (
    <div className=" h-[65px] fixed  shadow-lg shadow-cyan-900/50 bg-[#a0a0a017] backdrop-blur-md z-50 lg:px-10 px-2 lg:rounded-none md:rounded-none rounded-full">
<div className=" h-full flex flex-row items-center justify-between m-auto lg:px-[10px] px-2]">
<div className="w-[250px] lg:w-[500px] md:w-[500px] h-full flex flex-row items-center justify-between  ">

          <div className="flex items-center justify-between w-full h-auto border border-cyan-900 bg-[#0300145e] lg:mr-[15px] lg:px-[20px] lg:py-[10px] rounded-full text-gray-200 py-[10px] px-3 lg:text-[18px] md:text-[16px] text-[13px]">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        </div>
        </div>
  
  );
};

export default Navbar;