import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-logo-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.img
            src="/prod/assets/rosologo.svg"
            alt="ROSO Logo"
            className="hero-logo"
            animate={{
              filter: [
                'drop-shadow(0 0 20px rgba(220, 20, 60, 0.3))',
                'drop-shadow(0 0 30px rgba(220, 20, 60, 0.5))',
                'drop-shadow(0 0 20px rgba(220, 20, 60, 0.3))',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          ROSOIDEAE
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          Where Talent Blooms
        </motion.p>

        <motion.div
          className="hero-cta-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
        >
          <motion.button
            className="cta-primary"
            onClick={scrollToAbout}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(220, 20, 60, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Discover ROSOIDEAE"
          >
            Discover
          </motion.button>
          <motion.button
            className="cta-secondary"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            whileHover={{ scale: 1.05, borderColor: 'var(--color-accent-orange)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Get in touch"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5v14m0 0l-7-7m7 7l7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-bg-gradient" aria-hidden="true"></div>
    </section>
  );
}
