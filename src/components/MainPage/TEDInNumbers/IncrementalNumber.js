"use client";

import React, {useState, useEffect, useRef} from "react";

const IncrementalNumber = ({endValue, duration}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          animateIncrement();
        }
      },
      {threshold: 0} // Trigger when any part of the component is visible
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const animateIncrement = () => {
    let startTimestamp;

    const animate = timestamp => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;

      const percentage = Math.min(progress / duration, 1);
      const animatedValue = Math.floor(percentage * endValue);

      setCurrentValue(animatedValue);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return <span ref={targetRef}>{currentValue}</span>;
};

export default IncrementalNumber;
