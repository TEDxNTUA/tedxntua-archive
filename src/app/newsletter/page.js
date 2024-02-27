import Footer from "@/components/Footer/Footer";
import BlogCard from "@/components/Blog/BlogCard";

import Link from "next/link";

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
        <span className="text-[#eb0028]">TEDx</span>NTUA Organisers' Blog
      </h1>
      {/* Wrap BlogCard component with Link */}
      <Link href="/newsletter/media">
        <BlogCard
          bloglink="www.google.com"
          thumbnail="/blogpost/newsletter.png"
          title="Media-newsletter"
          content="Fresh fresh fresh"
          author="Media Team TEDxNTUA 2024"
        />
      </Link>
      <Footer />
    </div>
  );
}

export default NewsletterPage;
