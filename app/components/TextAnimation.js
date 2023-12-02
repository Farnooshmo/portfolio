// AnimatedText.jsx
"use client";
import { useEffect, useState } from "react";

export default function AnimatedText() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const letters = [" ", "E", "n", "g", "i", "n", "e", "e","r"];

  const fadeUp = "translate-y-32 opacity-0";
  const fallDown = "-translate-y-32";
  const duration = "duration-[5s] ease-out";

  return (
    <div className="text-container duration-400 delay-1000 relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-600  border-solid rounded  text-center text-2xl font-bold p-4 ">
      <span
        className={`reg-text ${loaded ? "" : fadeUp} ${
          loaded ? "opacity-100" : ""
        }`}
      >
        Software
      </span>
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`letter ${loaded ? "" : fadeUp} ${
            loaded ? "opacity-100" : ""
          } ${index === 1 ? "translate-y-12 duration-1000" : ""} ${
            index === 2 ? "blur-0 translate-y-9 duration-1150" : ""
          } ${index === 3 ? "translate-y-6 duration-1000" : ""} ${
            index === 4 ? "translate-y-16 duration-1250" : ""
          } ${index === 5 ? "blur-0 translate-y-3 duration-1000" : ""}`}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
