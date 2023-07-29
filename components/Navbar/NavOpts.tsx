import React, { SetStateAction } from "react";
import { FaAngleDown } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import AboutOps from "./AboutOps";
import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
interface NavOptsProps {
  screenWidth: number;
}
const NavOps = ({ screenWidth }: NavOptsProps) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [aboutOptsOpen, setAboutOptsOpen] = useState<boolean>(false);
  // const [screenWidth, setScreenWidth] = useState<Number>(0);
  // function resizeHandler() {
  //   setScreenWidth(window.innerWidth);
  //   console.log(screenWidth)
  // }

  // useEffect(() => {
  //   window.addEventListener("load", resizeHandler);
  //   return () => window.removeEventListener("load", resizeHandler);
  // }, [screenWidth]);
  // useEffect(() => {
  //   window.addEventListener("resize", resizeHandler);
  //   return () => window.removeEventListener("resize", resizeHandler);
  // }, [screenWidth]);
  return (
    <>
      {screenWidth < 1024 && (
        <div onClick={() => setSidebarOpen(true)}>
          <RxHamburgerMenu className="w-[1.7em] h-[1.7em]" />
        </div>
      )}
      <ul
        id="navops"
        className={`flex absolute px-4 lg:relative flex-col text-[1.2em] lg:text-[1em] lg:flex-row items-start lg:justify-center bg-primary lg:bg-opacity-0 top-0 h-[100vh] w-[90vw] ${
          !sidebarOpen && screenWidth < 1024 ? "-right-[100%]" : "right-0"
        } lg:right-0 z-10 text-white lg:text-black lg:items-center lg:h-full vidaloka font-bold overflow-y-scroll lg:overflow-y-visible`}
      >
        <IconContext.Provider value={{ color: "white" }}>
          <VscChromeClose
            className="absolute right-4 h- top-4 h-[1.7em] z-11 w-[1.7em] lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        </IconContext.Provider>
        <Link href="/">
          <li className="aboutOps-text mt-10 lg:mt-0 py-5 px-3">
            <p className="active">Home</p>
          </li>
        </Link>
        {screenWidth >= 1024 && (
          <Link id="about-ops" href="/about">
            <li className="py-5 px-3">
              <span className="flex flex-row items-center justify-center gap-1">
                <p>About</p>
                <FaAngleDown />
              </span>
            </li>
            <AboutOps screenWidth={screenWidth} aboutOptsOpen={aboutOptsOpen} />
          </Link>
        )}
        {screenWidth < 1024 && (
          <li
            className="py-5 px-3 cursor-pointer"
            onClick={() => setAboutOptsOpen(!aboutOptsOpen)}
          >
            <span className="flex flex-row items-center justify-start gap-1">
              <p>About</p>
              <FaAngleDown className={`rotate-${aboutOptsOpen?'180':'0'}`}/>
            </span>
            <AboutOps screenWidth={screenWidth} aboutOptsOpen={aboutOptsOpen} />
          </li>
        )}
        <Link href="/news">
          <li className="py-5 px-3">
            <p>News</p>
          </li>
        </Link>
        <Link href="/articles">
          <li className="py-5 px-3">
            <p>Articles</p>
          </li>
        </Link>
        <Link href="/donate">
          <li className="py-5 px-3">
            <p>Donate</p>
          </li>
        </Link>
        <Link href="/project">
          <li>
            <div className="bg-primary rounded-lg py-2 px-1.5">
              <p className="text-white">Project Saarathi</p>
            </div>
          </li>
        </Link>
        <Link href="/get-involved">
          <li className="py-5 px-3">
            <p>Get Involved</p>
          </li>
        </Link>
        <Link href="/contact-us">
          <li className="py-5 px-3">
            <p>Contact Us</p>
          </li>
        </Link>
      </ul>
    </>
  );
};
export default NavOps;
