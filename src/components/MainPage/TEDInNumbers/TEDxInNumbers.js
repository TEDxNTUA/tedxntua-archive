"use client";
import React from "react";
import TEDxStat from "./TEDxStat";

const achievementsList = [
  {
    stat: "Attendees",
    endValue: "4000",
    suffix: "+"
  },
  {
    stat: "Speakers",
    endValue: "80",
    suffix: "+"
  },
  {
    stat: "Volunteers",
    endValue: "460",
    suffix: "+"
  },
  {
    stat: "Workshops",
    endValue: "35",
    suffix: ""
  }
];

const TEDxInNumbers = ({color = "red", md_size_cols = 4}) => {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto p-4 border-our-red border-[0.5px] rounded-md w-[100%]`}
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
