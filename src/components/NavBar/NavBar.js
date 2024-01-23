"use client";
import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import SocialMediaList from "../SocialMedia/SocialMediaList";

const navLinks = [
  {
    title: "Watch",
    path: "/watch",
  },
  {
    title: "Let's Blog",
    path: "/blog",
  },
  {
    title: "About",
    path: "/about",
  },
];

function Navbar() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const closeDrawer = () => {
    if (drawerIsOpen) {
      setDrawerIsOpen(false);
    }
  };

  const hamburgerLine =
    "h-[4px] w-8 my-[2.5px] rounded-full bg-white transition-all ease-in-out opacity-100 duration-[500ms]";

  return (
    <nav className="bg-black fixed top-0 right-0 left-0 z-10">
      <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-4">
        <Link
          onClick={closeDrawer}
          href="/"
          className="text-5xl text-white font-semibold"
        >
          TED<span className="text-[#eb0028]">x</span>NTUA
        </Link>
        {/* The div below is the navbar for screens smaller than md-breakpoint - PHONES */}
        <div className="mobile-menu block md:hidden menu">
          <button
            className="flex cursor-pointer flex-col items-center justify-center outline-none"
            onClick={() => setDrawerIsOpen(!drawerIsOpen)}
          >
            <div
              className={`${hamburgerLine} ${
                drawerIsOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <div
              className={`${hamburgerLine} ${
                drawerIsOpen ? "origin-center scale-x-0 opacity-0" : ""
              }`}
            />
            <div
              className={`${hamburgerLine} ${
                drawerIsOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
        {/* The div below is the navbar for screens larger than md-breakpoint - DESKTOPS*/}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex flex-col p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* The div below is the drawer when the burger is clicked on mobile screens*/}
      <div
        onClick={closeDrawer}
        className={
          drawerIsOpen
            ? "fixed right-0 w-[45%] md:hidden h-screen bg-black border-t border-t-white ease-in duration-300"
            : "fixed right-[-120%] h-screen"
        }
      >
        <ul className="flex flex-col justify-self-end place-items-center text-center gap-8 h-screen my-16">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
        <SocialMediaList onClick={closeDrawer} />
      </div>
      <div
        onClick={closeDrawer}
        className={
          drawerIsOpen
            ? "fixed right-0 w-[100%] md:hidden h-screen bg-black/30 z-10"
            : "fixed right-[-120%] h-screen"
        }
      ></div>
    </nav>
  );
}

export default Navbar;
