export default function Schedule() {
  return (
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
  );
}
