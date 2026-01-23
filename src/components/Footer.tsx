export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-brand">ROSOIDEAE</p>
        <p className="footer-motto">Where Talent Blooms</p>
        <div className="footer-social">
          <a 
            href="https://discord.gg/roso" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link" 
            aria-label="Join our Discord community"
          >
            Discord
          </a>
          <a 
            href="https://x.com/rosoideaegg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link" 
            aria-label="Follow us on X"
          >
            X
          </a>
        </div>
        <p className="footer-copyright">© 2026 ROSOIDEAE. All rights reserved.</p>
      </div>
    </footer>
  );
}
