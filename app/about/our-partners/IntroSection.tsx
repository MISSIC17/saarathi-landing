const IntroSection = () => {
  return (
    <section
      id="our-partners-intro-wrapper"
      className="relative min-w-full lg:h-[350px] grid grid-cols-12 col-span-12"
    >
      <div className="relative z-10 flex flex-col gap-5 text-white col-start-2 col-span-4 justify-center">
        <p className="font-bold text-[1.5em]">Our Partners</p>
        <p
          style={{ letterSpacing: "9px" }}
          className="text-white font-light uppercase"
        >
          We grow together
        </p>
      </div>
    </section>
  );
};
export default IntroSection;
