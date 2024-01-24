import { BLOGPOSTS } from "../../../data/blogposts";

import BlogGrid from "@/components/Blog/BlogGrid";

function BlogPage() {
  return (
    <div className="bg-black">
      Blogdsfonafdslnafsnlfdlsn
      <BlogGrid blogposts={BLOGPOSTS} />
    </div>
  );
}

export default BlogPage;
