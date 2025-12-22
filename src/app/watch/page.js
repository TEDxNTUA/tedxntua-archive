"use client";
import React, {useEffect, useState} from "react";

//Components
import WatchGrid from "@/components/Watch/WatchGrid";
import NewFooter from "@/components/Footer/NewFooter";
import SearchBar from "@/components/Watch/SearchBar";
//Data
import {ALL_TALKS, WATCHTALK_CATEGORIES} from "../../../data/watchtalks";
import {LEAN_EVENTS} from "../../../data/previousEvents";
//Styles
import styles from "./page.module.css";


function WatchPage() {
  // --- Local state ------------------------------------------------------
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedEventNames, setSelectedEventNames] = useState([]);
  const [featuredTalks, setFeaturedTalks] = useState(ALL_TALKS);
  // Current search input (raw string entered by the user)
  const [searchTerm, setSearchTerm] = useState("");

  // Toggle a category on/off in `selectedCategories`
  const handleSelectCategory = browserEvent => {
    const newCategory = browserEvent.currentTarget.value;

    setSelectedCategories(prevCategories =>
      prevCategories.includes(newCategory)
        ? prevCategories.filter(category => category !== newCategory)
        : [...prevCategories, newCategory]
    );
  };

  // Toggle an event name on/off in `selectedEventNames`
  const handleSelectEventName = browserEvent => {
    const newTedEventName = browserEvent.currentTarget.value;

    setSelectedEventNames(prevEventNames =>
      prevEventNames.includes(newTedEventName)
        ? prevEventNames.filter(eventName => eventName !== newTedEventName)
        : [...prevEventNames, newTedEventName]
    );
  };

  /*
   * Recompute `featuredTalks` whenever filters or the search term change.
   * Filtering order:
   *  1) start from ALL_TALKS
   *  2) narrow by selected event names (if any)
   *  3) narrow by selected categories (if any)
   *  4) apply text search across title, speaker_name, and eventName
   */
  useEffect(() => {
    let filteredTalks = ALL_TALKS;

    // 2) Filter by selected event names
    if (selectedEventNames.length > 0) {
      filteredTalks = filteredTalks.filter(talk => selectedEventNames.includes(talk.eventName));
    }

    // 3) Filter by selected categories (support arrays or single category strings)
    if (selectedCategories.length > 0) {
      filteredTalks = filteredTalks.filter(talk =>
        Array.isArray(talk.category)
          ? talk.category.some(cat => selectedCategories.includes(cat))
          : selectedCategories.includes(talk.category)
      );
    }

    // 4) Apply searchTerm (case-insensitive) across title, speaker_name, and eventName
    if (searchTerm && searchTerm.trim() !== "") {
      const normalizedQuery = searchTerm.trim().toLowerCase();
      filteredTalks = filteredTalks.filter(talk => {
        return (
          (talk.title && talk.title.toLowerCase().includes(normalizedQuery)) ||
          (talk.speaker_name && talk.speaker_name.toLowerCase().includes(normalizedQuery)) ||
          (talk.eventName && talk.eventName.toLowerCase().includes(normalizedQuery))
        );
      });
    }

    setFeaturedTalks(filteredTalks);
  }, [selectedEventNames, selectedCategories, searchTerm]);

  return (
    <div className="bg-black text-white">

    {/*--- Page Title Section -----------------------------------------------*/}
      <section
        id="title"
        className="pt-10 max-w-[1600px] w-10/12 flex flex-col gap-4 items-center mx-auto mt-12"
      >
        <h1 className="text-left font-bold text-3xl">
          Every <span className="text-our-red"> TEDx</span>
          NTUA talk since 2015, all in one place.
        </h1>
        <h2>Explore a Decade of Ideas Worth Spreading!</h2>
      </section>

    {/*--- Talk Filtering Section -------------------------------------------*/}
      <section id="talk-filtering" className="hidden md:block max-w-[1600px] w-10/12 mt-8 mx-auto">
        <div className="flex flex-row justify-between items-center gap-8 xl:p-10">
          {/* Category Filter */}
          <ul
            id="category-filter-container"
            className="w-[300px] h-[230px] xl:w-[400px] 2xl:h-[240px] grid grid-cols-3 2xl:grid-cols-3 items-center justify-items-center rounded-md shadow-lg bg-zinc-950"
          >
            {WATCHTALK_CATEGORIES.map(watchtalkCategory => (
              <li key={watchtalkCategory.category}>
                <button
                  value={watchtalkCategory}
                  className={`capitalize py-2 px-1 transition-all duration-300 ease-in-out shadow-md rounded-lg w-[70px] xl:w-[100px] text-xs xl:text-base lg:text-md lg:font-medium
          ${
            selectedCategories.includes(watchtalkCategory)
              ? "bg-blue-600 lg:hover:bg-blue-500 shadow-sm transform scale-[1.01]"
              : "bg-gray-800 lg:hover:bg-gray-700"
          }`}
                  onClick={handleSelectCategory}
                >
                  {watchtalkCategory}
                </button>
              </li>
            ))}
          </ul>

          {/* Event Filter the size will HAVE TO BE CHANGED WHILE YEARS GO AND WE HAVE MORE AND MORE/WONT FIT */}
          <ul
            id="event-filter-contSiner"
            className="w-[300px] h-[230px] lg:w-[600px] 2xl:h-[240px] py-4 flex flex-wrap items-center justify-center overflow-hidden gap-3 rounded-md shadow-lg bg-zinc-950"
          > 

            {LEAN_EVENTS.map(tedEvent => (
              <li key={tedEvent.year}>
                <button
                  value={tedEvent.name}
                  className={`flex items-center gap-2 xl:gap-4 px-3 py-1 lg:py-2 rounded-md lg:rounded-xl font-medium transition-all shadow-md ${
                    selectedEventNames.includes(tedEvent.name)
                      ? "bg-blue-600 lg:hover:bg-blue-500 shadow-sm transform scale-[1.02]"
                      : "bg-gray-800 lg:hover:bg-gray-700"
                  } `}
                  onClick={handleSelectEventName}
                >
                  <span
                    className={`lg:hidden text-sm font-bold text-gray-200"
                      }`}
                  >
                    <h1>{tedEvent.year}:{  }{tedEvent.name}</h1>
                  </span>
                  <span
                    className={`hidden lg:block text-xs xl:text-sm px-1 py-1 py-1font-bold rounded-md ${
                      selectedEventNames.includes(tedEvent.name)
                        ? "bg-black/20"
                        : "bg-gray-600 text-gray-200"
                    }`}
                  >
                    {tedEvent.year}
                  </span>
                  <span className="hidden lg:block text-sm xl:text-base">{tedEvent.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Desktop search: visible on md+ and positioned beside filters */}
      <div className="hidden md:block flex-1 pr-6">
        <SearchBar
          value={searchTerm}
          onChange={event => setSearchTerm(event.currentTarget.value)}
          className={styles.search}
        />
      </div>

      {/* Mobile layout: search above the grid on small screens */}
      <div className="md:hidden px-4">

        <div className="mb-4">
          <SearchBar
            value={searchTerm}
            onChange={event => setSearchTerm(event.currentTarget.value)}
            className="w-full px-4 py-2 rounded-md bg-zinc-900 text-white placeholder-gray-400 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-our-red"
          />
        </div>

        <WatchGrid talks={featuredTalks} />
      </div>

      {/* Spacer for desktop layout (keeps content offset when filters are shown) */}
      <div className="hidden md:block"></div>

      {/* Main grid (desktop) or fallback message when no talks match) */}
      {featuredTalks.length > 0 ? (
        <WatchGrid talks={featuredTalks} />
      ) : (
        <p className="w-10/12 mx-auto text-center text-lg mt-12">
          Oops! No talks match your selection. Try adjusting the filters to explore more inspiring
          content!
        </p>
      )}

      <NewFooter />
    </div>
  );
}

export default WatchPage;
