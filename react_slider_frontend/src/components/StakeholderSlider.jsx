import React, { useEffect, useMemo, useRef, useState } from "react";
import "./StakeholderSlider.css";

/**
 * PUBLIC_INTERFACE
 * StakeholderSlider
 * A lightweight, accessible slider (carousel) that displays stakeholders involved in flood relief.
 * - Keyboard navigation: Left/Right arrow keys to move between slides when the carousel is focused.
 * - Buttons for previous/next controls with proper aria labels.
 * - Pagination dots for quick navigation.
 * - Responsive layout with white background, subtle shadows, and smooth transitions.
 *
 * Props:
 * - slides?: optional array of slides to render, each with { id, title, description, icon }.
 *   If not provided, component will render default flood-relief stakeholders.
 */
export default function StakeholderSlider({ slides }) {
  const defaultSlides = useMemo(
    () => [
      {
        id: "citizens",
        title: "Flood-Affected Citizens",
        description:
          "Individuals and families impacted by flooding, seeking timely aid, shelter, and essential resources.",
        // Inline SVG person/people
        icon: (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Citizens icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M16 11c1.66 0 2.99-1.79 2.99-4S17.66 3 16 3 13 4.79 13 7s1.34 4 3 4zm-8 0c1.66 0 2.99-1.79 2.99-4S9.66 3 8 3 5 4.79 5 7s1.34 4 3 4zm0 2c-2.33 0-7 1.17-7 3.5V19a1 1 0 001 1h12a1 1 0 001-1v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19a1 1 0 001 1h4a1 1 0 001-1v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
        ),
      },
      {
        id: "agencies",
        title: "Government Relief Agencies",
        description:
          "Coordinating response, logistics, and resource allocation to support impacted regions efficiently.",
        // Inline SVG shield/government style
        icon: (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Government agencies icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M12 2l9 4-9 4-9-4 9-4zm0 7l9-4v6c0 5-3.8 9.7-9 11-5.2-1.3-9-6-9-11V5l9 4z" />
          </svg>
        ),
      },
      {
        id: "merchants",
        title: "Local Merchants & E‑Stores",
        description:
          "Providing essential goods, delivery, and flexible fulfillment to maintain supply during crises.",
        // Inline SVG shopping cart
        icon: (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Merchants icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.16 14h9.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49a1 1 0 00-.87-1.48H6.21L5.27 2H1v2h2l3.6 7.59-1.35 2.45A2.003 2.003 0 006.99 17H19v-2H7.42l.74-1.35z" />
          </svg>
        ),
      },
      {
        id: "finance",
        title: "Financial Institutions",
        description:
          "Facilitating emergency funds, microloans, and cash transfers to accelerate recovery.",
        // Inline SVG bank
        icon: (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Financial institutions icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M12 3l9 5v2H3V8l9-5zm-9 8h18v9H3v-9zm2 2v5h2v-5H5zm4 0v5h2v-5H9zm4 0v5h2v-5h-2zm4 0v5h2v-5h-2z" />
          </svg>
        ),
      },
    ],
    []
  );

  const allSlides = slides && slides.length ? slides : defaultSlides;
  const [current, setCurrent] = useState(0);
  const total = allSlides.length;

  const containerRef = useRef(null);
  const liveRegionRef = useRef(null);

  const goTo = (index) => {
    const next = (index + total) % total;
    setCurrent(next);
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Announce slide changes for screen readers
  useEffect(() => {
    if (liveRegionRef.current) {
      const { title } = allSlides[current];
      liveRegionRef.current.textContent = `${title} (${current + 1} of ${total})`;
    }
  }, [current, allSlides, total]);

  // Keyboard navigation: left/right arrows
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  return (
    <section
      className="slider-root"
      aria-roledescription="carousel"
      aria-label="Flood relief stakeholders"
      onKeyDown={onKeyDown}
      tabIndex={0}
      ref={containerRef}
    >
      {/* Live region for announcing slide changes */}
      <div
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
        ref={liveRegionRef}
      />

      <div className="slider-viewport" role="group" aria-label="Slides">
        <ul
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {allSlides.map((s, idx) => (
            <li
              key={s.id}
              className="slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${idx + 1} of ${total}`}
            >
              <div className="slide-card">
                <div className="slide-icon" aria-hidden="true">
                  {s.icon}
                </div>
                <h3 className="slide-title">{s.title}</h3>
                <p className="slide-desc">{s.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="slider-controls">
        <button
          type="button"
          className="nav-btn prev"
          onClick={prev}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          className="nav-btn next"
          onClick={next}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      <div className="slider-dots" role="tablist" aria-label="Slide pagination">
        {allSlides.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => goTo(idx)}
            role="tab"
            aria-selected={idx === current}
            aria-label={`Go to slide ${idx + 1}: ${s.title}`}
          />
        ))}
      </div>
    </section>
  );
}
