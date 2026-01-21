import { useState, useEffect } from 'react';
import './Navigation.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <button 
          className="nav-brand"
          onClick={scrollToTop}
          aria-label="Navigate to home"
        >
          ROSOIDEAE
        </button>
        <div className="nav-links">
          <button
            className="nav-link"
            onClick={scrollToTop}
            aria-label="Navigate to Home"
          >
            Home
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('teams')}
            aria-label="Navigate to Teams section"
          >
            Teams
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('news')}
            aria-label="Navigate to News section"
          >
            News
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('schedule')}
            aria-label="Navigate to Schedule section"
          >
            Schedule
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('about')}
            aria-label="Navigate to About section"
          >
            About
          </button>
          <a
            href="https://discord.gg/roso"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-join-button"
            aria-label="Join ROSOIDEAE Discord"
          >
            Join
          </a>
          <div className="nav-socials">
            <a
              href="https://discord.gg/roso"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Join our Discord server"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a
              href="https://x.com/rosoideaegg"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Follow us on X (formerly Twitter)"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
