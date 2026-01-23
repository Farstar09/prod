import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-logo-container">
          <img
            src="/prod/assets/roso-logo.svg"
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
          <Link 
            to="/teams"
            className="hero-cta-secondary" 
            aria-label="View Teams"
          >
            View Teams
          </Link>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="news-preview-section">
        <div className="section-container">
          <h2 className="preview-title">Latest News</h2>
          <div className="news-preview-grid">
            <article className="news-preview-card">
              <span className="news-date">Jan 20, 2026</span>
              <h3>Season 2026 Roster Announcements</h3>
              <p>We're excited to reveal our competitive rosters for the upcoming season.</p>
              <Link to="/news" className="news-link">Read more →</Link>
            </article>
            <article className="news-preview-card">
              <span className="news-date">Jan 15, 2026</span>
              <h3>Partnership with Leading Gaming Brands</h3>
              <p>ROSOIDEAE expands partnerships to bring new opportunities to our members.</p>
              <Link to="/news" className="news-link">Read more →</Link>
            </article>
            <article className="news-preview-card">
              <span className="news-date">Jan 10, 2026</span>
              <h3>Tournament Victory Highlights</h3>
              <p>Celebrating recent wins and achievements across multiple titles.</p>
              <Link to="/news" className="news-link">Read more →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* Upcoming Match Preview */}
      <section className="match-preview-section">
        <div className="section-container">
          <h2 className="preview-title">Upcoming Matches</h2>
          <div className="match-preview-card">
            <div className="match-header">
              <span className="match-tournament">Regional Championship</span>
              <span className="match-date">Jan 28, 2026 • 18:00 UTC</span>
            </div>
            <div className="match-teams">
              <div className="match-team">
                <span className="team-name">ROSOIDEAE</span>
              </div>
              <span className="match-vs">VS</span>
              <div className="match-team">
                <span className="team-name">Opponents TBD</span>
              </div>
            </div>
            <Link to="/schedule" className="match-link">View Full Schedule →</Link>
          </div>
        </div>
      </section>

      {/* Sponsors Strip */}
      <section className="sponsors-strip">
        <div className="section-container">
          <p className="sponsors-label">Supported By</p>
          <div className="sponsors-logos">
            <div className="sponsor-placeholder">Partner 1</div>
            <div className="sponsor-placeholder">Partner 2</div>
            <div className="sponsor-placeholder">Partner 3</div>
            <div className="sponsor-placeholder">Partner 4</div>
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="recruitment-section">
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
    </>
  );
}
