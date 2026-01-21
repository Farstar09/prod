import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import './NewsGrid.css';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'ROSO Valorant Secures Championship Victory',
    date: 'January 15, 2026',
    category: 'Tournament',
    excerpt: 'Our Valorant roster dominated the regional championship, showcasing exceptional teamwork and strategy.',
  },
  {
    id: '2',
    title: 'Welcoming Three New Content Creators',
    date: 'January 10, 2026',
    category: 'Announcements',
    excerpt: "We're excited to announce the addition of three talented creators to the ROSOIDEAE family.",
  },
  {
    id: '3',
    title: 'CS2 Team Advances to International Playoffs',
    date: 'January 5, 2026',
    category: 'Tournament',
    excerpt: 'After a stellar group stage performance, our CS2 roster has secured their spot in the international playoffs.',
  },
  {
    id: '4',
    title: 'Behind the Scenes: Training Facility Tour',
    date: 'December 28, 2025',
    category: 'Media',
    excerpt: 'Get an exclusive look at our state-of-the-art training facility and player bootcamp.',
  },
];

export default function NewsGrid() {
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
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="news" ref={sectionRef} className="news-section">
      <div className="news-container">
        <motion.div
          className="news-header"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="news-title">Latest News</h2>
          <p className="news-subtitle">
            Stay updated with our latest achievements and announcements
          </p>
        </motion.div>

        <motion.div
          className="news-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {newsItems.map((item) => (
            <motion.article
              key={item.id}
              className="news-card"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 12px 30px rgba(220, 20, 60, 0.15)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="news-card-header">
                <span className="news-category">{item.category}</span>
                <time className="news-date" dateTime={item.date}>
                  {item.date}
                </time>
              </div>
              <h3 className="news-item-title">{item.title}</h3>
              <p className="news-excerpt">{item.excerpt}</p>
              <motion.button
                className="news-read-more"
                whileHover={{ x: 5 }}
                aria-label={`Read more about ${item.title}`}
              >
                Read More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 12l4-4-4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
