import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const BowCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const trailRef = useRef([]); // store particles
  const mousePositions = useRef([]); // store past cursor positions

  useEffect(() => {
    const handleMouseMove = (e) => {
      // update bow cursor position
      setPosition({ x: e.clientX, y: e.clientY });

      // store recent cursor positions
      mousePositions.current.push({ x: e.clientX, y: e.clientY });

      // only keep last 15 positions for delay
      if (mousePositions.current.length > 15) {
        const delayed = mousePositions.current.shift(); // get old position

        // create particle at delayed position
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = `${delayed.x}px`;
        particle.style.top = `${delayed.y}px`;
        document.body.appendChild(particle);
        trailRef.current.push(particle);

        // remove old particles
        if (trailRef.current.length > 30) {
          const old = trailRef.current.shift();
          old.remove();
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="bow-cursor"
      style={{ left: position.x, top: position.y }}
    ></div>
  );
};

export default BowCursor;
