import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import './Features.css';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    id: 'teams',
    title: 'Elite Teams',
    description: 'Professional rosters competing at the highest level across multiple esports titles.',
    icon: '🏆',
  },
  {
    id: 'news',
    title: 'Latest News',
    description: 'Stay updated with team announcements, tournament results, and organization updates.',
    icon: '📰',
  },
  {
    id: 'media',
    title: 'Media Hub',
    description: 'Exclusive content, highlights, interviews, and behind-the-scenes footage.',
    icon: '🎬',
  },
  {
    id: 'about',
    title: 'Our Mission',
    description: 'Cultivating exceptional talent through professionalism, mentorship, and opportunity.',
    icon: '🌱',
  },
];

export default function Features() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={sectionRef} className="features">
      <div className="features-container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="features-title">What We Offer</h2>
          <p className="features-subtitle">
            Discover the pillars of our organization
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="feature-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(220, 20, 60, 0.2)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="feature-icon-container">
                <span className="feature-icon" aria-hidden="true">
                  {feature.icon}
                </span>
                <div className="feature-icon-glow" aria-hidden="true"></div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-border" aria-hidden="true"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
