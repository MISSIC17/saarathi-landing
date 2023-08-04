import Intro from "@/components/Intro";
import WhoWeAre from "@/components/WhoWeAre";
import ProjectSaarathi from "@/components/ProjectSaarathi";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home | We-Saarathi",
  description:
    "We-Saarathi is a recently established organization founded by zealous young Nepalese socio- tech visionaries who are committed to using their expertise and knowledge to benefit their society.",
};
export default function Page() {
  return (
    <>
      <main>
        <Intro />
        <WhoWeAre showButton={true} />
        <ProjectSaarathi />
      </main>
    </>
  );
}
