export default function BlogCard({
  bloglink,
  thumbnail,
  title,
  content,
  author,
}) {
  return (
    <div className="flex flex-col bg-neutral-50 rounded-md shadow-md border-[3px] border-[#eb00276c] w-full sm:w-[50%] md:w-[80%] lg:w-[80%] hover:border-[#eb0028] transition mx-auto">
      <div className="my-row grow">
        <a target="_blank" href={bloglink} className="hover:cursor-pointer">
          <div className="rounded-md w-full overflow-hidden">
            <img
              className="w-full h-full object-center object-cover shadow-sm"
              src={thumbnail}
              alt={title}
            />
          </div>
          <div className="px-3 md:px-4 lg:px-6">
            <h2 className="text-black py-2 md:py-3 font-semibold text-center text-md lg:text-xl 2xl:text-2xl">
              {title}
            </h2>
            <p className="tracking-tight text-justify text-gray-600 text-md 2xl:text-lg">
              {content}
            </p>
          </div>
        </a>
      </div>

      <div className="my-row">
        <div className="w-11/12 bg-gray-200 h-[0.12rem] mx-auto my-1 md:my-2" />
        <a
          target="_blank"
          href={author.linkedin}
          className="hover:cursor-pointer hover:font-extrabold align"
        >
          <div className="flex flex-col justify-center mb-2">
            <h3 className="text-gray-700 font-bold text-center align-bottom text-md 2xl:text-xl hover:text-gray-900">
              {author.name}
            </h3>
            <p className="text-gray-400 text-center font-semibold text-md 2xl:text-lg hover-text-[#eb0028]">
              {author.team}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
