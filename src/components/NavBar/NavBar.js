"use client";
import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import SocialMediaNav from "./SocialMediaNav";

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

function NewNavbar() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const closeDrawer = () => {
    if (drawerIsOpen) {
      setDrawerIsOpen(false);
    }
  };

  const hamburgerLine =
    "h-[4px] w-8 my-[2.5px] rounded-full bg-white transition-all ease-in-out opacity-100 duration-[500ms]";

  return (
    <nav className="fixed bg-black top-0 left-0 right-0 z-10">
      <div className="flex w-full py-4 px-6 items-center justify-between lg:px-16 xl:px-22 2xl:px-36 3xl:px-56">
        <Link
          onClick={closeDrawer}
          href="/"
          className="text-5xl text-white font-semibold"
        >
          TED<span className="text-[#eb0028]">x</span>NTUA
        </Link>
        {/* Desktop Nav */}
        <div id="desktop-navbar" className="menu hidden md:block">
          <ul className="flex md:flex-row md:space-x-8 lg:space-x-16">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        {/* Burger for Mobile Nav */}
        <div id="burger" className="block md:hidden">
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
      </div>
      {/* Menu-Drawer for Mobile Nav */}
      <div
        onClick={closeDrawer}
        id="mobile-drawer"
        className={
          drawerIsOpen
            ? "fixed right-0 w-[45%] z-50 md:hidden h-[90vh] bg-black border-t border-t-white ease-in duration-300"
            : "fixed right-[-120%]  h-[90vh]"
        }
      >
        <div className="flex flex-col items-center justify-between  h-full py-16 w-[90%] mx-auto">
          <ul className="flex flex-col place-items-center text-center">
            {navLinks.map((link, index) => (
              <li key={index} className="py-4">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
          <button
            className="bg-[#eb0028] bg-opacity-100 hover:bg-[#eb0028] hover:bg-opacity-80 text-white font-semibold py-4 px-6 rounded-md focus:outline-none focus:shadow-outline-red"
            onClick={() => {
              // Handle booking logic here
              console.log("Booking button clicked");
            }}
          >
            Book Your Ticket!
          </button>

          <SocialMediaNav onClick={closeDrawer} />
        </div>
      </div>
      <div
        onClick={closeDrawer}
        id="opacity-when-drawer-clicked"
        className={
          drawerIsOpen
            ? "fixed right-0 w-[100%] md:hidden h-screen bg-black/30 z-10"
            : "fixed right-[-120%] h-screen"
        }
      />
    </nav>
  );
}

export default NewNavbar;
