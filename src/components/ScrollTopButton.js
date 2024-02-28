"use client";
import React, { useState, useEffect } from "react";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    // const threshold = document.documentElement.clientHeight;
    const threshold = 400;
    if (scrollTop > threshold) {
      setIsVisible(true);
    }
    if (scrollTop === 0) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // console.log(isVisible);
  }, [isVisible]);

  return (
    <button
      className={`scroll-top-button ${
        isVisible ? "visible" : "hidden"
      } z-10 bg-our-red text-white font-bold py-2 px-2 rounded-full fixed bottom-0 right-0 mr-4 mb-4 transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-105`}
      onClick={scrollToTop}
    >
      <img src="/arrow_up.png" alt="arrow_up" className="w-5 h-5" />
    </button>
  );
};

export default ScrollTopButton;
