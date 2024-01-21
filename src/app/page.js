import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("./Components/NavBar/NavBar.js"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <NavBar />
    </>
  );
}
