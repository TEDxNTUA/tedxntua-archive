// import Footer from "@/components/Footer/Footer";
// import { BLOGPOSTS } from "../../../data/blogposts";

// import BlogGrid from "@/components/Blog/BlogGrid";

function BlogPage() {
  return (
    <div
      className="bg-neutral-800"
      // style={{
      //   // backgroundImage: `url('/about/about4a.jpeg')`,
      //   backgroundImage: `url('BG.png.jpeg')`,
      //   backgroundSize: "cover", // Optional: adjust as needed
      // }}
    >
      <h1 className="text-white w-[75%] text-4xl lg:text-7xl text-left font-bold  py-16 md:w-[80%] mx-auto">
        <span className="text-[#eb0028]">TEDx</span>NTUA Organisers' Blog
      </h1>
      {/* <BlogGrid blogposts={BLOGPOSTS} /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default BlogPage;
