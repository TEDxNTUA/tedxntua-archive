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

const TEDxInNumbers = () => {
  return (
    <div className="grid list-none grid-cols-2  md:grid-cols-4 gap-6 w-8/12 mx-auto p-4 border-[#eb0028] border-[0.5px] rounded-md">
      {achievementsList.map((achievement, index) => {
        return (
          <div key={index}>
            <TEDxStat
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
