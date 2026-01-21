import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-logo-container">
          <img
            src="/prod/roso-logo.svg"
            alt="ROSOIDEAE Logo"
            className="hero-logo"
          />
        </div>
        <h1 className="wordmark">ROSOIDEAE</h1>
        <p className="tagline">Where Talent Blooms</p>
        <p className="hero-supporting">Cultivating excellence in esports and creative endeavors</p>
        <div className="hero-ctas">
          <a 
            href="https://discord.gg/roso" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-cta-primary" 
            aria-label="Join ROSOIDEAE Discord"
          >
            Join Discord
          </a>
          <button
            className="hero-cta-secondary"
            onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Explore ROSOIDEAE Ecosystem"
          >
            Explore Ecosystem
          </button>
        </div>
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
      <section className="divisions-section" id="ecosystem">
        <h2 className="section-title">Ecosystem</h2>
        <div className="divisions-grid">
          <div className="division-card" data-index="01">
            <h3>Esports</h3>
            <p>Competitive gaming excellence across multiple titles</p>
          </div>
          <div className="division-card" data-index="02">
            <h3>Creative</h3>
            <p>Content creators, streamers, and digital artists</p>
          </div>
          <div className="division-card" data-index="03">
            <h3>Staff</h3>
            <p>Management, coaching, and operational support</p>
          </div>
          <div className="division-card" data-index="04">
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
