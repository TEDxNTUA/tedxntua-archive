import SocialMediaList from "../SocialMedia/SocialMediaList";

function Footer() {
  return (
    <section className="block text-center pt-2 pb-1 lg:py-3 bg-black w-full right-0 bottom-0">
      <div className="grid grid-rows-2 md:grid-cols-1 justify-items-center gap-3 mb-2 w-[80%] mx-auto">
        <div
          id="social-media"
          className="flex items-center mx-auto justify-center md:flex-none md:flex-col"
        >
          <p className="text-white font-thin text-xs  xl:text-sm hidden md:block mb-2">
            Follow us on social media for behind-the-scenes moments and much
            more!
          </p>
          <SocialMediaList />
        </div>
        <div id="tedxntua-trademark" className="flex flex-col items-center">
          <p className="text-white  text-xxs lg:text-md font-extralight mb-2">
            © TEDxNTUA 2015 - 2024
          </p>
          <p className="text-white text-xxs xl:text-sm text-left">
            <span className="text-[#eb0028]">TEDx</span>NTUA is operated under
            license from <span className="text-[#eb0028]">TED</span>. Visit
            <a
              href="https://www.ted.com/about/programs-initiatives/tedx-program"
              target="_blank"
              className="hover:font-semibold"
            >
              <span className="text-[#eb0028]"> TED </span>
            </a>
            for more info.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
