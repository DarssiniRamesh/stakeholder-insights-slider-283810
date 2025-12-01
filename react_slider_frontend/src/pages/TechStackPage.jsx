import React from "react";
import styles from "./TechStackPage.module.css";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * TechStackPage
 * Renders a minimalist 3-layer technology stack diagram with three cards per layer,
 * subtle colored tints, 28px inline SVG icons, and thin connecting lines between layers.
 */
export default function TechStackPage() {
  return (
    <main className={styles.pageWrap} aria-label="Technology stack diagram">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Technology Stack Overview</h1>
          <Link className={styles.subtleLink} to="/" aria-label="Go to Home / Slider">
            ← Back to Slider
          </Link>
        </div>

        <section className={styles.layers} aria-label="Three layered stack">
          {/* Layer 1: Application */}
          <div>
            <p className={styles.layerCaption} aria-hidden="true">
              Application Layer
            </p>
            <div className={`${styles.rowGrid} ${styles.hasPins}`} role="list" aria-label="Application layer cards">
              {/* Web App */}
              <article className={`${styles.card} ${styles.tintBlue}`} role="listitem" aria-labelledby="card-webapp-title">
                <h3 id="card-webapp-title" className={styles.cardTitle}>Web App</h3>
                <div className={styles.iconRow} aria-label="Technologies: React.js, Node.js, MongoDB">
                  <ReactLogo />
                  <NodeLogo />
                  <MongoLogo />
                </div>
              </article>
              {/* Mobile Wallet */}
              <article className={`${styles.card} ${styles.tintBlue}`} role="listitem" aria-labelledby="card-mobile-title">
                <h3 id="card-mobile-title" className={styles.cardTitle}>Mobile Wallet</h3>
                <div className={styles.iconRow} aria-label="Technologies: React Native, Inji Wallet">
                  <ReactNativeLogo />
                  {/* Placeholder for Inji Wallet icon */}
                  <span className={styles.badge} aria-label="Inji Wallet">I</span>
                </div>
              </article>
              {/* Verification */}
              <article className={`${styles.card} ${styles.tintBlue}`} role="listitem" aria-labelledby="card-verification-title">
                <h3 id="card-verification-title" className={styles.cardTitle}>Verification</h3>
                <div className={styles.iconRow} aria-label="Technologies: React.js, Node.js, PostgreSQL">
                  <ReactLogo />
                  <NodeLogo />
                  <PostgresLogo />
                </div>
              </article>
            </div>
          </div>

          {/* Connector between Layer 1 and Layer 2 */}
          <div className={styles.connectorRow} aria-hidden="true" />

          {/* Layer 2: MOSIP Core */}
          <div>
            <p className={styles.layerCaption} aria-hidden="true">
              MOSIP Core Layer
            </p>
            <div className={`${styles.rowGrid} ${styles.hasPins}`} role="list" aria-label="MOSIP core layer cards">
              {/* ID Issuance */}
              <article className={`${styles.card} ${styles.tintNavy}`} role="listitem" aria-labelledby="card-issuance-title">
                <h3 id="card-issuance-title" className={styles.cardTitle}>ID Issuance</h3>
                <div className={styles.iconRow} aria-label="Technology: Spring Boot">
                  <SpringBootLogo />
                </div>
              </article>
              {/* Authentication */}
              <article className={`${styles.card} ${styles.tintNavy}`} role="listitem" aria-labelledby="card-auth-title">
                <h3 id="card-auth-title" className={styles.cardTitle}>Authentication</h3>
                <div className={styles.iconRow} aria-label="Technology: Spring Boot">
                  <SpringBootLogo />
                </div>
              </article>
              {/* Credential Management */}
              <article className={`${styles.card} ${styles.tintNavy}`} role="listitem" aria-labelledby="card-credmgmt-title">
                <h3 id="card-credmgmt-title" className={styles.cardTitle}>Credential Management</h3>
                <div className={styles.iconRow} aria-label="Technology: Spring Boot">
                  <SpringBootLogo />
                </div>
              </article>
            </div>
          </div>

          {/* Connector between Layer 2 and Layer 3 */}
          <div className={styles.connectorRow} aria-hidden="true" />

          {/* Layer 3: Integration */}
          <div>
            <p className={styles.layerCaption} aria-hidden="true">
              Integration Layer
            </p>
            <div className={styles.rowGrid} role="list" aria-label="Integration layer cards">
              {/* Inji SDK */}
              <article className={`${styles.card} ${styles.tintGreen}`} role="listitem" aria-labelledby="card-injisdk-title">
                <h3 id="card-injisdk-title" className={styles.cardTitle}>Inji SDK</h3>
                <div className={styles.iconRow} aria-label="Technologies: React Native, Kotlin, Swift">
                  <ReactNativeLogo />
                  <KotlinLogo />
                  <SwiftLogo />
                </div>
              </article>
              {/* e-Signet */}
              <article className={`${styles.card} ${styles.tintGreen}`} role="listitem" aria-labelledby="card-esignet-title">
                <h3 id="card-esignet-title" className={styles.cardTitle}>e-Signet</h3>
                <div className={styles.iconRow} aria-label="Technologies: OpenID, OAuth">
                  <OpenIDLogo />
                  <OAuthLogo />
                </div>
              </article>
              {/* OpenID4VCI */}
              <article className={`${styles.card} ${styles.tintGreen}`} role="listitem" aria-labelledby="card-oid4vci-title">
                <h3 id="card-oid4vci-title" className={styles.cardTitle}>OpenID4VCI</h3>
                <div className={styles.iconRow} aria-label="Standards: W3C Verifiable Credentials">
                  <W3CVCLogo />
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* Inline SVG icons (28px). Most use currentColor so they inherit context color. */

// PUBLIC_INTERFACE
function ReactLogo() {
  /** React logo simplified */
  return (
    <svg className={styles.icon} role="img" aria-label="React.js logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
    </svg>
  );
}

// PUBLIC_INTERFACE
function NodeLogo() {
  /** Node.js hexagon + 'n' glyph */
  return (
    <svg className={styles.icon} role="img" aria-label="Node.js logo" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.8l9.5 5.5v9.4L12 22.2 2.5 16.7V7.3L12 1.8z" opacity="0.25" />
      <path d="M9.8 9.2v5.6c0 1.9 2.3 2.7 4.2 1.7v-1.8c-1.1.6-2.2.2-2.2-.5V9.2H9.8z" />
    </svg>
  );
}

// PUBLIC_INTERFACE
function MongoLogo() {
  /** MongoDB leaf */
  return (
    <svg className={styles.icon} role="img" aria-label="MongoDB logo" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2s5.6 4.6 5.6 11.1S12 22 12 22 6.4 17.3 6.4 10.8 12 2 12 2z" opacity="0.25" />
      <path d="M12 4.5s3.9 3.2 3.9 8.2S12 20 12 20s-3.9-3.2-3.9-8.2S12 4.5 12 4.5z" />
    </svg>
  );
}

// PUBLIC_INTERFACE
function ReactNativeLogo() {
  /** React Native - reuse React atom */
  return <ReactLogo />;
}

// PUBLIC_INTERFACE
function PostgresLogo() {
  /** PostgreSQL elephant simplified */
  return (
    <svg className={styles.icon} role="img" aria-label="PostgreSQL logo" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3c4.4 0 8 2.6 8 5.8 0 2.7-2.6 4.9-6 5.6-.4 1.1-1.6 1.9-3 1.9-1.7 0-3.1-1.1-3.3-2.4C5.1 13.1 4 11.6 4 9.7 4 5.6 7.6 3 12 3z" opacity="0.25" />
      <path d="M10 15.9c-.2 1.1.8 2.1 2 2.1 1.2 0 2.2-.9 2-2.1-1.3.3-2.7.3-4 0z" />
    </svg>
  );
}

// PUBLIC_INTERFACE
function SpringBootLogo() {
  /** Spring Boot hex leaf */
  return (
    <svg className={styles.icon} role="img" aria-label="Spring Boot logo" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.7 6.8L12 2.6l7.3 4.2v8.4L12 19.4l-7.3-4.2V6.8z" opacity="0.25" />
      <path d="M12 7.5c1.8 0 3.2 1.6 3.2 3.5S13.8 14.5 12 14.5 8.8 12.9 8.8 11 10.2 7.5 12 7.5z" />
    </svg>
  );
}

// PUBLIC_INTERFACE
function KotlinLogo() {
  /** Kotlin K */
  return (
    <svg className={styles.icon} role="img" aria-label="Kotlin logo" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18L12 12 21 21H3z" opacity="0.25" />
      <path d="M3 3h9L3 12z" />
    </svg>
  );
}

// PUBLIC_INTERFACE
function SwiftLogo() {
  /** Swift bird simplified */
  return (
    <svg className={styles.icon} role="img" aria-label="Swift logo" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 8c1.4 3.8-.6 8-4.5 9.6-3.9 1.6-8.5-.1-11-3.8 2.5 1.5 6.3 1.4 8.5-.3-2.5-.8-5.3-2.9-7.3-5.4 2.2 1.7 4.8 3.1 7.2 3.5C12 9.6 10.6 7.5 10 6c2.2 2.9 5.3 5.9 10 2z" />
    </svg>
  );
}

// PUBLIC_INTERFACE
function OpenIDLogo() {
  /** OpenID keyhole */
  return (
    <svg className={styles.icon} role="img" aria-label="OpenID logo" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3 1.5v4.2l-3 1.5-3-1.5V3.5L12 2z" opacity="0.25" />
      <path d="M12 9c4.4 0 8 2.2 8 5s-3.6 5-8 5-8-2.2-8-5 3.6-5 8-5z" />
    </svg>
  );
}

// PUBLIC_INTERFACE
function OAuthLogo() {
  /** OAuth shield */
  return (
    <svg className={styles.icon} role="img" aria-label="OAuth logo" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l8 4v6c0 4.4-3.1 8.6-8 10-4.9-1.4-8-5.6-8-10V6l8-4z" opacity="0.25" />
      <path d="M12 7a5 5 0 110 10 5 5 0 010-10z" />
    </svg>
  );
}

// PUBLIC_INTERFACE
function W3CVCLogo() {
  /** W3C VC badge */
  return (
    <svg className={styles.icon} role="img" aria-label="W3C Verifiable Credentials badge" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="4" width="18" height="14" rx="3" opacity="0.25" />
      <path d="M7 9h7v2H7zM7 12h5v2H7z" />
      <circle cx="18" cy="17.5" r="3.5" />
      <path d="M18 16l1 1 2-2" fill="none" stroke="#fff" strokeWidth="1.6" />
    </svg>
  );
}
