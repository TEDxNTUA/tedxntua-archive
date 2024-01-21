"use client";

import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../Components/NavBar/NavBar.js"), {
  ssr: false,
});
function BlogPage() {
  return (
    <div>
      <NavBar />
      Blog
    </div>
  );
}

export default BlogPage;
