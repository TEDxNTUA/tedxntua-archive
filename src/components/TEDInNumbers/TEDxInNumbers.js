"use client";
import React from "react";
import TEDxStat from "./TEDxStat";

const achievementsList = [
  {
    stat: "Attendes",
    endValue: "4000",
    suffix: "+",
  },
  {
    stat: "Speakers",
    endValue: "80",
    suffix: "+",
  },
  {
    stat: "Volunteers",
    endValue: "460",
    suffix: "+",
  },
  {
    stat: "Workshops",
    endValue: "35",
    suffix: "",
  },
];

const TEDxInNumbers = ({ color = "red", md_size_cols = 4 }) => {
  const sizeVariants = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };
  const borderColorsVariants = {
    red: "border-[#eb0028]",
    black: "border-black",
    white: "border-white",
  };
  return (
    <div
      className={`grid list-none grid-cols-2  ${sizeVariants[md_size_cols]} gap-6 w-8/12 mx-auto p-4 ${borderColorsVariants[color]} border-[0.5px] rounded-md`}
    >
      {achievementsList.map((achievement, index) => {
        return (
          <div key={index}>
            <TEDxStat
              color={color}
              endValue={achievement.endValue}
              suffix={achievement.suffix}
              stat={achievement.stat}
            />
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TEDxInNumbers;
