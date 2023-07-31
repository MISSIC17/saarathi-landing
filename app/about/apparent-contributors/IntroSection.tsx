
const IntroSection = () => {
  return (
    <section
      id="apparent-intro-wrapper"
      className="relative min-w-full h-[18em] lg:h-[350px] grid grid-cols-12 col-span-12"
    >
      <div className="relative z-10 flex flex-col gap-5 text-white col-start-2 col-span-4 justify-center">
        <p className="font-bold text-[1.5em]">Apparent Contributors</p>
        <p style={{letterSpacing:'9px'}} className="text-white font-light uppercase">With everyone, we can</p>
      </div>
    </section>
  );
};
export default IntroSection;
