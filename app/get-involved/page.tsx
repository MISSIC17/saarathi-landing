import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Get-Involved | We-Saarathi",
  description:
    "We-Saarathi is a recently established organization founded by zealous young Nepalese socio- tech visionaries who are committed to using their expertise and knowledge to benefit their society.",
};
export default function Page() {
  return (
    <main className="grid min-h-[90vh] place-items-center ">
      <p id="project-title" className="text-5xl roboto font-extrabold">
        Get Involved
      </p>
    </main>
  );
}
