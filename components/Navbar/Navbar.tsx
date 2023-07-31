"use client";
import Image from "next/image";
import Link from "next/link";
import NavOps from "./NavOpts";
import {usePathname} from "next/navigation" 
const Navbar = () => {
  const pathname = usePathname();
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
      <NavOps active={pathname} />
    </nav>
  );
};
export default Navbar;
