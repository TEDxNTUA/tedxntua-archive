"use client";
import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import SocialMediaNav from "./SocialMediaNav";
// import { usePathname } from "next/navigation";

const navLinks = [
  { title: "Home", path: "/", isImage: true },
  {
    title: "Watch",
    path: "/watch",
  },
  // {
  //   title: "Let's Blog",
  //   path: "/blog",
  // },
  {
    title: "unmuTED",
    path: "/unmuTED",
  },
  {
    title: "About",
    path: "/about",
  },
];

function NewNavbar() {
  // const path = usePathname();
  // console.log(path);

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  // const [buttonClicked, setButtonClicked] = useState("");
  const closeDrawer = () => {
    if (drawerIsOpen) {
      setDrawerIsOpen(false);
    }
  };

  const hamburgerLine =
    "h-[4px] w-8 my-[2.5px] rounded-full bg-white transition-all ease-in-out opacity-100 duration-[500ms]";

  return (
    <nav className="fixed bg-black top-0 left-0 right-0 z-10 w-full flex">
      <div className="flex w-full py-4 px-6 items-center justify-between lg:px-16 xl:px-22 2xl:px-36 3xl:px-56">
        <Link
          onClick={closeDrawer}
          href="/"
          className="text-5xl text-white font-semibold"
        >
          <img
            src="./tedxntua_logo.png"
            className="w-44 lg:w-64 h-auto object-contain"
            alt="TEDxNTUA Logo"
            onClick={() =>
              document
                .getElementById("main-scroll-container")
                .scrollTo({ top: 0, behavior: "smooth" })
            }
          ></img>
        </Link>
        {/* Desktop Nav */}
        <div
          id="desktop-navbar"
          className="menu hidden md:flex flex-row-reverse "
        >
          <ul className="flex md:flex-row  md:space-x-8 lg:space-x-16">
            {navLinks.map((link, index) => (
              <li key={index} className="mx-2">
                {link.isImage ? (
                  <Link
                    href={link.path}
                    onClick={() =>
                      document
                        .getElementById("main-scroll-container")
                        .scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    <img
                      src="./homepage/archive.png"
                      alt={link.title}
                      className="w-22 h-8"
                    />
                  </Link>
                ) : (
                  <NavLink
                    href={link.path}
                    title={link.title}
                    // onClick={() => setButtonClicked(link.title)}
                    // buttonClicked={buttonClicked}
                  />
                )}
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
            ? "fixed right-0 w-[45%] z-50 md:hidden h-[92vh] bg-black ease-in duration-300 mt-[8.2vh]"
            : "fixed right-[-120%] h-[90vh] mt-[9.8vh]"
        }
      >
        <div className="flex flex-col items-center justify-between h-full pt-16 pb-24 w-[90%] mx-auto">
          <ul className="flex flex-col place-items-center text-center">
            {navLinks.map((link, index) => (
              <li key={index} className="py-4">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
          {/* UNCOMMENT WHEN EVENT STARTS AND TICKETS ARE AVAILABLE */}
          {/* <button
            className="bg-our-red bg-opacity-100 hover:bg-our-red hover:bg-opacity-80 text-white font-semibold py-4 px-6 rounded-md focus:outline-none focus:shadow-outline-red"
            onClick={() => {
              // Handle booking logic here
              console.log("Booking button clicked");
            }}
          >
            Book Your Ticket!
          </button> */}

          {/* <SocialMediaNav onClick={closeDrawer} /> */}
        </div>
      </div>
      <div
        onClick={closeDrawer}
        id="opacity-when-drawer-clicked"
        className={
          drawerIsOpen
            ? "fixed right-0 w-[100%] md:hidden bg-black/40 z-40 h-[92vh] mt-[8.2vh]"
            : "fixed right-[-120%] h-[90vh] mt-[9.8vh]"
        }
      />
    </nav>
  );
}

export default NewNavbar;
