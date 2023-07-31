import React, { PropsWithChildren } from "react";
import { IconType } from "react-icons";

import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { TbBulb } from "react-icons/tb";
// type IconType = (props: IconTypeProps) => JSX.Element;
interface goalsProps {
  title: string;
  description: string;
}
const GoalsFormat = ({ title, description }: goalsProps) => {
  return (
    <div className="bg-primary grid grid-rows-[30%_70%] text-white p-4 justify-items-center max-w-[33em] rounded-lg shadow-[-3px_3px_0px_0px_#DC143C]">
      <p id="goals-title" className="relative font-bold w-fit h-[3ch] vidaloka first-letter:capitalize text-[1.3em]">{title}</p>
      <div className="flex flex-row gap-3 mt-4">
        {title === "mission" && (
          <BsFillRocketTakeoffFill
            color="#fff"
            className="min-h-[35px] min-w-[35px]"
          />
        )}
        {title === "vision" && (
          <TbBulb color="#fff" className="min-h-[35px] min-w-[35px]" />
        )}
        <p className="roboto text-center">{description}</p>
      </div>
    </div>
  );
};
export default GoalsFormat;
