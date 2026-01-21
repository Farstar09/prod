import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import './TeamsGrid.css';

interface Team {
  id: string;
  name: string;
  game: string;
  description: string;
  color: string;
}

const teams: Team[] = [
  {
    id: 'valorant',
    name: 'ROSO Valorant',
    game: 'Valorant',
    description: 'Competing in premier Valorant tournaments with strategic excellence.',
    color: 'var(--color-primary)',
  },
  {
    id: 'csgo',
    name: 'ROSO CS2',
    game: 'Counter-Strike 2',
    description: 'Elite tactical gameplay in the most competitive FPS arena.',
    color: 'var(--color-accent-orange)',
  },
  {
    id: 'league',
    name: 'ROSO League',
    game: 'League of Legends',
    description: 'Dominating the Rift with precision and teamwork.',
    color: 'var(--color-highlight-green)',
  },
  {
    id: 'apex',
    name: 'ROSO Apex',
    game: 'Apex Legends',
    description: 'Fast-paced battle royale action at the highest level.',
    color: 'var(--color-primary-light)',
  },
];

export default function TeamsGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null);
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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="teams" ref={sectionRef} className="teams-section">
      <div className="teams-container">
        <motion.div
          className="teams-header"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="teams-title">Our Teams</h2>
          <p className="teams-subtitle">
            Representing ROSOIDEAE across multiple esports
          </p>
        </motion.div>

        <motion.div
          className="teams-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {teams.map((team) => (
            <motion.div
              key={team.id}
              className="team-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                rotateY: 5,
                rotateX: 5,
              }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setHoveredTeam(team.id)}
              onHoverEnd={() => setHoveredTeam(null)}
              style={{
                perspective: '1000px',
              }}
            >
              <div className="team-card-inner">
                <div
                  className="team-accent-bar"
                  style={{ background: team.color }}
                  aria-hidden="true"
                ></div>
                <div className="team-content">
                  <h3 className="team-name">{team.name}</h3>
                  <p className="team-game">{team.game}</p>
                  <p className="team-description">{team.description}</p>
                </div>
                <motion.div
                  className="team-glow"
                  style={{ background: team.color }}
                  animate={{
                    opacity: hoveredTeam === team.id ? 0.2 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
