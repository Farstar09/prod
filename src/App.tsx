import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <div className="animated-background">
        <div className="flower flower-1"></div>
        <div className="flower flower-2"></div>
        <div className="flower flower-3"></div>
        <div className="flower flower-4"></div>
        <div className="flower flower-5"></div>
      </div>
      
      <div className="content">
        <h1 className="animated-title">
          <span className="letter">R</span>
          <span className="letter">O</span>
          <span className="letter">S</span>
          <span className="letter">O</span>
          <span className="letter">I</span>
          <span className="letter">D</span>
          <span className="letter">E</span>
          <span className="letter">A</span>
          <span className="letter">E</span>
        </h1>
        <p className="tagline">Where Talent Blooms</p>
        
        <div className="info-cards">
          <div className="card">
            <div className="card-icon">🌸</div>
            <h3>Bloom</h3>
            <p>Nurture your skills and watch them flourish</p>
          </div>
          <div className="card">
            <div className="card-icon">🌺</div>
            <h3>Grow</h3>
            <p>Continuous learning and development</p>
          </div>
          <div className="card">
            <div className="card-icon">🌹</div>
            <h3>Thrive</h3>
            <p>Reach your full potential</p>
          </div>
        </div>
      </div>
    </div>
  );
}
