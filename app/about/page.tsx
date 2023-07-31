"use client";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import GoalsFormat from "./GoalsFormat";
export default function Page() {
  return (
    <main>
      <WhoWeAre showButton={false} />
      <WhatWeDo />
      <div className="relative mt-10 lg:mt-5 w-full flex flex-col gap-10 items-center lg:justify-center">
        <GoalsFormat
          title="mission"
          description="Strive to enable, empower and make underprivileged people’s life easier by introducing various tech platforms and equipment."
        />
        <GoalsFormat
          title="vision"
          description="To become an impactful resource based organization having a healthy combination of experienced expertises and youth bloods that can lead the aid innovation."
        />
      </div>
    </main>
  );
}
