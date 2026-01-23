import "./App.css";
import Navigation from "./Navigation";

export default function App() {
  return (
    <div className="app-container">
      <Navigation />

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
          <a 
            href="https://discord.gg/roso" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-cta-secondary" 
            aria-label="Apply for tryouts"
          >
            Tryouts
          </a>
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
              <a href="#news" className="news-link">Read more →</a>
            </article>
            <article className="news-preview-card">
              <span className="news-date">Jan 15, 2026</span>
              <h3>Partnership with Leading Gaming Brands</h3>
              <p>ROSOIDEAE expands partnerships to bring new opportunities to our members.</p>
              <a href="#news" className="news-link">Read more →</a>
            </article>
            <article className="news-preview-card">
              <span className="news-date">Jan 10, 2026</span>
              <h3>Tournament Victory Highlights</h3>
              <p>Celebrating recent wins and achievements across multiple titles.</p>
              <a href="#news" className="news-link">Read more →</a>
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
            <a href="#schedule" className="match-link">View Full Schedule →</a>
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

      {/* About Section */}
      <section className="about-section" id="about">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="about-block">
            <h3 className="about-subtitle">Our Mission</h3>
            <p className="about-text">
              ROSOIDEAE is a premium esports and creative organization dedicated to cultivating exceptional talent. 
              We provide structured growth pathways for players, creators, and staff through professionalism, mentorship, and opportunity.
            </p>
          </div>
          <div className="about-block">
            <h3 className="about-subtitle">Our History</h3>
            <p className="about-text">
              Founded in 2024, ROSOIDEAE emerged from a vision to create a nurturing environment where gaming talent 
              could flourish. We've grown from a small community to a recognized organization competing at the highest levels.
            </p>
          </div>
          <div className="about-block">
            <h3 className="about-subtitle">Achievements</h3>
            <p className="about-text">
              Multiple tournament victories, strategic partnerships with leading gaming brands, and a thriving community 
              of talented individuals. Our teams have consistently performed at regional and international competitions.
            </p>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="teams-section" id="teams">
        <h2 className="section-title">Teams</h2>
        <p className="section-text">
          Our competitive rosters represent excellence across multiple gaming titles. 
          Each team is built on dedication, skill, and a commitment to victory.
        </p>
        
        <div className="teams-container">
          {/* Valorant Team */}
          <div className="game-section">
            <h3 className="game-title">Valorant</h3>
            <div className="roster-grid">
              <div className="roster-card">
                <div className="player-role">Duelist</div>
                <div className="player-name">Player 1</div>
                <div className="player-socials">
                  <a href="https://x.com/rosoideaegg" target="_blank" rel="noopener noreferrer" aria-label="Player 1 X">X</a>
                  <a href="https://discord.gg/roso" target="_blank" rel="noopener noreferrer" aria-label="Player 1 Discord">Discord</a>
                </div>
              </div>
              <div className="roster-card">
                <div className="player-role">Controller</div>
                <div className="player-name">Player 2</div>
                <div className="player-socials">
                  <a href="https://x.com/rosoideaegg" target="_blank" rel="noopener noreferrer" aria-label="Player 2 X">X</a>
                  <a href="https://discord.gg/roso" target="_blank" rel="noopener noreferrer" aria-label="Player 2 Discord">Discord</a>
                </div>
              </div>
              <div className="roster-card">
                <div className="player-role">Sentinel</div>
                <div className="player-name">Player 3</div>
                <div className="player-socials">
                  <a href="https://x.com/rosoideaegg" target="_blank" rel="noopener noreferrer" aria-label="Player 3 X">X</a>
                  <a href="https://discord.gg/roso" target="_blank" rel="noopener noreferrer" aria-label="Player 3 Discord">Discord</a>
                </div>
              </div>
              <div className="roster-card">
                <div className="player-role">Initiator</div>
                <div className="player-name">Player 4</div>
                <div className="player-socials">
                  <a href="https://x.com/rosoideaegg" target="_blank" rel="noopener noreferrer" aria-label="Player 4 X">X</a>
                  <a href="https://discord.gg/roso" target="_blank" rel="noopener noreferrer" aria-label="Player 4 Discord">Discord</a>
                </div>
              </div>
              <div className="roster-card">
                <div className="player-role">Flex</div>
                <div className="player-name">Player 5</div>
                <div className="player-socials">
                  <a href="https://x.com/rosoideaegg" target="_blank" rel="noopener noreferrer" aria-label="Player 5 X">X</a>
                  <a href="https://discord.gg/roso" target="_blank" rel="noopener noreferrer" aria-label="Player 5 Discord">Discord</a>
                </div>
              </div>
            </div>
          </div>

          {/* League of Legends Team */}
          <div className="game-section">
            <h3 className="game-title">League of Legends</h3>
            <div className="roster-grid">
              <div className="roster-card">
                <div className="player-role">Top</div>
                <div className="player-name">Player A</div>
                <div className="player-socials">
                  <a href="https://x.com/rosoideaegg" target="_blank" rel="noopener noreferrer" aria-label="Player A X">X</a>
                  <a href="https://discord.gg/roso" target="_blank" rel="noopener noreferrer" aria-label="Player A Discord">Discord</a>
                </div>
              </div>
              <div className="roster-card">
                <div className="player-role">Jungle</div>
                <div className="player-name">Player B</div>
                <div className="player-socials">
                  <a href="https://x.com/rosoideaegg" target="_blank" rel="noopener noreferrer" aria-label="Player B X">X</a>
                  <a href="https://discord.gg/roso" target="_blank" rel="noopener noreferrer" aria-label="Player B Discord">Discord</a>
                </div>
              </div>
              <div className="roster-card">
                <div className="player-role">Mid</div>
                <div className="player-name">Player C</div>
                <div className="player-socials">
                  <a href="https://x.com/rosoideaegg" target="_blank" rel="noopener noreferrer" aria-label="Player C X">X</a>
                  <a href="https://discord.gg/roso" target="_blank" rel="noopener noreferrer" aria-label="Player C Discord">Discord</a>
                </div>
              </div>
              <div className="roster-card">
                <div className="player-role">ADC</div>
                <div className="player-name">Player D</div>
                <div className="player-socials">
                  <a href="https://x.com/rosoideaegg" target="_blank" rel="noopener noreferrer" aria-label="Player D X">X</a>
                  <a href="https://discord.gg/roso" target="_blank" rel="noopener noreferrer" aria-label="Player D Discord">Discord</a>
                </div>
              </div>
              <div className="roster-card">
                <div className="player-role">Support</div>
                <div className="player-name">Player E</div>
                <div className="player-socials">
                  <a href="https://x.com/rosoideaegg" target="_blank" rel="noopener noreferrer" aria-label="Player E X">X</a>
                  <a href="https://discord.gg/roso" target="_blank" rel="noopener noreferrer" aria-label="Player E Discord">Discord</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section" id="news">
        <h2 className="section-title">News</h2>
        <div className="news-filters">
          <button className="news-tag active">All</button>
          <button className="news-tag">Announcements</button>
          <button className="news-tag">Tournaments</button>
          <button className="news-tag">Roster</button>
          <button className="news-tag">Partnerships</button>
        </div>
        <div className="news-grid">
          <article className="news-card">
            <span className="news-card-date">Jan 20, 2026</span>
            <div className="news-card-tags">
              <span className="news-card-tag">Roster</span>
            </div>
            <h3 className="news-card-title">Season 2026 Roster Announcements</h3>
            <p className="news-card-excerpt">
              We're thrilled to reveal our competitive rosters for the upcoming season. 
              Meet the talented players who will represent ROSOIDEAE.
            </p>
            <a href="#news" className="news-card-link">Read more →</a>
          </article>
          <article className="news-card">
            <span className="news-card-date">Jan 15, 2026</span>
            <div className="news-card-tags">
              <span className="news-card-tag">Partnerships</span>
            </div>
            <h3 className="news-card-title">Partnership with Leading Gaming Brands</h3>
            <p className="news-card-excerpt">
              ROSOIDEAE expands strategic partnerships to bring new opportunities and resources to our members.
            </p>
            <a href="#news" className="news-card-link">Read more →</a>
          </article>
          <article className="news-card">
            <span className="news-card-date">Jan 10, 2026</span>
            <div className="news-card-tags">
              <span className="news-card-tag">Tournaments</span>
            </div>
            <h3 className="news-card-title">Tournament Victory Highlights</h3>
            <p className="news-card-excerpt">
              Celebrating recent wins and outstanding achievements across multiple competitive titles.
            </p>
            <a href="#news" className="news-card-link">Read more →</a>
          </article>
          <article className="news-card">
            <span className="news-card-date">Jan 5, 2026</span>
            <div className="news-card-tags">
              <span className="news-card-tag">Announcements</span>
            </div>
            <h3 className="news-card-title">New Content Creator Program Launch</h3>
            <p className="news-card-excerpt">
              Introducing opportunities for content creators to join the ROSOIDEAE creative division.
            </p>
            <a href="#news" className="news-card-link">Read more →</a>
          </article>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="schedule-section" id="schedule">
        <h2 className="section-title">Schedule</h2>
        <div className="schedule-filters">
          <button className="schedule-filter active">Upcoming</button>
          <button className="schedule-filter">Past Results</button>
        </div>
        <div className="schedule-container">
          <div className="schedule-matches">
            <div className="schedule-match">
              <div className="schedule-match-header">
                <span className="schedule-tournament">Regional Championship - Valorant</span>
                <span className="schedule-date">Jan 28, 2026 • 18:00 UTC</span>
              </div>
              <div className="schedule-match-teams">
                <span className="schedule-team">ROSOIDEAE</span>
                <span className="schedule-vs">VS</span>
                <span className="schedule-team">TBD</span>
              </div>
            </div>
            <div className="schedule-match">
              <div className="schedule-match-header">
                <span className="schedule-tournament">League Championship - LoL</span>
                <span className="schedule-date">Feb 2, 2026 • 20:00 UTC</span>
              </div>
              <div className="schedule-match-teams">
                <span className="schedule-team">ROSOIDEAE</span>
                <span className="schedule-vs">VS</span>
                <span className="schedule-team">TBD</span>
              </div>
            </div>
            <div className="schedule-match">
              <div className="schedule-match-header">
                <span className="schedule-tournament">Qualifier Finals - Valorant</span>
                <span className="schedule-date">Feb 8, 2026 • 17:00 UTC</span>
              </div>
              <div className="schedule-match-teams">
                <span className="schedule-team">ROSOIDEAE</span>
                <span className="schedule-vs">VS</span>
                <span className="schedule-team">TBD</span>
              </div>
            </div>
          </div>
        </div>
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

      {/* Partners Section */}
      <section className="partners-section" id="partners">
        <h2 className="section-title">Partners</h2>
        <p className="section-text">
          We collaborate with leading brands and organizations to provide the best opportunities for our community.
        </p>
        <div className="partners-grid">
          <div className="partner-card">
            <div className="partner-logo-placeholder">Partner Logo</div>
            <h3 className="partner-name">Gaming Hardware Partner</h3>
            <p className="partner-description">
              Providing top-tier gaming peripherals and hardware to our competitive teams.
            </p>
            <a href="https://discord.gg/roso" className="partner-link" target="_blank" rel="noopener noreferrer">
              Learn more →
            </a>
          </div>
          <div className="partner-card">
            <div className="partner-logo-placeholder">Partner Logo</div>
            <h3 className="partner-name">Energy Drink Sponsor</h3>
            <p className="partner-description">
              Fueling our teams with premium energy drinks for peak performance.
            </p>
            <a href="https://discord.gg/roso" className="partner-link" target="_blank" rel="noopener noreferrer">
              Learn more →
            </a>
          </div>
          <div className="partner-card">
            <div className="partner-logo-placeholder">Partner Logo</div>
            <h3 className="partner-name">Apparel Partner</h3>
            <p className="partner-description">
              Designing and producing official ROSOIDEAE team merchandise and apparel.
            </p>
            <a href="https://discord.gg/roso" className="partner-link" target="_blank" rel="noopener noreferrer">
              Learn more →
            </a>
          </div>
          <div className="partner-card">
            <div className="partner-logo-placeholder">Partner Logo</div>
            <h3 className="partner-name">Tournament Organizer</h3>
            <p className="partner-description">
              Collaborating on exclusive tournament opportunities and competitive events.
            </p>
            <a href="https://discord.gg/roso" className="partner-link" target="_blank" rel="noopener noreferrer">
              Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2 className="section-title">Contact</h2>
        <div className="contact-container">
          <div className="contact-form-wrapper">
            <h3 className="contact-subtitle">Get in Touch</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your name"
                  aria-label="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="your.email@example.com"
                  aria-label="Your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  placeholder="Your message"
                  aria-label="Your message"
                ></textarea>
              </div>
              <button type="submit" className="contact-submit">Send Message</button>
            </form>
          </div>
          <div className="contact-info-wrapper">
            <h3 className="contact-subtitle">Connect With Us</h3>
            <div className="contact-socials">
              <a 
                href="https://discord.gg/roso" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-social-card"
                aria-label="Join our Discord server"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <div>
                  <div className="contact-social-title">Discord</div>
                  <div className="contact-social-desc">Join our community</div>
                </div>
              </a>
              <a 
                href="https://x.com/rosoideaegg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-social-card"
                aria-label="Follow us on X"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <div>
                  <div className="contact-social-title">X (Twitter)</div>
                  <div className="contact-social-desc">Follow our updates</div>
                </div>
              </a>
            </div>
            <div className="discord-embed-placeholder">
              <p>Discord Server Widget</p>
              <p className="discord-placeholder-text">Join our community of passionate gamers and creators</p>
            </div>
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
