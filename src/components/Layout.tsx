import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from '../Navigation';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-container">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
