"use client";
import "./styles.css";
import Photo from "./Photo";
import {PREVIOUS_EVENTS} from "../../../data/previousEvents";

export default function Timeline() {
  return (
    <section>
      {PREVIOUS_EVENTS.map(TedEvent => (
        <Photo key={TedEvent.id} TedEvent={TedEvent} />
      ))}
    </section>
  );
}
