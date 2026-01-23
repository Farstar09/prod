export default function News() {
  return (
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
  );
}
