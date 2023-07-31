import Intro from "@/components/Intro";
import WhoWeAre from "@/components/WhoWeAre";
import ProjectSaarathi from "@/components/ProjectSaarathi";
export default function Page() {
  return (
    <main>
      <Intro />
      <WhoWeAre showButton={true}/>
      <ProjectSaarathi/>
    </main>
  );
}
