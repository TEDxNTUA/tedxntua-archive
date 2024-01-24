import IncrementalNumber from "@/components/TEDInNumbers/IncrementalNumber";

function TEDxStat({ endValue, suffix, stat }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row text-[#eb0028] text-lg md:text-2xl lg:text-3xl font-bold mx-auto">
        <IncrementalNumber endValue={endValue} duration={800} />
        {suffix}
      </div>
      <span className="flex flex-row text-[#eb0028] text-xs md:text-md lg:text-lg font-thin lg:font-normal mx-auto">
        {stat}
      </span>
    </div>
  );
}

export default TEDxStat;
