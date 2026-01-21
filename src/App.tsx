import "./App.css";
import Navigation from "./Navigation";

export default function App() {
  return (
    <div className="app-container">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-logo-container">
          <img
            src="/roso-logo.svg"
            alt="ROSOIDEAE Logo"
            className="hero-logo"
            onError={(e) => {
              // Fallback if logo fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <h1 className="wordmark">ROSOIDEAE</h1>
        <p className="tagline">Where Talent Blooms</p>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <h2 className="section-title">About</h2>
        <p className="about-text">
          ROSOIDEAE is a premium esports and creative organization dedicated to cultivating exceptional talent. 
          We provide structured growth pathways for players, creators, and staff through professionalism, mentorship, and opportunity.
        </p>
      </section>

      {/* Ecosystem Section */}
      <section className="ecosystem-section" id="ecosystem">
        <h2 className="section-title">Ecosystem</h2>
        <div className="ecosystem-grid">
          <div className="ecosystem-card">
            <h3>Esports</h3>
            <p>Competitive gaming excellence across multiple titles</p>
          </div>
          <div className="ecosystem-card">
            <h3>Creative</h3>
            <p>Content creators, streamers, and digital artists</p>
          </div>
          <div className="ecosystem-card">
            <h3>Staff</h3>
            <p>Management, coaching, and operational support</p>
          </div>
          <div className="ecosystem-card">
            <h3>Competitive Teams</h3>
            <p>Professional rosters competing at the highest level</p>
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="recruitment-section" id="join">
        <h2 className="section-title">Join Us</h2>
        <p className="recruitment-text">
          We're always seeking exceptional talent to join our growing organization.
        </p>
        <a 
          href="https://discord.gg/roso" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-button" 
          aria-label="Apply to join ROSOIDEAE"
        >
          Apply Now
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-brand">ROSOIDEAE</p>
          <p className="footer-motto">Where Talent Blooms</p>
          <div className="footer-social">
            <a 
              href="https://discord.gg/roso" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link" 
              aria-label="Join our Discord community"
            >
              Discord
            </a>
            <a 
              href="https://x.com/rosoideaegg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link" 
              aria-label="Follow us on X"
            >
              X
            </a>
          </div>
          <p className="footer-copyright">© 2026 ROSOIDEAE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
