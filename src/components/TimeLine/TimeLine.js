"use client";
import "./styles.css";
import Photo from "./Photo";
import { PREVIOUSEVENTS } from "../../../data/previousEvents";

export default function Timeline() {
  return (
    <section>
      {PREVIOUSEVENTS.map((TedEvent) => (
        <Photo key={TedEvent.id} TedEvent={TedEvent} />
      ))}
    </section>
  );
}
