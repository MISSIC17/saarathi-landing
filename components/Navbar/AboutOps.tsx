import Link from "next/link";
interface aboutOptsProps{
    screenWidth:number;
    aboutOptsOpen:boolean;
}
const AboutOps = ({screenWidth,aboutOptsOpen}:aboutOptsProps) => {
  return (
    <div id="about-hover-ops" className={`relative ${screenWidth<1024 && aboutOptsOpen?'flex':'hidden'} pt-2 roboto font-light lg:flex flex-col lg:absolute z-10 text-fWhite lg:text-fBlack lg:bg-white lg:shadow-lg`}>
      <li>
        <Link href="/about"><p>About us</p></Link>
      </li>
      <li>
        <Link href="/about/our-board"><p>Our Board</p></Link>
      </li>
      <li>
        <Link href="/about/our-team"><p>Our Team</p></Link>
      </li>
      <li>
        <Link href="/about/our-collaborators"><p>Our Collaborators</p></Link>
      </li>
      <li>
        <Link href="/about/apparent-contributors"><p>Apparent Contributors</p></Link>
      </li>
    </div>
  );
};
export default AboutOps;
