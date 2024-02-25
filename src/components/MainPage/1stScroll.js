import Image from "next/image";

function FirstScroll() {
  return (
    <section className="bg-black h-[calc(100vh-5rem)]">
      <div className="w-[100%] h-auto relative flex flex-col-reverse items-end md:flex-none">
        <Image
          className="w-auto lg:h-[95vh]"
          src="/homepage/starting-page.png"
          width={800}
          height={800}
          alt="archive"
          priority={true}
        />
        <div className="flex flex-col px-8 md:w-[30%] md:absolute md:top-[25%] md:left-[10%] md:justify-start  md:bg-none my-16 md:my-0">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight text-center md:text-left px-16 md:px-0">
            <span className="text-[#eb0028]">WELCOME</span> TO THE TED
            <span className="text-[#eb0028]">x</span>NTUA
          </h1>

          <Image
            className="pt-4 object-left w-[30%] mx-auto md:mx-0 md:w-[60%] lg:w-[80%]"
            src="/homepage/archive.png"
            width={300}
            height={300}
            alt="archive"
          />
        </div>
      </div>
    </section>
  );
}

export default FirstScroll;
