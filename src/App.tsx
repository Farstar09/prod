import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="wordmark">ROSOIDEAE</h1>
        <p className="tagline">Where Talent Blooms</p>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2 className="section-title">About</h2>
        <p className="about-text">
          ROSOIDEAE is a premium esports and creative organization dedicated to cultivating exceptional talent. 
          We provide structured growth pathways for players, creators, and staff through professionalism, mentorship, and opportunity.
        </p>
      </section>

      {/* Divisions Section */}
      <section className="divisions-section">
        <h2 className="section-title">Divisions</h2>
        <div className="divisions-grid">
          <div className="division-card">
            <h3>Esports</h3>
            <p>Competitive gaming excellence across multiple titles</p>
          </div>
          <div className="division-card">
            <h3>Creative</h3>
            <p>Content creators, streamers, and digital artists</p>
          </div>
          <div className="division-card">
            <h3>Staff</h3>
            <p>Management, coaching, and operational support</p>
          </div>
          <div className="division-card">
            <h3>Competitive Teams</h3>
            <p>Professional rosters competing at the highest level</p>
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="recruitment-section">
        <h2 className="section-title">Join Us</h2>
        <p className="recruitment-text">
          We're always seeking exceptional talent to join our growing organization.
        </p>
        <button className="cta-button" aria-label="Apply to join ROSOIDEAE">Apply Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-brand">ROSOIDEAE</p>
          <p className="footer-motto">Where Talent Blooms</p>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Follow us on Twitter">Twitter</a>
            <a href="#" className="social-link" aria-label="Join our Discord community">Discord</a>
            <a href="#" className="social-link" aria-label="Follow us on Instagram">Instagram</a>
          </div>
          <p className="footer-copyright">© 2026 ROSOIDEAE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
