* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Orbitron', sans-serif;
  color: #e0e7ff;
  background: #0a0e1f;
  overflow-x: hidden;
}

.background-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.8;
}

.cyber-glass {
  background: rgba(10, 14, 31, 0.4);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 1.5rem;
  position: relative;
  overflow: hidden;
}

.cyber-glass::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
  transition: left 0.7s;
}

.cyber-glass:hover::before {
  left: 100%;
}

.neon-btn {
  background: linear-gradient(to right, #3b82f6, #a855f7);
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.7), 0 0 30px rgba(59, 130, 246, 0.4);
  transition: all 0.3s ease;
}

.neon-btn:hover {
  box-shadow: 0 0 25px rgba(59, 130, 246, 1), 0 0 50px rgba(59, 130, 246, 0.6);
  transform: translateY(-3px);
}

.neon-glow {
  text-shadow: 0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6;
}

.neon-link {
  color: #60a5fa;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.3s;
}

.neon-link:hover {
  color: #93c5fd;
  border-bottom-color: #60a5fa;
  text-shadow: 0 0 5px #60a5fa;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo {
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 0.2em;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #60a5fa;
  cursor: pointer;
}

.hamburger {
  width: 2.5rem;
  height: 2.5rem;
}

.nav-menu {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-link {
  color: #e0e7ff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #a855f7);
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: #93c5fd;
}

/* Hero */
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(10, 14, 31, 0.3), rgba(10, 14, 31, 0.9));
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1000px;
  padding: 0 1rem;
}

.pulse {
  animation: pulse 2.5s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.03); opacity: 0.95; }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  margin-bottom: 1.5rem;
}

@media (min-width: 640px) { .hero-title { font-size: 5.5rem; } }
@media (min-width: 768px) { .hero-title { font-size: 7.5rem; } }

.hero-text {
  font-size: 1.3rem;
  color: #d1d5db;
  margin-bottom: 2.5rem;
}

@media (min-width: 640px) { .hero-text { font-size: 2rem; } }
@media (min-width: 768px) { .hero-text { font-size: 2.8rem; } }

.cta-btn {
  font-size: 1.2rem;
}

/* Sections */
.section {
  padding: 5rem 1rem;
  margin: 2rem 1rem;
}

@media (min-width: 640px) { .section { padding: 7rem 1rem; } }

.section-title {
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 2rem;
}

@media (min-width: 640px) { .section-title { font-size: 4.5rem; } }

.section-text {
  font-size: 1.2rem;
  color: #d1d5db;
  max-width: 900px;
  margin: 0 auto 2.5rem;
}

@media (min-width: 640px) { .section-text { font-size: 1.6rem; } }

.download-note {
  font-size: 1rem;
  color: #d1d5db;
}

.link {
  color: #60a5fa;
  text-decoration: none;
  border-bottom: 1px solid transparent;
}

.link:hover {
  border-bottom-color: #60a5fa;
}

/* Footer */
.footer {
  background: rgba(10, 14, 31, 0.9);
  padding: 3rem 1rem;
}

.footer-text {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.footer-link {
  font-size: 1.1rem;
}

/* Mobile */
@media (max-width: 640px) {
  .menu-toggle { display: block; }
  .nav-menu {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 80%;
    background: rgba(10, 14, 31, 0.95);
    backdrop-filter: blur(15px);
    flex-direction: column;
    padding: 4rem 2rem;
    transform: translateX(100%);
    transition: transform 0.4s ease;
  }
  .nav-menu.hidden { transform: translateX(100%); }
  .nav-menu:not(.hidden) { transform: translateX(0); }
  .nav-link { font-size: 1.8rem; margin: 2rem 0; }
  .nav-btn { padding: 1.2rem 2.5rem; font-size: 1.4rem; }
  .hero-title { font-size: 2.8rem; }
  .hero-text { font-size: 1.1rem; }
  .section-title { font-size: 2.2rem; }
  .section-text { font-size: 1.1rem; }
  .footer-links { flex-direction: column; gap: 1.5rem; }
}
