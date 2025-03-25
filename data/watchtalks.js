import {PREVIOUS_EVENTS} from "./previousEvents";

function produceEventTalks(event) {
  let eventTalks = event.talks;
  if (!eventTalks) {
    return;
  }

  const eventDate = event.date;
  const eventName = event.name;

  let watchTalks = eventTalks.map(talk => ({
    ...talk,
    eventDate,
    eventName
  }));

  return watchTalks;
}

export const ALL_TALKS = PREVIOUS_EVENTS.flatMap(event => produceEventTalks(event)).filter(Boolean);

export const WATCHTALK_CATEGORIES = [...new Set(ALL_TALKS.flatMap(talk => talk.category))];
