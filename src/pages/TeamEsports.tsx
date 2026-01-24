import { Link } from 'react-router-dom';

export default function TeamEsports() {
  return (
    <section className="team-detail-section">
      <div className="team-breadcrumb">
        <Link to="/teams" className="breadcrumb-link">Teams</Link>
        <span className="breadcrumb-separator">/</span>
        <span>ROSO Esports</span>
      </div>

      <h2 className="section-title">ROSO Esports</h2>
      <p className="team-subtitle">Title Roster</p>

      {/* Team Logo Section */}
      <div className="team-logo-section">
        <div className="team-logo-container">
          <div className="team-logo-placeholder">
            <span className="logo-text">Team Logo</span>
          </div>
        </div>
      </div>

      <div className="roster-section">
        <h3 className="roster-section-title">Players</h3>
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

      <div className="roster-section">
        <h3 className="roster-section-title">Staff</h3>
        <div className="staff-grid">
          <div className="staff-card">
            <div className="staff-role">Manager</div>
            <div className="staff-name">Staff Member 1</div>
            <div className="player-socials">
              <a href="https://x.com/rosoideaegg" target="_blank" rel="noopener noreferrer" aria-label="Manager X">X</a>
              <a href="https://discord.gg/roso" target="_blank" rel="noopener noreferrer" aria-label="Manager Discord">Discord</a>
            </div>
          </div>
          <div className="staff-card">
            <div className="staff-role">Head Coach</div>
            <div className="staff-name">Staff Member 2</div>
            <div className="player-socials">
              <a href="https://x.com/rosoideaegg" target="_blank" rel="noopener noreferrer" aria-label="Head Coach X">X</a>
              <a href="https://discord.gg/roso" target="_blank" rel="noopener noreferrer" aria-label="Head Coach Discord">Discord</a>
            </div>
          </div>
          <div className="staff-card">
            <div className="staff-role">Assist. Coach/Analyst</div>
            <div className="staff-name">Staff Member 3</div>
            <div className="player-socials">
              <a href="https://x.com/rosoideaegg" target="_blank" rel="noopener noreferrer" aria-label="Assistant Coach X">X</a>
              <a href="https://discord.gg/roso" target="_blank" rel="noopener noreferrer" aria-label="Assistant Coach Discord">Discord</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
