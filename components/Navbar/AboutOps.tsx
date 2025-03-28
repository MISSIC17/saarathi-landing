import Link from "next/link";
interface aboutOptsProps {
  setSidebarOpen: React.Dispatch<SetStateAction<boolean>>;
  aboutOptsOpen: boolean;
}
import { SetStateAction, useEffect, useRef } from "react";
const AboutOps = ({ setSidebarOpen, aboutOptsOpen }: aboutOptsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.childNodes.forEach((link) => {
      link.addEventListener("click", () => setSidebarOpen(false));
    });
    return () => {
      ref.current?.childNodes.forEach((link) => {
        link.removeEventListener("click", () => setSidebarOpen(false));
      });
    };
  });
  return (
    <div
      id="about-hover-ops"
      ref={ref}
      className={`relative ${
        aboutOptsOpen ? "flex" : "hidden"
      } pt-2 roboto font-light text-sm lg:flex flex-col lg:absolute z-10 text-fWhite lg:text-fBlack lg:bg-white lg:shadow-lg`}
    >
      <Link href="/about" className="link">
        <p>About us</p>
      </Link>
      <Link href="/about/our-board" className="link">
        <p>Our Board</p>
      </Link>
      <Link href="/about/our-team" className="link">
        <p>Our Team</p>
      </Link>
      <Link href="/about/our-partners" className="link">
        <p>Our Partners</p>
      </Link>
      <Link href="/about/apparent-contributors" className="link">
        <p>Apparent Contributors</p>
      </Link>
    </div>
  );
};
export default AboutOps;
