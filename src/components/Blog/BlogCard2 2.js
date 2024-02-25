export default function BlogCard({
  bloglink,
  thumbnail,
  title,
  content,
  author,
}) {
  return (
    <div className="flex flex-col mx-auto w-full sm:w-[50%] md:w-[80%] lg:w-[80%] border-[#eb00276c] hover:border-[#eb0028] hover:shadow-md border-b-[2px]">
      <div className="my-row grow">
        <a target="_blank" href={bloglink} className="hover:cursor-pointer">
          <div className="rounded w-full overflow-hidden">
            <img
              className="w-full h-full object-center object-cover shadow-sm"
              src={thumbnail}
              alt={title}
            />
          </div>
          <div className="">
            <p className="text-white py-2 md:py-3 font-semibold text-lg lg:text-xl 2xl:text-2xl">
              {title}
            </p>
            <p className="tracking-tighter text-justify text-slate-50 text-md 2xl:text-sm">
              {content}
            </p>
          </div>
        </a>
      </div>

      <div className="my-row">
        <div className="w-11/12 bg-white h-[0.02rem] mx-auto my-3" />
        <a
          target="_blank"
          href={author.linkedin}
          className="hover:cursor-pointer hover:font-extrabold align"
        >
          <div className="flex flex-col justify-center mb-2">
            <h3 className="text-white font-bold text-center align-bottom text-sm 2xl:text-xl">
              {author.name}
            </h3>
            <p className="text-neutral-200 text-center font-semibold text-xs 2xl:text-lg hover-text-[#eb0028]">
              {author.team}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
