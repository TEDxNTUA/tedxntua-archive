"use client";
import dynamic from "next/dynamic";
import Footer from "./Components/Footer/Footer.js";
import { useState, useEffect } from "react";
import FirstPage from "./Components/MainScreen/FirstPage/FirstPage.js";

const NavBar = dynamic(() => import("./Components/NavBar/NavBar.js"), {
  ssr: false,
});

export default function Home() {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    function detectDevice() {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        return "phone";
      } else {
        return "computer";
      }
    }
    detectDevice() === "phone" ? setIsPhone(true) : setIsPhone(false);
  }, []);

  return (
    <div>
      <NavBar />
      <FirstPage isPhone={isPhone} />
      <Footer isPhone={isPhone} />
    </div>
  );
}
