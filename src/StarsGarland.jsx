import { useEffect, useState } from "react";
import "./StarsGarland.css";

const VIEWBOX_W = 640.66;
const VIEWBOX_H = 74.26;

// Star coordinates are based on the `public/Garland.svg` viewBox.
// We draw them from code using CSS clip-path so they don't depend on the SVG.
const garlandStars = [
  { x: 12.36, y: 27.93, scale: 1.0, delay: 0.0 },
  { x: 33.79, y: 28.93, scale: 1.0, delay: 0.2 },
  { x: 49.0, y: 50.98, scale: 1.25, delay: 0.4 },
  { x: 65.06, y: 31.80, scale: 1.95, delay: 0.6 },
  { x: 82.93, y: 60.82, scale: 1.4, delay: 0.8 },
  { x: 98.16, y: 51.98, scale: 1.54, delay: 1.0 },
  { x: 119.22, y: 33.85, scale: 1.2, delay: 1.2 },
  { x: 144.43, y: 48.59, scale: 1.15, delay: 1.4 },
  { x: 176.04, y: 54.59, scale: 1.2, delay: 1.6 },
  { x: 203.4, y: 54.59, scale: 2.45, delay: 1.8 },
  { x: 231.48, y: 55.59, scale: 1.25, delay: 2.0 },
  { x: 256.87, y: 61.13, scale: 1.35, delay: 2.2 },
  { x: 285.25, y: 44.66, scale: 0.95, delay: 2.4 },
  { x: 311.0, y: 59.18, scale: 1.25, delay: 2.6 },
  { x: 347.8, y: 55.55, scale: 1.35, delay: 2.8 },
  { x: 380.3, y: 43.65, scale: 2.0, delay: 3.0 },
  { x: 419.24, y: 60.82, scale: 1.35, delay: 3.2 },
  { x: 448.32, y: 40.64, scale: 1.0, delay: 3.4 },
  { x: 483.7, y: 47.02, scale: 1.2, delay: 3.6 },
  { x: 515.94, y: 59.18, scale: 1.35, delay: 3.8 },
  { x: 548.66, y: 44.38, scale: 3.05, delay: 4.0 },
  { x: 576.38, y: 35.03, scale: 1.05, delay: 4.2 },
  { x: 598.64, y: 28.14, scale: 1.45, delay: 4.4 },
  { x: 618.24, y: 33.03, scale: 1.15, delay: 4.6 },
  { x: 633.75, y: 47.02, scale: 1.2, delay: 4.8 },
];

export default function StarsGarland() {
  const [svgMarkup, setSvgMarkup] = useState("");

  useEffect(() => {
    let cancelled = false;
    const cacheBuster = Date.now();

    fetch(`/Garland.svg?v=${cacheBuster}`, { cache: "no-store" })
      .then((response) => response.text())
      .then((text) => {
        if (!cancelled) setSvgMarkup(text);
      })
      .catch(() => {
        if (!cancelled) setSvgMarkup("");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="stars-garland" aria-hidden="true">
      <div
        className="stars-garland-svg"
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
      />

      {garlandStars.map((star, index) => {
        const leftPct = (star.x / VIEWBOX_W) * 100;
        const topPct = (star.y / VIEWBOX_H) * 100;
        const size = 22 * star.scale;

        return (
          <svg
            key={`${star.x}-${star.y}-${index}`}
            className="garland-star-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            aria-hidden="true"
            style={{
              left: `${leftPct}%`,
              top: `${topPct}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${star.delay}s`,
            }}
          >
            {/* 5-point star polygon (no CSS clip-path used) */}
            <polygon points="5,1 6.4,3.7 9.3,3.7 7.0,5.5 7.9,8.3 5,6.6 2.1,8.3 3.0,5.5 0.7,3.7 3.6,3.7" />
          </svg>
        );
      })}
    </div>
  );
}

