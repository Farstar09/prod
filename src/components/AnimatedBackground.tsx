import './AnimatedBackground.css';

export default function AnimatedBackground() {
  return (
    <div className="animated-background">
      {/* Moving lines/particles */}
      <div className="bg-line bg-line-1"></div>
      <div className="bg-line bg-line-2"></div>
      <div className="bg-line bg-line-3"></div>
      <div className="bg-line bg-line-4"></div>
      <div className="bg-line bg-line-5"></div>
      <div className="bg-line bg-line-6"></div>
      
      {/* Ambient red glow that starts midway and extends upward */}
      <div className="ambient-glow"></div>
    </div>
  );
}
