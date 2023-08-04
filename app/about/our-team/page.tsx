
import boardMembers from "./data";
import Member from "../Member";
import IntroSection from "./IntroSection";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Team | We-Saarathi",
  description:
    "We-Saarathi is a recently established organization founded by zealous young Nepalese socio- tech visionaries who are committed to using their expertise and knowledge to benefit their society.",
};
export default function Page() {
  return (
    <main className="grid lg:grid-cols-12">
      <IntroSection />
      <div id="board-members-wrapper" className="relative my-[4em] lg:my-[8em] flex flex-wrap justify-center grid-cols-3 gap-5 md:gap-[6em] col-start-3 col-span-9">
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