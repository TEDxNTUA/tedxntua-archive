"use client";
import WatchGrid from "@/components/Watch/WatchGrid";
import {PREVIOUSEVENTS} from "../../../data/previousEvents";

import React, {useState} from "react";
import NewFooter from "@/components/Footer/NewFooter";

function WatchPage() {
  function produceEventTalks(event) {
    let eventTalks = event.talks;
    if (!eventTalks) {
      return;
    }

    const eventDate = event.date;
    const eventName = event.id;

    const watchTalks = eventTalks.map(talk => ({
      ...talk,
      eventDate,
      eventName
    }));

    return watchTalks;
  }

  const allTalks = PREVIOUSEVENTS.flatMap(event => produceEventTalks(event));
  return (
    <div className="bg-black">
      <div className="grid grid-cols-1 justify-items-center">
        <WatchGrid talks={allTalks} />
      </div>
      <NewFooter />
    </div>
  );
}

export default WatchPage;
