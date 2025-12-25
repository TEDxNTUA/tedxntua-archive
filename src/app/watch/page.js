"use client";
import React, { useEffect, useState } from "react";

// =============================================================================
// Components
// =============================================================================
import WatchGrid from "@/components/Watch/WatchGrid";
import NewFooter from "@/components/Footer/NewFooter";
import SearchBar from "@/components/Watch/SearchBar";
import FilterDropdown from "@/components/Watch/FilterDropdown";
import SpeakerPopup from "@/components/Watch/SpeakerPopup";

// =============================================================================
// Data
// =============================================================================
import { ALL_TALKS, WATCHTALK_CATEGORIES } from "../../../data/watchtalks";
import { LEAN_EVENTS } from "../../../data/previousEvents";

// =============================================================================
// Styles
// =============================================================================
import styles from "./page.module.css";
import dropdownStyles from "@/components/Watch/FilterDropdown.module.css";

/**
 * WatchPage
 * ---------------------------------------------------------------------------
 * The main page for browsing all TEDxNTUA talks.
 * Features:
 *  - Category filtering via dropdown
 *  - Event filtering via dropdown
 *  - Text search across title, speaker, and event name
 *  - Responsive layout with mobile-first approach
 */
function WatchPage() {
  // ---------------------------------------------------------------------------
  // Local State
  // ---------------------------------------------------------------------------

  /** Currently selected category filters */
  const [selectedCategories, setSelectedCategories] = useState([]);

  /** Currently selected event name filters */
  const [selectedEventNames, setSelectedEventNames] = useState([]);

  /** Talks to display after all filters are applied */
  const [featuredTalks, setFeaturedTalks] = useState(ALL_TALKS);

  /** Current search input (raw string entered by the user) */
  const [searchTerm, setSearchTerm] = useState("");

  /** Speaker popup state */
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  // ---------------------------------------------------------------------------
  // Popup Handlers
  // ---------------------------------------------------------------------------

  /**
   * Open the speaker popup with the selected talk's speaker info.
   * @param {object} talk - The talk object containing speaker info.
   */
  const handleSpeakerClick = (talk) => {
    setSelectedSpeaker(talk);
    setIsPopupOpen(true);
  };

  /**
   * Close the speaker popup.
   */
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedSpeaker(null);
  };

  // ---------------------------------------------------------------------------
  // Filter Handlers
  // ---------------------------------------------------------------------------

  /**
   * Toggle a category on/off in the selectedCategories array.
   * @param {string} category - The category value to toggle.
   */
  const handleToggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  /**
   * Toggle an event name on/off in the selectedEventNames array.
   * @param {string} eventName - The event name to toggle.
   */
  const handleToggleEventName = (eventName) => {
    setSelectedEventNames((prev) =>
      prev.includes(eventName)
        ? prev.filter((e) => e !== eventName)
        : [...prev, eventName]
    );
  };

  // ---------------------------------------------------------------------------
  // Prepare Dropdown Options
  // ---------------------------------------------------------------------------

  /** Category options for the dropdown */
  const categoryOptions = WATCHTALK_CATEGORIES.map((cat) => ({
    value: cat,
    label: cat.charAt(0).toUpperCase() + cat.slice(1),
  }));


  /** Event options for the dropdown (includes year and name separately) */
  const eventOptions = LEAN_EVENTS.map((event) => ({
    value: event.name,
    year: event.year,
    name: event.name,
  }));

  /**
   * Custom renderer for event options with improved appearance:
   * Year in a styled pill badge, name beside it
   */
  function renderEventOption(option, isSelected) {
    return (
      <span className={dropdownStyles.eventOption}>
        <span className={`${dropdownStyles.eventYear} ${isSelected ? dropdownStyles.eventYearSelected : ""}`}>
          {option.year}
        </span>
        <span className={`${dropdownStyles.eventName} ${isSelected ? dropdownStyles.eventNameSelected : ""}`}>
          {option.name}
        </span>
      </span>
    );
  }

  // ---------------------------------------------------------------------------
  // Filter Effect
  // ---------------------------------------------------------------------------

  /**
   * Recompute `featuredTalks` whenever filters or the search term change.
   * Filtering order:
   *  1. Start from ALL_TALKS
   *  2. Narrow by selected event names (if any)
   *  3. Narrow by selected categories (if any)
   *  4. Apply text search across title, speaker_name, and eventName
   */
  useEffect(() => {
    let filteredTalks = ALL_TALKS;

    // Step 2: Filter by selected event names
    if (selectedEventNames.length > 0) {
      filteredTalks = filteredTalks.filter((talk) =>
        selectedEventNames.includes(talk.eventName)
      );
    }

    // Step 3: Filter by selected categories (supports arrays or single strings)
    if (selectedCategories.length > 0) {
      filteredTalks = filteredTalks.filter((talk) =>
        Array.isArray(talk.category)
          ? talk.category.some((cat) => selectedCategories.includes(cat))
          : selectedCategories.includes(talk.category)
      );
    }

    // Step 4: Apply searchTerm (case-insensitive) across title, speaker, event
    if (searchTerm && searchTerm.trim() !== "") {
      const normalizedQuery = searchTerm.trim().toLowerCase();
      filteredTalks = filteredTalks.filter((talk) => {
        return (
          (talk.title && talk.title.toLowerCase().includes(normalizedQuery)) ||
          (talk.speaker_name && talk.speaker_name.toLowerCase().includes(normalizedQuery)) ||
          (talk.eventName && talk.eventName.toLowerCase().includes(normalizedQuery))
        );
      });
    }

    setFeaturedTalks(filteredTalks);
  }, [selectedEventNames, selectedCategories, searchTerm]);

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <div className="bg-black text-white">
      {/* =====================================================================
          Page Title Section
          ===================================================================== */}
      <section
        id="title"
        className="pt-10 max-w-[1600px] w-10/12 flex flex-col gap-4 items-center mx-auto mt-12"
      >
        <h1 className="text-left font-bold text-3xl">
          Every <span className="text-our-red">TEDx</span>
          NTUA talk since 2015, all in one place.
        </h1>
        <h2>Explore a Decade of Ideas Change Everything!</h2>
      </section>

      {/* =====================================================================
          Filters Section (Desktop: md and up)
          ===================================================================== */}
      <section
        id="talk-filtering"
        className="hidden md:block max-w-[1600px] w-10/12 mt-8 mx-auto"
      >
        <div className={styles.filterRow}>
          {/* Category Filter Dropdown */}
          <FilterDropdown
            label="Categories"
            options={categoryOptions}
            selectedValues={selectedCategories}
            onToggle={handleToggleCategory}
          />

          {/* Event Filter Dropdown */}
          <FilterDropdown
            label="Events"
            options={eventOptions}
            selectedValues={selectedEventNames}
            onToggle={handleToggleEventName}
            renderOption={renderEventOption}
          />

          {/* Search Bar (Desktop) */}
          <div className={styles.searchWrapper}>
            <SearchBar
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.currentTarget.value)}
              className={styles.search}
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          Mobile Layout: Search + Filters (below md breakpoint)
          ===================================================================== */}
      <section className="md:hidden px-4 mt-8">
        {/* Mobile Search */}
        <div className="mb-4">
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
            className={styles.searchMobile}
          />
        </div>

        {/* Mobile Filter Dropdowns */}
        <div className={styles.mobileFilterRow}>
          <FilterDropdown
            label="Categories"
            options={categoryOptions}
            selectedValues={selectedCategories}
            onToggle={handleToggleCategory}
          />
          <FilterDropdown
            label="Events"
            options={eventOptions}
            selectedValues={selectedEventNames}
            onToggle={handleToggleEventName}
            renderOption={renderEventOption}
          />
        </div>
      </section>

      {/* =====================================================================
          Talks Grid
          ===================================================================== */}
      <section className="mt-8">
        {featuredTalks.length > 0 ? (
          <WatchGrid talks={featuredTalks} onSpeakerClick={handleSpeakerClick} />
        ) : (
          <p className="w-10/12 mx-auto text-center text-lg mt-12">
            Oops! No talks match your selection. Try adjusting the filters to
            explore more inspiring content!
          </p>
        )}
      </section>

      {/* =====================================================================
          Speaker Popup
          ===================================================================== */}
      <SpeakerPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        speaker={selectedSpeaker}
      />

      {/* =====================================================================
          Footer
          ===================================================================== */}
      <NewFooter />
    </div>
  );
}

export default WatchPage;
