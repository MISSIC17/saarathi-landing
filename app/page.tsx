import Intro from "@/components/Intro";
import WhoWeAre from "@/components/WhoWeAre";
export default function Page() {
  return (
    <main>
      <Intro />
      <WhoWeAre showButton={true}/>
    </main>
  );
}
