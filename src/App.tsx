import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TeamsGrid from './components/TeamsGrid';
import NewsGrid from './components/NewsGrid';
import Footer from './components/Footer';
import './styles/theme.css';
import './App.css';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <section id="about" className="about-section">
          <div className="about-container">
            <h2 className="about-title">About ROSOIDEAE</h2>
            <p className="about-text">
              ROSOIDEAE is a premium esports and creative organization dedicated to cultivating exceptional talent. 
              We provide structured growth pathways for players, creators, and staff through professionalism, 
              mentorship, and opportunity. Our mission is to nurture talent and help it bloom into excellence.
            </p>
          </div>
        </section>
        <Features />
        <TeamsGrid />
        <NewsGrid />
      </main>
      <Footer />
    </div>
  );
}
