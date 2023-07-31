import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
interface whatProps {
  showButton: boolean;
}
const WhoWeAre = ({ showButton }: whatProps) => {
  return (
    <section
      id="who-we-are-wrapper"
      className="grid justify-items-center mt-[5em] relative gap-7"
    >
      <div className="relative max-h-fit flex flex-col lg:scale-110">
        <p className="relative vidaloka text-3xl font-medium">Who we are?</p>
        <svg
          className="absolute -translate-x-[13%] translate-y-[40%]"
          xmlns="http://www.w3.org/2000/svg"
          width="199"
          height="29"
          viewBox="0 0 199 29"
          fill="none"
        >
          <ellipse
            cx="8.93747"
            cy="9.6875"
            rx="8.93747"
            ry="8.9375"
            fill="#DC143C"
          />
          <line
            x1="9.18109"
            y1="10.5"
            x2="9.18109"
            y2="28.375"
            stroke="#DC143C"
            stroke-width="0.8125"
          />
          <line
            y1="-0.40625"
            x2="189.312"
            y2="-0.40625"
            transform="matrix(-1 8.74231e-08 8.74224e-08 1 198.25 28.375)"
            stroke="#DC143C"
            stroke-width="0.8125"
          />
        </svg>
      </div>
      <div className="relative detailBox md:min-w-[65vw]">
        <p>
          <span className="font-bold">We-Saarathi</span> is a recently
          established organization founded by zealous young Nepalese socio-tech
          visionaries who are committed to using their expertise and knowledge
          to benefit their society.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Under the banner of “
          <span className="font-bold">Tech for Aid</span>,” We aspire to
          eliminate the existing problems, challenges, and issues that
          underprivileged groups from various regions confront. Their ultimate
          objective is to mitigate the effects of these issues and uplift the
          underprivileged groups.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;In addition to being an aid-tech-based
          organization, We also intend to play a proactive role in the
          formulation, development, amendment, and implementation of policies
          that will benefit underprivileged groups. We have a robust network and
          cooperation with other domestic and foreign organizations working in
          the social welfare sector, particularly in the aidtech field.
        </p>
        {showButton && (
          <Link href="/about-us">
            <button className="relative flex flex-row items-center mt-16 gap-3 px-6 py-3 border-2 rounded-lg left-1/2 -translate-x-1/2">
              <p>More about us</p>
              <HiArrowNarrowRight className="w-[1.8em] h-[1.8em]" />
            </button>
          </Link>
        )}
      </div>
      <Image
        src="/assets/hands.svg"
        alt="hands illustration"
        className="absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
        width="100"
        height="100"
      />
    </section>
  );
};
export default WhoWeAre;
