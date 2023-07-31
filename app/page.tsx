import Image from "next/image";
import Intro from "@/components/Home/Intro";
import WhoWeAre from "@/components/Home/WhoWeAre";
export default function Page() {
  return (
    <main>
      <Intro />
      <WhoWeAre showButton={true}/>
    </main>
  );
}
