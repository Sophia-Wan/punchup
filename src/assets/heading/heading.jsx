import { useCallback, useEffect, useRef, useState } from "react";
import "./heading.css";

const SPAM_CLICKS_TO_FALL = 4;
const CLICK_RESET_MS = 900;

const SLOT = {
  OPENING: "sophia-opening",
  SUFFIX: "sophia-suffix",
};

function HeadingO() {
  return (
    <span className="site-title-o">
      <img
        src="/O.svg"
        alt=""
        className="site-title-opic"
        draggable={false}
      />
    </span>
  );
}

function HeadingI() {
  return (
    <span className="site-title-i">
      <img
        src="/i.svg"
        alt=""
        className="site-title-ipic"
        draggable={false}
      />
    </span>
  );
}

/** One clickable S; only this instance’s spam clicks make it fall. */
function TitleLetterS({ letter, fallen, onSpamClick, ariaLabel }) {
  return (
    <span
      role="button"
      tabIndex={0}
      className={`site-title-s${fallen ? " site-title-s-drop" : ""}`}
      onClick={onSpamClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSpamClick();
        }
      }}
      aria-label={ariaLabel}
    >
      {letter}
    </span>
  );
}

export default function Title() {
  const [fallenBySlot, setFallenBySlot] = useState(() => ({
    [SLOT.OPENING]: false,
    [SLOT.SUFFIX]: false,
  }));
  const clicksBySlotRef = useRef({});
  const resetTimerBySlotRef = useRef({});

  useEffect(() => {
    return () => {
      Object.values(resetTimerBySlotRef.current).forEach((t) => {
        if (t) clearTimeout(t);
      });
    };
  }, []);

  const handleSpamClick = useCallback(
    (slotId) => {
      if (fallenBySlot[slotId]) return;

      const timers = resetTimerBySlotRef.current;
      if (timers[slotId]) {
        clearTimeout(timers[slotId]);
        timers[slotId] = null;
      }

      const clicks = clicksBySlotRef.current;
      clicks[slotId] = (clicks[slotId] || 0) + 1;

      if (clicks[slotId] >= SPAM_CLICKS_TO_FALL) {
        setFallenBySlot((prev) => ({ ...prev, [slotId]: true }));
        return;
      }

      timers[slotId] = setTimeout(() => {
        clicks[slotId] = 0;
        timers[slotId] = null;
      }, CLICK_RESET_MS);
    },
    [fallenBySlot],
  );

  return (
    <div className="site-title-wrap">
      <h1 className="site-title-main">
        {/* Screen readers: full title text. Visible line uses SVG Os/Is + plain letters + clickable S; aria-hidden for AT. */}
        <span className="site-title-hidden">Sophia&apos;s Portfolio</span>
        <span className="site-title-visual" aria-hidden="true">
          <span className="site-title-line">
            <TitleLetterS
              letter="S"
              fallen={fallenBySlot[SLOT.OPENING]}
              onSpamClick={() => handleSpamClick(SLOT.OPENING)}
              ariaLabel="Spam click the opening S to make it fall"
            />
            <HeadingO />
            <span>ph</span>
            <HeadingI />
            <span>a&apos;</span>
            <TitleLetterS
              letter="s"
              fallen={fallenBySlot[SLOT.SUFFIX]}
              onSpamClick={() => handleSpamClick(SLOT.SUFFIX)}
              ariaLabel="Spam click the s in Sophia's to make it fall"
            />
          </span>
          <span className="site-title-line">
            <span>P</span>
            <HeadingO />
            <span>rtf</span>
            <HeadingO />
            <span>l</span>
            <HeadingI />
            <HeadingO />
          </span>
        </span>
      </h1>
    </div>
  );
}
