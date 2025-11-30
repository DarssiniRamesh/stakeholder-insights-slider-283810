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
      aria-label="Flood relief slides - presentation"
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
              fontSize: "var(--slider-title-size)",
              letterSpacing: "0.45px",
              textTransform: "uppercase",
              color: "var(--slider-text-strong, #1e3a8a)",
              margin: 0,
            }}
          >
            Key Stakeholders in Flood Relief
          </h1>
          <p
            className="description"
            style={{
              marginTop: 6,
            }}
          >
            Use the arrows or dots to view Expected Relief Impact & Metrics.
          </p>
        </header>

        {/* Centered slider area with two slides (stakeholders + impacts) */}
        <StakeholderSlider />
      </div>
    </main>
  );
}
