import dynamic from "next/dynamic";
import Footer from "./Components/Footer/Footer.js";
import FirstPage from "./Components/MainScreen/FirstPage/FirstPage.js";

const NavBar = dynamic(() => import("./Components/NavBar/NavBar.js"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <NavBar />
      <FirstPage />
      <Footer />
    </div>
  );
}
