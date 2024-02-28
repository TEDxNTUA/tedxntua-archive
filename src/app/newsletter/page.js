// import Footer from "@/components/Footer/Footer";
import BlogCard from "@/components/Blog/BlogCard";

function NewsletterPage() {
  return (
    <div
      className="bg-neutral-500"
      // style={{
      //   // backgroundImage: `url('/about/about4a.jpeg')`,
      //   backgroundImage: `url('BG.png.jpeg')`,
      //   backgroundSize: "cover", // Optional: adjust as needed
      // }}
    >
      <h1 className="text-white w-[75%] text-4xl lg:text-7xl text-left font-bold  py-16 md:w-[80%] mx-auto">
        <span className="text-our-red">TEDx</span>NTUA Organisers' Blog
      </h1>
      <li>
        <BlogCard
          bloglink="/newsletter/media"
          thumbnail="/blogpost/newsletter.png"
          title="Media-newsletter"
          content="Fresh fresh fresh"
          author="Media Team TEDxNTUA 2024"
        />
      </li>
      {/* <Footer /> */}
    </div>
  );
}

export default NewsletterPage;
