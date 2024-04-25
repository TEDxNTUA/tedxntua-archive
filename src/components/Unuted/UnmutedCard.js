import Link from "next/link";
export default function UnmutedCard({
  unmutedlink,
  thumbnail,
  title,
  team,
}) {
  return (
    <Link href={unmutedlink}>
      <div className="border rounded border-dashed hover:border-solid hover:border-our-red">
        <div className="flex flex-col hover:cursor-pointer">
          <img
            className="w-auto h-[30vh] mx-auto pr-10 shadow-sm"
            src={thumbnail}
            alt={title}
          />

          <div>
            <div className="w-5/12 bg-our-red h-[0.02rem] mx-auto mt-5" />
            <p className="text-white py-2 md:py-3 italic  text-center text-lg lg:text-xl">
              {title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
