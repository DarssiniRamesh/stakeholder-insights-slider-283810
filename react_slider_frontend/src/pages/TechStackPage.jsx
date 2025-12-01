import React from "react";
import styles from "./TechStackPage.module.css";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * TechStackPage
 * Renders a blockchain-focused 3-layer technology stack diagram with:
 * - Layer 1 (Application): Web App, Mobile Wallet (Klefki Wallet), Verification — white cards with light blue tint
 * - Layer 2 (MOSIP Core): ID Issuance, Authentication, Credential Management — #050E9B at ~15% opacity
 * - Layer 3 (Blockchain Integration): Klefki SDK, Blockchain Network, Decentralized ID — soft purple (#7C3AED at 15%) with subtle gradient
 * Adds thin connecting lines between layers, a 'Blockchain-Based SSI' badge, and a legend for DID/SSI/ZKP.
 * Accessible and responsive; 28px inline icon placeholders using simple shapes/initials.
 */
export default function TechStackPage() {
  return (
    <main className={styles.pageWrap} aria-label="Technology stack diagram">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Technology Stack — Blockchain SSI</h1>

          {/* Badge top-right */}
          <span
            className={styles.blockchainBadge}
            role="note"
            aria-label="This technology stack is Blockchain-Based SSI"
          >
            Blockchain-Based SSI
          </span>

          <Link className={styles.subtleLink} to="/" aria-label="Go to Home / Slider">
            ← Back to Slider
          </Link>
        </div>

        <section className={styles.layers} aria-label="Three layered stack">
          {/* Layer 1: Application */}
          <div>
            <p className={styles.layerCaption} aria-hidden="true">
              Layer 1 — Application
            </p>
            <div
              className={`${styles.rowGrid} ${styles.hasPins}`}
              role="list"
              aria-label="Application layer cards"
            >
              {/* Web App */}
              <article
                className={`${styles.card} ${styles.tintBlue}`}
                role="listitem"
                aria-labelledby="l1-webapp-title"
              >
                <div className={styles.iconRow} aria-hidden="true">
                  <IconCircle letter="W" />
                </div>
                <h3 id="l1-webapp-title" className={styles.cardTitle}>
                  Web App
                </h3>
                <p className={styles.cardBodyLine}>Responsive portal for issuance and verification flows.</p>
              </article>

              {/* Mobile Wallet (Klefki Wallet) */}
              <article
                className={`${styles.card} ${styles.tintBlue}`}
                role="listitem"
                aria-labelledby="l1-wallet-title"
              >
                <div className={styles.iconRow} aria-hidden="true">
                  <IconCircle letter="K" />
                </div>
                <h3 id="l1-wallet-title" className={styles.cardTitle}>
                  Mobile Wallet (Klefki Wallet)
                </h3>
                <p className={styles.cardBodyLine}>Holds DIDs and verifiable credentials securely on device.</p>
              </article>

              {/* Verification */}
              <article
                className={`${styles.card} ${styles.tintBlue}`}
                role="listitem"
                aria-labelledby="l1-verification-title"
              >
                <div className={styles.iconRow} aria-hidden="true">
                  <IconCircle letter="V" />
                </div>
                <h3 id="l1-verification-title" className={styles.cardTitle}>
                  Verification
                </h3>
                <p className={styles.cardBodyLine}>Verifier portal for consented checks and ZKP-based proofs.</p>
              </article>
            </div>
          </div>

          {/* Connector between Layer 1 and Layer 2 */}
          <div className={styles.connectorRow} aria-hidden="true" />

          {/* Layer 2: MOSIP Core */}
          <div>
            <p className={styles.layerCaption} aria-hidden="true">
              Layer 2 — MOSIP Core
            </p>
            <div
              className={`${styles.rowGrid} ${styles.hasPins}`}
              role="list"
              aria-label="MOSIP core layer cards"
            >
              {/* ID Issuance */}
              <article
                className={`${styles.card} ${styles.tintNavy}`}
                role="listitem"
                aria-labelledby="l2-issuance-title"
              >
                <div className={styles.iconRow} aria-hidden="true">
                  <IconSquare letter="ID" />
                </div>
                <h3 id="l2-issuance-title" className={styles.cardTitle}>ID Issuance</h3>
                <p className={styles.cardBodyLine}>Generate and issue identities anchored to MOSIP registries.</p>
              </article>

              {/* Authentication */}
              <article
                className={`${styles.card} ${styles.tintNavy}`}
                role="listitem"
                aria-labelledby="l2-auth-title"
              >
                <div className={styles.iconRow} aria-hidden="true">
                  <IconSquare letter="A" />
                </div>
                <h3 id="l2-auth-title" className={styles.cardTitle}>Authentication</h3>
                <p className={styles.cardBodyLine}>Standards-aligned auth flows for holders and verifiers.</p>
              </article>

              {/* Credential Management */}
              <article
                className={`${styles.card} ${styles.tintNavy}`}
                role="listitem"
                aria-labelledby="l2-cred-title"
              >
                <div className={styles.iconRow} aria-hidden="true">
                  <IconSquare letter="VC" />
                </div>
                <h3 id="l2-cred-title" className={styles.cardTitle}>Credential Management</h3>
                <p className={styles.cardBodyLine}>Issue, revoke, and lifecycle-manage verifiable credentials.</p>
              </article>
            </div>
          </div>

          {/* Connector between Layer 2 and Layer 3 */}
          <div className={styles.connectorRow} aria-hidden="true" />

          {/* Layer 3: Blockchain Integration */}
          <div>
            <p className={styles.layerCaption} aria-hidden="true">
              Layer 3 — Blockchain Integration
            </p>
            <div
              className={`${styles.rowGrid}`}
              role="list"
              aria-label="Blockchain integration layer cards"
            >
              {/* Klefki SDK */}
              <article
                className={`${styles.card} ${styles.tintPurple}`}
                role="listitem"
                aria-labelledby="l3-klefki-title"
              >
                <div className={styles.iconRow} aria-hidden="true">
                  <IconDiamond letter="K" />
                </div>
                <h3 id="l3-klefki-title" className={styles.cardTitle}>Klefki SDK</h3>
                <p className={styles.cardBodyLine}>SDK for DID creation, VC issuance, and ZKP verification.</p>
              </article>

              {/* Blockchain Network */}
              <article
                className={`${styles.card} ${styles.tintPurple}`}
                role="listitem"
                aria-labelledby="l3-chain-title"
              >
                <div className={styles.iconRow} aria-hidden="true">
                  <IconDiamond letter="B" />
                </div>
                <h3 id="l3-chain-title" className={styles.cardTitle}>Blockchain Network</h3>
                <p className={styles.cardBodyLine}>Decentralized ledger anchoring DIDs, registries, and revocation.</p>
              </article>

              {/* Decentralized ID */}
              <article
                className={`${styles.card} ${styles.tintPurple}`}
                role="listitem"
                aria-labelledby="l3-did-title"
              >
                <div className={styles.iconRow} aria-hidden="true">
                  <IconDiamond letter="D" />
                </div>
                <h3 id="l3-did-title" className={styles.cardTitle}>Decentralized ID</h3>
                <p className={styles.cardBodyLine}>Standards-based DIDs enabling portable, self-sovereign identity.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Minimal legend at bottom */}
        <footer className={styles.legend} aria-label="Legend for acronyms">
          <div className={styles.legendItem}>
            <span className={styles.legendKey}>DID</span>
            <span className={styles.legendText}>Decentralized Identifier</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendKey}>SSI</span>
            <span className={styles.legendText}>Self-Sovereign Identity</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendKey}>ZKP</span>
            <span className={styles.legendText}>Zero-Knowledge Proof</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

