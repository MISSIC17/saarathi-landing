import Image from "next/image";
import Link from "next/link";
const WhatWeDo = () => {
  return (
    <section
      id="what-we-do-wrapper"
      className="grid justify-items-center mt-[5em] relative h-[90vh] md:h-auto gap-7"
    >
      <div className="relative max-h-fit flex flex-col lg:scale-110">
        <p className="relative vidaloka text-3xl font-medium">What we do?</p>
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
          To achieve our goal, we conduct thorough research in the relevant
          field of study and develop solutions using cutting-edge technology. We
          work to develop easily accessible technology and amenities in the
          targeted regions.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; We also actively work to formulate and
          implement necessary policies that will make society more
          technologically friendly and motivating to young innovators.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;In addition, we actively collaborate with
          like-minded organizations to achieve our goals through shared plans
          and projects.
        </p>
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
export default WhatWeDo;
