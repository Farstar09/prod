import { useEffect, useState } from 'react';
import './IntroAnimation.css';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Start fade out after logo animation
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    // Mark as complete and remove from DOM
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  // Don't render if animation is complete
  if (isComplete) return null;

  return (
    <div className={`intro-overlay ${!isVisible ? 'fade-out' : ''}`}>
      <div className="intro-logo-wrapper">
        <img
          src="/prod/assets/logo-org.png"
          alt="ROSOIDEAE"
          className="intro-logo"
        />
      </div>
    </div>
  );
}
