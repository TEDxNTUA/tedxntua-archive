"use client";
import React, {useEffect, useState, useRef, useCallback} from "react";
import styles from "./Timeline.module.css";

function YearLine({events = []}) {
  const [dotPosition, setDotPosition] = useState(0);
  const lineRef = useRef(null);

  // Automatically calculate all bullet positions based on events
  const numberOfYears = events.length;
  const bulletPositions = [0, ...Array.from({length: numberOfYears}, (_, i) => 292 + i * 600)];
  const lastBulletPosition = bulletPositions[bulletPositions.length - 1];

  const handleScroll = useCallback(() => {
    if (!lineRef.current) return;

    const lineRect = lineRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // The dot tracks viewport center relative to the line
    const viewportCenter = windowHeight / 2;
    const dotY = viewportCenter - lineRect.top;
    
    // Clamp the dot to stay WITHIN the bar (from first bullet to last bullet)
    const clampedPosition = Math.max(0, Math.min(dotY, lastBulletPosition));
    
    setDotPosition(clampedPosition);
  }, [lastBulletPosition]);

  useEffect(() => {
    let ticking = false;
    
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div 
      ref={lineRef}
      className={styles.timelineContainer}
      style={{ height: `${lastBulletPosition}px` }}
    >
      {/* The visible red bar connecting all bullets */}
      <div className={styles.redBar} style={{ height: `${lastBulletPosition}px` }} />
      
      {/* Glowing progress trail */}
      <div 
        className={styles.glowTrail}
        style={{ height: `${Math.min(dotPosition, lastBulletPosition)}px` }}
      />
      
      {/* All year bullets (static dots at each year) */}
      {bulletPositions.map((pos, index) => (
        <div
          key={index}
          className={`${styles.yearBullet} ${
            Math.abs(dotPosition - pos) < 80 ? styles.bulletActive : ''
          }`}
          style={{ top: `${pos}px` }}
        />
      ))}
      
      {/* Moving dot that follows scroll */}
      <div 
        className={styles.movingDot}
        style={{ top: `${dotPosition}px` }}
      />
    </div>
  );
}

export default YearLine;
