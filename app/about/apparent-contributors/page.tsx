import apparentContributors from "./data";
import Member from "../Member";
import IntroSection from "./IntroSection";
export default function Page() {
  return (
    <main className="grid lg:grid-cols-12">
      <IntroSection />
      <div
        id="board-members-wrapper"
        className="relative my-[4em] lg:my-[8em] flex flex-wrap justify-center grid-cols-3 gap-5 md:gap-[6em] col-start-3 col-span-9"
      >
        {apparentContributors.map((member, index) => {
          return (
            <Member
              key={index}
              fname={member.fname}
              post={member.post}
              image={member.image}
            />
          );
        })}
      </div>
    </main>
  );
}
