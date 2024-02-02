import BlogCard from "./BlogCard";
import NewBlogCard from "./BlogCard2";

export default function BlogGrid({ blogposts }) {
  return (
    <ul className="grid list-none md:grid-cols-2 gap-10 lg:gap-10 xl:grid-cols-3 w-8/12 lg:w-10/12 mx-auto z-1">
      {blogposts.map((blogpost, index) => {
        return (
          <li key={index}>
            <NewBlogCard
              bloglink={blogpost.link}
              thumbnail={blogpost.thumbnail}
              title={blogpost.title}
              content={blogpost.content}
              author={blogpost.author}
              tags={blogpost.tags}
            />
          </li>
        );
      })}
    </ul>
  );
}
