import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

export default function App() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh' }}>
      <Navigation />
      <Hero />
      <Experience />
      <TechStack />
      <Contact />
    </div>
  );
}
