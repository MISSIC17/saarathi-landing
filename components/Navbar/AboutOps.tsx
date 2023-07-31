import Link from "next/link";
interface aboutOptsProps{
    aboutOptsOpen:boolean;
}
const AboutOps = ({aboutOptsOpen}:aboutOptsProps) => {
  return (
    <div id="about-hover-ops" className={`relative ${aboutOptsOpen?'flex':'hidden'} pt-2 roboto font-light lg:flex flex-col lg:absolute z-10 text-fWhite lg:text-fBlack lg:bg-white lg:shadow-lg`}>
      <span>
        <Link href="/about"><p>About us</p></Link>
      </span>
      <span>
        <Link href="/about/our-board"><p>Our Board</p></Link>
      </span>
      <span>
        <Link href="/about/our-team"><p>Our Team</p></Link>
      </span>
      <span>
        <Link href="/about/our-collaborators"><p>Our Collaborators</p></Link>
      </span>
      <span>
        <Link href="/about/apparent-contributors"><p>Apparent Contributors</p></Link>
      </span>
    </div>
  );
};
export default AboutOps;
