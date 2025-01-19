"use client";
import { useState } from "react";

export default function Header() {
  const [showIcon, setShowIcon] = useState<boolean>(false);

  const handelShow = () => {
    setShowIcon(!showIcon);
  };

  // pl-[40px] pr-[40px] pt-[18px] pb-[18px] max-[991px]:pl-[20px] max-[991px]:pr-[20px]

  // custome-container
  return (
    <header
      className="relative bg-main text-white pt-[18px] pb-[18px]"
    >
      <div className="custome-container">
        <div className="flex relative items-center max-[991px]:justify-between">
        <h1 className="text-[20px] uppercase font-bold relative icon-logo z-10 max-[991px]:ml-[15px]">Totc</h1>
      <nav
        className={`justify-between items-center ml-auto z-50 gap-[1.5rem] flex 
          ${
          showIcon
            ? `max-[991px]:absolute max-[991px]:top-[49px] bg-main max-[991px]:w-full max-[991px]:left-0 max-[991px]:flex-col max-[991px]:flex max-[991px]:pt-[25px] max-[991px]:shadow 
                max-[991px]:pr-[15px] max-[991px]:pb-[15px] max-[991px]:pl-[15px]`
            : `max-[991px]:hidden`
        }`}
      >
        <ul
          className={`gap-[.3rem] flex ${
            showIcon ? "w-full max-[991px]:flex-col" : "min-[991px]:flex-row w-auto"
          }`}
        >
          <li>
            <a
              className="p-[15px] max-[991px]:w-full max-[991px]:block text-white text-[15px] hover:bg-black transition-all max-[991px]:text-[16px] active"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="p-[15px] max-[991px]:w-full max-[991px]:block text-white text-[15px] hover:bg-black transition-all max-[991px]:text-[16px]"
              href="#"
            >
              Courese
            </a>
          </li>
          <li>
            <a
              className="p-[15px] max-[991px]:w-full max-[991px]:block text-white text-[15px] hover:bg-black transition-all max-[991px]:text-[16px]"
              href="#"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              className="p-[15px] max-[991px]:w-full max-[991px]:block text-white text-[15px] hover:bg-black transition-all max-[991px]:text-[16px]"
              href="#"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="p-[15px] max-[991px]:w-full max-[991px]:block text-white text-[15px] hover:bg-black transition-all max-[991px]:text-[16px]"
              href="#"
            >
              About
            </a>
          </li>
        </ul>

        <div
          className={`flex gap-[.5rem] ${
            showIcon ? "max-[991px]:flex-col w-full" : "flex-row w-full"
          }`}
        >
          <button className="pt-[10px] pr-[15px] pb-[10px] pl-[15px] w-[120px] max-[991px]:w-full bg-white text-black font-semibold rounded-[20px] shadow">
            Login
          </button>
          <button
            className="pt-[10px] pr-[15px] pb-[10px] pl-[15px] w-[120px] max-[991px]:w-full text-white font-semibold rounded-[20px] shadow bg-opacity-main"
          >
            Sign Up
          </button>
        </div>
      </nav>
      <div
        className="w-[35px] cursor-pointer h-[20px] bg-transparent relative hidden max-[991px]:block"
        onClick={handelShow}
      >
        <span className="absolute w-full h-[3px] right-0 top-0 bg-white rounded-[2px]"></span>
        <span
          className={
            showIcon
              ? "absolute w-full h-[3px] right-0 top-[8px] bg-white transition-all rounded-[2px]"
              : "absolute w-[75%] h-[3px] right-0 top-[8px] bg-white transition-all rounded-[2px]"
          }
        ></span>
        <span
          className={
            showIcon
              ? "absolute w-full h-[3px] right-0 top-[16px] bg-white transition-all rounded-[2px]"
              : "absolute w-[45%] h-[3px] right-0 top-[16px] bg-white transition-all rounded-[2px]"
          }
        ></span>
      </div>
        </div>
      </div>
    </header>
  );
}
