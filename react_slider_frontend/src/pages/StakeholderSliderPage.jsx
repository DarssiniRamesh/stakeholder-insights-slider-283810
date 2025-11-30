import React from "react";
import StakeholderSlider from "../components/StakeholderSlider";

/**
 * PUBLIC_INTERFACE
 * StakeholderSliderPage
 * A single, centered page rendering a PPT-like white canvas with a headline and the Stakeholder slider.
 * This page mirrors the style tokens defined in the design notes: clean white background,
 * professional typography, and strong visual hierarchy.
 */
export default function StakeholderSliderPage() {
  return (
    <main
      style={{
        background: "var(--bg-canvas, #FFFFFF)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "24px 0 40px",
      }}
      aria-label="Key stakeholders in flood relief - presentation"
    >
      <div
        style={{
          width: "min(1200px, 94vw)",
          padding: "0 32px",
        }}
      >
        <header style={{ marginBottom: 24 }}>
          <h1
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 700,
              fontSize: "clamp(20px, 2.2vw, 24px)",
              letterSpacing: "0.4px",
              textTransform: "uppercase",
              color: "var(--text-strong, #2B3A4A)",
              margin: 0,
            }}
          >
            Key Stakeholders in Flood Relief
          </h1>
        </header>

        {/* Single, centered slider area */}
        <StakeholderSlider />
      </div>
    </main>
  );
}
