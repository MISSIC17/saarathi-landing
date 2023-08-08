import React, { SetStateAction } from "react";
import { FaAngleDown } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import AboutOps from "./AboutOps";
import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
interface navOpsProps {
  active: string;
}
const NavOps = ({ active }: navOpsProps) => {
  console.log(active);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [aboutOptsOpen, setAboutOptsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (sidebarOpen) {
      !document.body.classList.contains("sm:overflow-hidden")
        ? document.body.classList.add("overflow-hidden", "lg:overflow-auto")
        : {};
    } else {
      document.body.classList.contains("sm:overflow-hidden")
        ? document.body.classList.remove("sm:overflow-hidden")
        : {};
    }
  }, [sidebarOpen]);

  return (
    <>
      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setSidebarOpen(true)}
      >
        <RxHamburgerMenu className="w-[1.7em] h-[1.7em]" />
      </div>
      <ul
        id="navops"
        className={`absolute px-4 lg:relative flex-col text-[1.2em] lg:text-[1em] lg:flex-row items-start lg:justify-center bg-primary lg:bg-opacity-0 top-0 h-[100vh] w-[90vw]  lg:flex lg:right-0 ${
          sidebarOpen ? "flex right-0" : "hidden -right-[100%]"
        } lg:right-0 z-10 text-white lg:text-black lg:items-center lg:h-full roboto font-thin overflow-y-scroll lg:overflow-y-visible lg:w-fit`}
      >
        <IconContext.Provider value={{ color: "white" }}>
          <VscChromeClose
            className="absolute cursor-pointer right-4 h- top-4 h-[1.7em] z-11 w-[1.7em] lg:hidden"
            onClick={() => {
              setSidebarOpen(false);
              console.log("click");
            }}
          />
        </IconContext.Provider>
        <Link href="/" className={`link`}>
          <li className="aboutOps-text mt-10 lg:mt-0 py-5 px-3">
            <p className={`${active === "home" ? "active" : ""}`}>Home</p>
          </li>
        </Link>

        {/* For mobile*/}
        <div>
          <li
            className="py-5 px-3 cursor-pointer lg:hidden"
            onClick={() => setAboutOptsOpen(!aboutOptsOpen)}
          >
            <span className="flex flex-row items-center justify-start gap-1">
              <p>About</p>
              <FaAngleDown
                className={`rotate-${aboutOptsOpen ? "180" : "0"}`}
              />
            </span>
          </li>
          <AboutOps
            setSidebarOpen={setSidebarOpen}
            aboutOptsOpen={aboutOptsOpen}
          />
        </div>

        {/* For larger*/}
        <li id="about-ops" className="desktop hidden lg:block cursor-pointer">
          <Link href="/about">
            <span className="py-5 px-3 flex flex-row items-center justify-center gap-1">
              <p className={`${active === "about" ? "active" : ""}`}>About</p>
              <FaAngleDown />
            </span>
          </Link>
          <AboutOps
            setSidebarOpen={setSidebarOpen}
            aboutOptsOpen={aboutOptsOpen}
          />
        </li>

        <Link href="/news">
          <li className="py-5 px-3">
            <p className={`${active === "news" ? "active" : ""}`}>News</p>
          </li>
        </Link>
        <Link href="/articles">
          <li className="py-5 px-3">
            <p className={`${active === "articles" ? "active" : ""}`}>
              Articles
            </p>
          </li>
        </Link>
        <Link href="https://project.wesaarathi.org/">
          <li>
            <div className="bg-primary rounded-lg py-2 px-1.5">
              <p className="text-white">Project Saarathi</p>
            </div>
          </li>
        </Link>
        <Link href="/get-involved">
          <li className="py-5 px-3">
            <p className={`${active === "get-involved" ? "active" : ""}`}>
              Get Involved
            </p>
          </li>
        </Link>
        <Link href="/contact-us">
          <li className="py-5 px-3">
            <p className={`${active === "contact-us" ? "active" : ""}`}>
              Contact Us
            </p>
          </li>
        </Link>
        <Link href="/donate">
          <li>
            <div className="bg-sec rounded-full py-2 px-5">
              <p className="text-white">Donate</p>
            </div>
          </li>
        </Link>
        <div className="hidden lg:block border-l-fBlack border-l-[1px] pl-5 ml-5">
          <div
            id="nav-icons"
            className="flex flex-row self-center md:self-auto mt-4 md:mt-0 gap-6 text-fBlack"
          >
            <Link href="https://www.facebook.com/wesaarathi" target={"_blank"}>
              <FaFacebook className="" />
            </Link>
            <Link
              href="https://mail.google.com/mail/u/0/?fs=1&to=wesaarathi@gmail.com&su=SUBJECT&body=BODY&tf=cm"
              target={"_blank"}
            >
              <SiGmail className="" />
            </Link>
            <Link href="https://www.linkedin.com/" target={"_blank"}>
              <FaLinkedinIn className="" />
            </Link>
          </div>
        </div>
      </ul>
    </>
  );
};
export default NavOps;
