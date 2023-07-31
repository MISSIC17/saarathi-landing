import IntroSection from "./IntroSection";
import Partner from "./Partner";
import partners from "./data";
export default function Page() {
  return (
    <main className="grid">
      <IntroSection />
      <div className="flex flex-col md:flex-row gap-6 w-[100vw] py-[5em] md:py-[10em] justify-around">
        {partners.map((partner, index) => {
          return (
            <Partner key={index} title={partner.title} image={partner.image} />
          );
        })}
      </div>
    </main>
  );
}
