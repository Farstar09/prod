import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from '../Navigation';
import Footer from './Footer';
import IntroAnimation from './IntroAnimation';
import AnimatedBackground from './AnimatedBackground';

export default function Layout() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Show intro only on first load
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
    } else {
      sessionStorage.setItem('hasSeenIntro', 'true');
    }
  }, []);

  return (
    <div className="app-container">
      {showIntro && <IntroAnimation />}
      <AnimatedBackground />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
