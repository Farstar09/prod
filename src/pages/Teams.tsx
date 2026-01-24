import { Link } from 'react-router-dom';

export default function Teams() {
  return (
    <section className="teams-section" id="teams">
      <h2 className="section-title">Teams</h2>
      <p className="section-text">
        Our competitive rosters represent excellence across multiple gaming titles. 
        Each team is built on dedication, skill, and a commitment to victory.
      </p>
      
      <div className="teams-grid">
        <Link to="/teams/esports" className="team-panel">
          <div className="team-panel-logo">
            <div className="team-panel-logo-placeholder">
              <span className="logo-text">ROSO</span>
            </div>
          </div>
          <div className="team-panel-content">
            <h3 className="team-panel-title">ROSO Esports</h3>
            <p className="team-panel-subtitle">Title Roster</p>
            <p className="team-panel-description">Our premier competitive Valorant roster</p>
          </div>
        </Link>

        <Link to="/teams/gc" className="team-panel">
          <div className="team-panel-logo">
            <div className="team-panel-logo-placeholder">
              <span className="logo-text">ROSO GC</span>
            </div>
          </div>
          <div className="team-panel-content">
            <h3 className="team-panel-title">ROSO GC</h3>
            <p className="team-panel-subtitle">GC Title Roster</p>
            <p className="team-panel-description">Our Game Changers championship team</p>
          </div>
        </Link>

        <Link to="/teams/academy" className="team-panel">
          <div className="team-panel-logo">
            <div className="team-panel-logo-placeholder">
              <span className="logo-text">ACADEMY</span>
            </div>
          </div>
          <div className="team-panel-content">
            <h3 className="team-panel-title">ROSO Esports Academy</h3>
            <p className="team-panel-subtitle">TBD</p>
            <p className="team-panel-description">Developing the next generation of talent</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
