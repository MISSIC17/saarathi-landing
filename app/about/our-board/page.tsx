import boardMembers from "./data";
import Member from "../Member";
import IntroSection from "./IntroSection";
export default function Page() {
  return (
    <main className="grid lg:grid-cols-12">
      <IntroSection />
      <div id="board-members-wrapper" className="relative my-[4em] lg:my-[8em] flex flex-wrap justify-center grid-cols-3 gap-5 lg:gap-[6em] col-start-3 col-span-9">
        {boardMembers.map((boardMember, index) => {
          return (
            <Member
              key={index}
              fname={boardMember.fname}
              post={boardMember.post}
              image={boardMember.image}
            />
          );
        })}
      </div>
    </main>
  );
}
