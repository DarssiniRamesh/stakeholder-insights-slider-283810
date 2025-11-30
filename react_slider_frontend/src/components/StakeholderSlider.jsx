import React, { useEffect, useMemo, useRef, useState } from "react";
import "./StakeholderSlider.css";

/**
 * PUBLIC_INTERFACE
 * StakeholderSlider
 * Single or multi-slide PPT-like layout with a grid of section cards.
 * Accessibility:
 * - Keyboard navigation (Left/Right).
 * - Live region announcements.
 * - Focusable controls with visible outlines.
 */
/**
 * PUBLIC_INTERFACE
 * Renders the stakeholder slider component.
 * @param {Object} props
 * @param {Array=} props.slides - Optional array of slide data.
 * @returns {JSX.Element} The slider with cards and navigation controls.
 */
export default function StakeholderSlider({ slides }) {
  // Build two slides: existing Stakeholders and updated Impacts 2x2 quadrant layout
  const slideData = useMemo(
    () => [
      {
        id: "slide-1",
        title: "Key Stakeholders in Flood Relief",
        cards: [
          {
            id: "citizens",
            accent: "blue",
            title: "FLOOD-AFFECTED CITIZENS",
            lines: [
              "Riverside residents: lost homes, livelihoods, documents",
              "Need: basic necessities, emergency funds (food, medicine), IDs, access to essentials",
            ],
            chip: "Access to essentials",
            icon: (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M16 11c1.66 0 2.99-1.79 2.99-4S17.66 3 16 3 13 4.79 13 7s1.34 4 3 4zm-8 0c1.66 0 2.99-1.79 2.99-4S9.66 3 8 3 5 4.79 5 7s1.34 4 3 4zm0 2c-2.33 0-7 1.17-7 3.5V19a1 1 0 001 1h12a1 1 0 001-1v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19a1 1 0 001 1h4a1 1 0 001-1v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            ),
          },
          {
            id: "agencies",
            accent: "green",
            title: "GOVERNMENT RELIEF AGENCIES",
            lines: [
              "Disaster management, social welfare",
              "Disbursement: disbursal, direct benefit transfers",
              "Treasury monitors",
            ],
            chip: "Rapid, accountable aid",
            icon: (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M12 2l9 4-9 4-9-4 9-4zm0 7l9-4v6c0 5-3.8 9.7-9 11-5.2-1.3-9-6-9-11V5l9 4z" />
              </svg>
            ),
          },
          {
            id: "merchants",
            accent: "orange",
            title: "LOCAL MERCHANTS & E-STORES",
            lines: [
              "Grocery, pharma, hardware in relief zones",
              "Require instant grant, UPI-enabled payments",
              "Initial verification, digital payouts",
            ],
            chip: "Rapid, accountable aid",
            icon: (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.16 14h9.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49a1 1 0 00-.87-1.48H6.21L5.27 2H1v2h2l3.6 7.59-1.35 2.45A2.003 2.003 0 006.99 17H19v-2H7.42l.74-1.35z" />
              </svg>
            ),
          },
          {
            id: "finance",
            accent: "purple",
            title: "FINANCIAL INSTITUTIONS",
            lines: [
              "Banks, payment aggregators, UPI networks",
              "Provide working floats, ensure secure fund transfers",
              "Instant verification, digital payouts",
            ],
            chip: "Secure fund transfer",
            icon: (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M12 3l9 5v2H3V8l9-5zm-9 8h18v9H3v-9zm2 2v5h2v-5H5zm4 0v5h2v-5H9zm4 0v5h2v-5h-2zm4 0v5h2v-5h-2z" />
              </svg>
            ),
          },
        ],
      },
      {
        id: "slide-2",
        title: "Expected Relief Impact & Metrics",
        // Four-quadrant content with large key metrics and icons per spec
        cards: [
          {
            id: "q1-speed",
            accent: "blue",
            title: "EMERGENCY RESPONSE SPEED",
            // First line is the large key metric, rest are concise benefits
            lines: [
              "2–4 HOURS",
              "Rapid beneficiary engagement",
              "Real-time verification",
              "Instant fund disbursement",
            ],
            chip: "⚡ Fast-track aid",
            icon: (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M11.99 2a10 10 0 1010.01 10A10 10 0 0011.99 2zm1 11h-4V7h2v4h2z" />
                <path d="M13.5 4l-2.5 6h3l-2 6 6-8h-4.5z" />
              </svg>
            ),
          },
          {
            id: "q2-experience",
            accent: "green",
            title: "CITIZEN RELIEF EXPERIENCE",
            lines: [
              "ZERO FRICTION ACCESS",
              "Instant Direct Benefit Transfer (DBT).",
              "Digital Identification Verified.",
              "Minimal Documentation Required.",
            ],
            chip: "👤 Verified & seamless",
            icon: (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M12 12a5 5 0 10-5-5 5 5 0 005 5zm0 2c-3 0-9 1.5-9 4.5V21h12.5" />
                <path d="M19 13l-2 2-1-1-1.5 1.5L17 18l3.5-3.5L19 13z" />
              </svg>
            ),
          },
          {
            id: "q3-accountability",
            accent: "orange",
            title: "FINANCIAL ACCOUNTABILITY",
            lines: [
              "100% AUDIT TRAIL",
              "ALLOCATION (Govt.) → Verification (System) → Disbursement (Citizen)",
              "Real-time fiscal checks and secure ledgers.",
            ],
            chip: "🔒 Controlled & transparent",
            icon: (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M12 2l7 3v6c0 5-3.3 9.4-7 11-3.7-1.6-7-6-7-11V5l7-3z" />
                <path d="M9 12h6v4H9zM10 10a2 2 0 114 0v2h-4v-2z" />
              </svg>
            ),
          },
          {
            id: "q4-scale",
            accent: "purple",
            title: "SCALABILITY & REUSABILITY",
            lines: [
              "500,000+",
              "BENEFICIARIES IN 48 HOURS",
              {
                type: "tagline",
                items: [
                  "FLOOD RELIEF",
                  "HEALTH",
                  "SUPPLY",
                  "FINANCIAL",
                  "EMERGENCY AID",
                ],
              },
            ],
            chip: "📈 Built to scale",
            icon: (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M4 14h4v4H4zM10 10h4v4h-4zM16 6h4v4h-4z" />
                <path d="M4 14l6-4 6-4 2 2-6 4-6 4v-2z" />
              </svg>
            ),
          },
        ],
      },
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const total = slideData.length;

  const containerRef = useRef(null);
  const liveRegionRef = useRef(null);

  const goTo = (index) => {
    const next = (index + total) % total;
    setCurrent(next);
  };
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Announce slide change
  useEffect(() => {
    if (liveRegionRef.current) {
      const label = `Slide ${current + 1} of ${total}`;
      liveRegionRef.current.textContent = label;
    }
  }, [current, total]);

  // Keyboard navigation
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
      aria-label="Flood relief slides"
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
          {slideData.map((slide, idx) => (
            <li
              key={slide.id}
              className="slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${slide.title} - Slide ${idx + 1} of ${total}`}
            >
              {/* Grid supports 4 cols on desktop, 2x2 at medium widths */}
              <div className="card-grid">
                {slide.cards.map((card) => (
                  <div
                    key={card.id}
                    className={`card card--${card.accent}`}
                    role="group"
                    aria-labelledby={`${card.id}-title`}
                  >
                    <div className="card-icon" aria-hidden="true">
                      {card.icon}
                    </div>
                    <h3 id={`${card.id}-title`} className="card-title">
                      {card.title}
                    </h3>
                    <div className="card-body">
                      {card.lines.map((line, i) => {
                        // Support semantic bullet list for the tagline on the next line
                        if (typeof line === "object" && line?.type === "tagline" && Array.isArray(line.items)) {
                          return (
                            <ul
                              key={`tagline-${card.id}`}
                              className="tagline-list"
                              role="list"
                              aria-label="Reusability domains"
                            >
                              {line.items.map((item, idx) => (
                                <li key={`${card.id}-tag-${idx}`} className="tagline-item">
                                  <span className="bullet" aria-hidden="true">•</span>
                                  <span className="tagline-text">{item}</span>
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return (
                          <p
                            key={i}
                            className={`card-line ${i === 0 ? "metric" : ""}`}
                          >
                            {line}
                          </p>
                        );
                      })}
                    </div>
                    <div className="card-chip">{card.chip}</div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Controls for multi-slide navigation */}
      <div className="slider-controls" aria-hidden={total <= 1}>
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

      <div
        className="slider-dots"
        role="tablist"
        aria-label="Slide pagination"
        aria-hidden={total <= 1}
      >
        {slideData.map((s, idx) => (
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
