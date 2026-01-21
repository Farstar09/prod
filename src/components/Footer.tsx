import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { LOGO_PATH, SITE_NAME, SITE_TAGLINE } from '../constants';
import './Footer.css';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const socialLinks = [
    { name: 'Twitter', url: '#', icon: '𝕏' },
    { name: 'Discord', url: '#', icon: '💬' },
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'YouTube', url: '#', icon: '▶️' },
    { name: 'Twitch', url: '#', icon: '📺' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      id="media"
      ref={sectionRef}
      className="footer"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-container">
        <motion.div
          className="footer-main"
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="footer-brand-section">
            <button
              className="footer-logo-button"
              onClick={scrollToTop}
              aria-label="Return to top"
            >
              <img
                src={LOGO_PATH}
                alt="ROSO Logo"
                className="footer-logo"
              />
            </button>
            <h3 className="footer-brand">{SITE_NAME}</h3>
            <p className="footer-tagline">{SITE_TAGLINE}</p>
          </div>

          <div className="footer-links-section">
            <div className="footer-column">
              <h4 className="footer-column-title">Quick Links</h4>
              <nav className="footer-nav" aria-label="Footer navigation">
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                  About
                </button>
                <button onClick={() => document.getElementById('teams')?.scrollIntoView({ behavior: 'smooth' })}>
                  Teams
                </button>
                <button onClick={() => document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' })}>
                  News
                </button>
              </nav>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Connect</h4>
              <div className="footer-social">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    className="footer-social-link"
                    aria-label={`Follow us on ${link.name}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="social-icon" aria-hidden="true">
                      {link.icon}
                    </span>
                    <span className="social-name">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="footer-copyright">
            © {new Date().getFullYear()} ROSOIDEAE. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <span className="footer-divider">•</span>
            <a href="#" className="footer-legal-link">Terms of Service</a>
          </div>
        </motion.div>
      </div>

      <div className="footer-bg-gradient" aria-hidden="true"></div>
    </motion.footer>
  );
}
