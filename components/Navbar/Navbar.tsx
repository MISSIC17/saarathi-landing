"use client";
import Image from "next/image";
import Link from "next/link";
import NavOps from "./NavOpts";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window?.innerWidth || 0);
  function resizeHandler() {
    setScreenWidth(window.innerWidth);
    console.log(screenWidth);
  }
  useEffect(() => {
    window.addEventListener("load", resizeHandler);
    return () => window.removeEventListener("load", resizeHandler);
  }, [screenWidth]);
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [screenWidth]);
  return (
    <nav
      id="navbar"
      className="sticky w-full h-fit top-0 py-4 z-20 bg-white flex flex-row px-4 justify-between lg:justify-around items-center shadow-[0_2px_26px_18px_rgba(0,0,0,0.03),inset_0_-2px_9px_0px_rgba(0,0,0,0.12)]"
    >
      <Link href="/">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width="300"
          height="300"
          className="w-[70px] h-[70px]"
        />
      </Link>
      <NavOps screenWidth={screenWidth} />
    </nav>
  );
};
export default Navbar;
