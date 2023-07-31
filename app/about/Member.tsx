import Image from "next/image";
interface memberProps {
  fname: string;
  post: string;
  image: string;
}
const Member = ({ fname, post, image }: memberProps) => {
  return (
    <section className="member w-[75vw] max-w-[18em] flex flex-col flex-wrap gap-2 justify-center place-items-center pt-2 pb-5">
      <Image
        src={image}
        alt={fname}
        width="200"
        height="200"
        className="relative min-w-[95%] aspect-square rounded-full object-cover"
      />
      <div className="bg-sec w-[2.875em] h-[0.25em] mt-5"></div>
      <div className="text-center">
        <p className="vidaloka text-[1em] md:text-[1.125em]">Mr. {fname}</p>
        <p className="roboto text-[1.2em] md:text-[1.5em] text-primary font-bold">
          {post}
        </p>
      </div>
    </section>
  );
};
export default Member;