/* 28px minimalist icon placeholders using simple shapes/initials. */
// PUBLIC_INTERFACE
function IconCircle({ letter = "" }) {
  /** Solid circle with initial, used for Layer 1 placeholders */
  return (
    <span className={styles.iconBadge} aria-hidden="true">
      <svg className={styles.icon} viewBox="0 0 24 24" role="img" aria-label="" focusable="false">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
      </svg>
      <span className={styles.iconLetter}>{letter}</span>
    </span>
  );
}

// PUBLIC_INTERFACE
function IconSquare({ letter = "" }) {
  /** Rounded square with initial, used for MOSIP Core placeholders */
  return (
    <span className={styles.iconBadge} aria-hidden="true">
      <svg className={styles.icon} viewBox="0 0 24 24" role="img" aria-label="" focusable="false">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" opacity="0.2" />
      </svg>
      <span className={styles.iconLetter}>{letter}</span>
    </span>
  );
}

// PUBLIC_INTERFACE
function IconDiamond({ letter = "" }) {
  /** Diamond with gradient hint, used for Blockchain layer placeholders */
  return (
    <span className={styles.iconBadge} aria-hidden="true">
      <svg className={styles.icon} viewBox="0 0 24 24" role="img" aria-label="" focusable="false">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.10" />
          </linearGradient>
        </defs>
        <path d="M12 2l10 10-10 10L2 12 12 2z" fill="url(#g)" />
      </svg>
      <span className={styles.iconLetter}>{letter}</span>
    </span>
  );
}
