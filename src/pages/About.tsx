export default function About() {
  return (
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

      {/* Leadership Section */}
      <div className="leadership-section">
        <h3 className="leadership-title">Leadership</h3>
        <div className="leadership-grid">
          <div className="leader-card">
            <div className="leader-photo-container">
              <div className="leader-photo-placeholder">
                <span className="leader-initials">L1</span>
              </div>
            </div>
            <div className="leader-info">
              <h4 className="leader-name">Leader Name</h4>
              <p className="leader-role">Chief Executive Officer</p>
              <p className="leader-description">
                Driving the vision and strategy of ROSOIDEAE with a passion for excellence in competitive gaming.
              </p>
            </div>
          </div>

          <div className="leader-card">
            <div className="leader-photo-container">
              <div className="leader-photo-placeholder">
                <span className="leader-initials">L2</span>
              </div>
            </div>
            <div className="leader-info">
              <h4 className="leader-name">Leader Name</h4>
              <p className="leader-role">Chief Operating Officer</p>
              <p className="leader-description">
                Overseeing operations and ensuring seamless execution across all organizational initiatives.
              </p>
            </div>
          </div>

          <div className="leader-card">
            <div className="leader-photo-container">
              <div className="leader-photo-placeholder">
                <span className="leader-initials">L3</span>
              </div>
            </div>
            <div className="leader-info">
              <h4 className="leader-name">Leader Name</h4>
              <p className="leader-role">Head of Esports</p>
              <p className="leader-description">
                Leading our competitive teams and developing strategies for championship success.
              </p>
            </div>
          </div>

          <div className="leader-card">
            <div className="leader-photo-container">
              <div className="leader-photo-placeholder">
                <span className="leader-initials">L4</span>
              </div>
            </div>
            <div className="leader-info">
              <h4 className="leader-name">Leader Name</h4>
              <p className="leader-role">Creative Director</p>
              <p className="leader-description">
                Crafting the brand identity and visual direction that defines ROSOIDEAE's premium presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
