import { BLOGPOSTS } from "../../../data/blogposts";

import SocialMediaList from "@/components/SocialMedia/SocialMediaList";
import BlogGrid from "@/components/Blog/BlogGrid";

function BlogPage() {
  return (
    <div className="bg-black">
      Blog
      <BlogGrid blogposts={BLOGPOSTS} />
      <SocialMediaList />
    </div>
  );
}

export default BlogPage;
