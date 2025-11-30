import React from "react";

/**
 * PUBLIC_INTERFACE
 * StakeholderRelationGrid
 * Renders a 2x2 grid of stakeholder cards with an absolute-positioned SVG overlay
 * that draws connection lines with arrowheads between top pair (Citizens ↔ Government),
 * bottom pair (Merchants ↔ Financial), and optional vertical connectors.
 *
 * Accessibility:
 * - Cards are semantic groups with headings and lists.
 * - The SVG is decorative; aria-hidden to avoid noise for screen readers.
 */
export default function StakeholderRelationGrid() {
  const items = [
    {
      id: "citizens",
      accent: "blue",
      title: "FLOOD-AFFECTED CITIZENS",
      points: [
        "Riverside residents: lost homes, livelihoods, documents",
        "Need: essentials, emergency funds, IDs",
        "Access to nearby merchants",
      ],
      chip: "Access to essentials",
      icon: (
        <svg
          width="48"
          height="48"
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
      id: "government",
      accent: "green",
      title: "GOVERNMENT RELIEF AGENCIES",
      points: [
        "Disaster mgmt & social welfare",
        "Disbursement: DBT & grants",
        "Treasury oversight",
      ],
      chip: "Rapid, accountable aid",
      icon: (
        <svg
          width="48"
          height="48"
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
      points: [
        "Grocery, pharma, hardware",
        "Require instant grant, UPI pay",
        "Verified digital payouts",
      ],
      chip: "Rapid, accountable aid",
      icon: (
        <svg
          width="48"
          height="48"
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
      id: "financial",
      accent: "purple",
      title: "FINANCIAL INSTITUTIONS",
      points: [
        "Banks, aggregators, UPI",
        "Working floats, secure transfers",
        "Instant verification",
      ],
      chip: "Secure fund transfer",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M12 3l9 5v2H3V8l9-5zm-9 8h18v9H3v-9zm2 2v5h2v-5H5zm4 0v5h2v-5H9zm4 0v5h2v-5h-2zm4 0v5h2v-5h-2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relations-wrap">
      {/* Grid */}
      <div className="relations-grid">
        {items.map((card) => (
          <section
            key={card.id}
            className={`rel-card rel-${card.accent}`}
            role="group"
            aria-labelledby={`${card.id}-title`}
          >
            <div className="rel-icon" aria-hidden="true">
              {card.icon}
            </div>
            <h3 id={`${card.id}-title`} className="rel-title">
              {card.title}
            </h3>
            <ul className="rel-list">
              {card.points.map((p, i) => (
                <li key={i} className="rel-item">
                  {p}
                </li>
              ))}
            </ul>
            <div className="rel-chip">{card.chip}</div>
          </section>
        ))}
      </div>

      {/* SVG connectors overlay (decorative) */}
      <svg
        className="relations-svg"
        aria-hidden="true"
        focusable="false"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Arrowheads */}
          <marker
            id="arrow-blue"
            markerWidth="10"
            markerHeight="8"
            refX="9"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L10,4 L0,8 Z" fill="var(--accent-blue, #1E60C2)" />
          </marker>
          <marker
            id="arrow-green"
            markerWidth="10"
            markerHeight="8"
            refX="9"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L10,4 L0,8 Z" fill="var(--accent-green, #17A569)" />
          </marker>
          <marker
            id="arrow-orange"
            markerWidth="10"
            markerHeight="8"
            refX="9"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L10,4 L0,8 Z" fill="var(--accent-orange, #F5A524)" />
          </marker>
          <marker
            id="arrow-purple"
            markerWidth="10"
            markerHeight="8"
            refX="9"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L10,4 L0,8 Z" fill="var(--accent-purple, #6A55C7)" />
          </marker>
        </defs>

        {/* Lines are drawn in percentages so they scale with the grid container.
            We assume a 2x2 grid:
            - Citizens (top-left) connects horizontally to Government (top-right).
            - Merchants (bottom-left) connects horizontally to Financial (bottom-right).
            - Optional vertical connectors centered under each top card down to its bottom counterpart.
            Hide with CSS at small widths.
        */}

        {/* Top horizontal Citizens -> Government (blue to green, draw bidirectional by two lines) */}
        <line
          className="conn conn-top"
          x1="15%"
          y1="25%"
          x2="85%"
          y2="25%"
          stroke="var(--accent-blue, #1E60C2)"
          strokeWidth="2"
          markerEnd="url(#arrow-green)"
        />
        <line
          className="conn conn-top"
          x1="85%"
          y1="28%"
          x2="15%"
          y2="28%"
          stroke="var(--accent-green, #17A569)"
          strokeWidth="2"
          markerEnd="url(#arrow-blue)"
        />

        {/* Bottom horizontal Merchants -> Financial (orange to purple, bidirectional) */}
        <line
          className="conn conn-bottom"
          x1="15%"
          y1="75%"
          x2="85%"
          y2="75%"
          stroke="var(--accent-orange, #F5A524)"
          strokeWidth="2"
          markerEnd="url(#arrow-purple)"
        />
        <line
          className="conn conn-bottom"
          x1="85%"
          y1="78%"
          x2="15%"
          y2="78%"
          stroke="var(--accent-purple, #6A55C7)"
          strokeWidth="2"
          markerEnd="url(#arrow-orange)"
        />

        {/* Vertical connectors (subtle graph gray) from top row down to bottom row */}
        <line
          className="conn conn-vert"
          x1="25%"
          y1="38%"
          x2="25%"
          y2="62%"
          stroke="var(--border, #E2E8F0)"
          strokeWidth="2"
        />
        <line
          className="conn conn-vert"
          x1="75%"
          y1="38%"
          x2="75%"
          y2="62%"
          stroke="var(--border, #E2E8F0)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
