"use client";
import Image from "next/image";

const Intro = () => {
  return (
    <section id="intro-wrapper" className="grid relative overflow-hidden">
      <div id="intro-rect" className="relative w-[95vw] max-h-[90vh] md:w-[85vw] border-[1.5px]   md:border-[0px] flex items-center justify-center">
        <div id="intro-text" className="relative flex flex-col w-fit md:right-[5em] lg:right-[1em] top-[-3em] z-[11]">
          <h1
            id="intro-heading"
            className="flex roboto font-bold justify-center whitespace-nowrap"
          >
            We-Saarathi
          </h1>
          <p
            id="intro-subHeading"
            className="relative flex text-primary vidaloka justify-end -top-5 lg:-top-12"
          >
            Tech for Aid
          </p>
        <div id="lines" className="/*absolute -right-5 h-[150%] flex flex-row gap-[5px] items-center top-1/2 -translate-y-1/2">
          <div className="bg-primary w-[3px] h-[100%] bg-opacity-[0.2]"></div>
          <div className="bg-primary w-[3px] h-[66%] bg-opacity-[0.1]"></div>
          <div className="bg-primary w-[3px] h-[33%] bg-opacity-[0.05]"></div>
        </div>
        </div>
        <Image
          src="/assets/people.jpg"
          alt="Image with people helping each other"
          height="500"
          width="500"
          className="block absolute -bottom-[10%] z-10 sm:max-w-[90vw] md:max-w-[90vw]  -left-[10%] md:bottom-0 md:left-0 md:-z-10"
        />
      </div>
    </section>
  );
};
export default Intro;
