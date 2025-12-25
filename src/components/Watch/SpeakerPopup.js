"use client";
import React from "react";

/**
 * SpeakerPopup
 * ---------------------------------------------------------------------------
 * A modal popup that displays speaker information and social media links.
 * Supports multiple speakers per talk - each with their own social link.
 * Appears when a user clicks on a speaker's name in WatchCard.
 */
export default function SpeakerPopup({ isOpen, onClose, speaker }) {
  if (!isOpen || !speaker) return null;

  // Detect social platform from URL
  const getSocialPlatform = (url) => {
    if (!url) return { name: "Website", icon: "🌐" };
    if (url.includes("instagram.com")) return { name: "Instagram", icon: "📸" };
    if (url.includes("linkedin.com")) return { name: "LinkedIn", icon: "💼" };
    if (url.includes("twitter.com") || url.includes("x.com")) return { name: "Twitter/X", icon: "🐦" };
    if (url.includes("facebook.com")) return { name: "Facebook", icon: "📘" };
    if (url.includes("youtube.com")) return { name: "YouTube", icon: "▶️" };
    if (url.includes("researchgate.net")) return { name: "ResearchGate", icon: "🔬" };
    if (url.includes("github.com")) return { name: "GitHub", icon: "💻" };
    return { name: "Website", icon: "🌐" };
  };

  /**
   * Parse speakers from the talk data.
   * Supports:
   * - New format: speaker_speakers array with individual socials
   * - Legacy format: speaker_name string (can contain "&" for multiple speakers)
   *                  speaker_info string (single URL or comma-separated)
   */
  const parseSpeakers = () => {
    // New format: array of speakers with individual socials
    if (speaker.speaker_speakers && Array.isArray(speaker.speaker_speakers)) {
      return speaker.speaker_speakers;
    }

    // Legacy format: parse from speaker_name and speaker_info
    const names = speaker.speaker_name.split(/\s*&\s*|\s*,\s*/).map(n => n.trim()).filter(Boolean);
    
    // If speaker_info is an array, match by index
    if (Array.isArray(speaker.speaker_info)) {
      return names.map((name, index) => ({
        name,
        social: speaker.speaker_info[index] || ""
      }));
    }
    
    // If single speaker or single social for all
    if (names.length === 1) {
      return [{ name: names[0], social: speaker.speaker_info || "" }];
    }

    // Multiple speakers but single/no social - each gets empty or shared
    return names.map((name) => ({
      name,
      social: "" // Each speaker needs their own social added in data
    }));
  };

  const speakers = parseSpeakers();

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-70 z-40"
        onClick={onClose}
      />

      {/* Popup Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-2xl w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
            aria-label="Close popup"
          >
            ×
          </button>

          {/* Talk Info */}
          <div className="mb-6">
            <p className="text-gray-400 text-sm mb-1">
              <span className="text-our-red">{speaker.eventName}</span> | {speaker.eventDate}
            </p>
            <h3 className="text-white text-lg font-semibold">{speaker.title}</h3>
          </div>

          {/* Speakers Section */}
          <div className="space-y-4">
            <h4 className="text-gray-400 text-sm font-semibold border-b border-gray-700 pb-2">
              {speakers.length > 1 ? "Speakers" : "Speaker"}
            </h4>

            {speakers.map((s, index) => {
              const platform = getSocialPlatform(s.social);
              return (
                <div key={index} className="bg-[#252525] rounded-lg p-4">
                  <h2 className="text-xl font-bold text-white mb-3">
                    {s.name}
                  </h2>

                  {s.social ? (
                    <a
                      href={s.social}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full bg-our-red hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                    >
                      <span>{platform.icon}</span>
                      <span>Visit {platform.name}</span>
                    </a>
                  ) : (
                    <p className="text-gray-500 text-sm text-center">
                      No social link available
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Watch Talk Button */}
          <a
            href={speaker.yt_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full mt-6 bg-transparent border border-gray-600 hover:border-white text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            <span className="text-xl">▶️</span>
            <span>Watch Talk on YouTube</span>
          </a>
        </div>
      </div>
    </>
  );
}
