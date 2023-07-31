import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="absolute w-full pl-8 gap-4 md:gap-4 bg-black flex flex-col md:flex-row justify-around items-start md:items-center py-10">
      <Link href="/">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width="300"
          height="300"
          className="w-[100px] h-[100px]"
        />
      </Link>
      <div id="footer-links" className="roboto font-thin text-fWhite text-[1em] flex flex-row items-end gap-5">
        <div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/about/our-board/">Our Board</Link>
            </li>
            <li>
              <Link href="/about/our-team">Our team</Link>
            </li>
            <li>
              <Link href="/about/our-collaborators">Our collaborators</Link>
            </li>
            <li>
              <Link href="/about/apparent-contributors">
                Apparent Contributors
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/articles">Articles</Link>
            </li>
            <li>
              <Link href="/project-saarathi">Project Saarathi</Link>
            </li>
            <li>
              <Link href="/get-involved">Get involved</Link>
            </li>
          </ul>
        </div>
      </div>
        <div id="footer-icons" className="flex flex-row self-center md:self-auto mt-4 md:mt-0 gap-5 text-white" >
          <span>
            <FaFacebook className="min-w-[17px] min-h-[17px]"/>
          </span>
          <span> 
            <SiGmail className="min-w-[17px] min-h-[17px]"/>
          </span>
          <span> 
            <FaLinkedinIn className="min-w-[17px] min-h-[17px]"/>
          </span>
        </div>
    </footer>
  );
};
export default Footer;
