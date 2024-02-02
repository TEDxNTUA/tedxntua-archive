import { BLOGPOSTS } from "../../../data/blogposts";

import BlogGrid from "@/components/Blog/BlogGrid";

function BlogPage() {
  return (
    <div className="bg-blue-100">
      <h1 className="text-white w-[75%] text-3xl lg:text-7xl text-center font-bold italic mx-auto py-16">
        <span className="text-[#eb0028]">TEDx</span>NTUA Organisers' Blog
      </h1>
      <BlogGrid blogposts={BLOGPOSTS} />
    </div>
  );
}

export default BlogPage;
