import { useEffect, useState, useRef } from 'react';
import { ChevronDown, Cpu, GitBranch, Zap } from 'lucide-react';
import NetworkCanvas from './NetworkCanvas';

const TITLE_TEXT = 'SYSTEMS ARCHITECT & AI ENGINEER';
const NAME_TEXT = 'SRI MANIKANTA P';

function useTypewriter(text: string, speed = 60, delay = 0) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let i = 0;
    timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) { clearInterval(interval); setDone(true); }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const title = useTypewriter(TITLE_TEXT, 45, 400);
  const name = useTypewriter(NAME_TEXT, 80, title.done ? 0 : TITLE_TEXT.length * 45 + 600);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { label: 'PROJECTS', value: '06+', color: 'var(--cyan)' },
    { label: 'INTERNSHIPS', value: '01', color: 'var(--magenta)' },
    { label: 'CGPA', value: '8.7', color: 'var(--gold)' },
    { label: 'UPTIME', value: '99.9%', color: 'var(--cyan)' },
  ];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Ambient glow orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '15%', right: '5%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%', left: '0',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(255,0,110,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.3), transparent)',
          animation: 'scan-move 6s linear infinite',
          zIndex: 1,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text content */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateX(-30px)',
              transition: 'all 0.8s cubic-bezier(0.23,1,0.32,1)',
            }}
          >
            {/* System label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="conn-dot" />
              <span className="mono text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>
                PORTFOLIO.SYS // NODE_ENV: PRODUCTION
              </span>
            </div>

            {/* Title typewriter */}
            <div className="mb-2">
              <p
                className="mono text-sm mb-3"
                style={{ color: 'var(--cyan)', letterSpacing: '4px' }}
              >
                {title.displayed}
                {!title.done && (
                  <span
                    style={{
                      display: 'inline-block',
                      width: '2px',
                      height: '14px',
                      background: 'var(--cyan)',
                      marginLeft: '2px',
                      animation: 'flicker 1s step-end infinite',
                    }}
                  />
                )}
              </p>
            </div>

            {/* Name */}
            <h1
              className="mb-6 leading-none"
              style={{
                fontFamily: 'Orbitron, monospace',
                fontWeight: 900,
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                lineHeight: 1.1,
              }}
            >
              <span
                style={{
                  color: '#e8eaf0',
                  textShadow: '0 0 60px rgba(0,245,255,0.15)',
                }}
              >
                {name.displayed}
                {!name.done && name.displayed.length > 0 && (
                  <span
                    style={{
                      display: 'inline-block',
                      width: '3px',
                      height: '0.85em',
                      background: 'var(--cyan)',
                      marginLeft: '3px',
                      verticalAlign: 'middle',
                      animation: 'flicker 1s step-end infinite',
                    }}
                  />
                )}
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="mb-8 text-lg font-medium leading-relaxed max-w-lg"
              style={{ color: 'var(--text-muted)', fontFamily: 'Rajdhani, sans-serif' }}
            >
              Full-Stack MERN Developer & AI Engineer crafting scalable systems,
              real-time platforms, and intelligent applications. B.Tech CSE @ RGUKT.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="btn-cyber"
              >
                <Zap size={14} />
                <span>VIEW PROJECTS</span>
              </a>
              <a
                href="/SriManikanta_Resume_(5).pdf"
                download
                className="btn-cyber btn-cyber-gold"
              >
                <ChevronDown size={14} />
                <span>DOWNLOAD CV</span>
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="corner-bracket p-3 text-center"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(0,245,255,0.08)',
                  }}
                >
                  <div
                    className="orbitron font-bold mb-1"
                    style={{ color: s.color, fontSize: 'clamp(1rem, 2.5vw, 1.4rem)' }}
                  >
                    {s.value}
                  </div>
                  <div className="mono text-xs" style={{ color: 'var(--text-muted)', fontSize: '9px', letterSpacing: '1px' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Network diagram */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateX(30px)',
              transition: 'all 1s cubic-bezier(0.23,1,0.32,1) 0.3s',
              height: '500px',
            }}
          >
            {/* Outer frame */}
            <div
              className="relative w-full h-full"
              style={{
                border: '1px solid rgba(0,245,255,0.15)',
                background: 'rgba(0,245,255,0.01)',
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
              }}
            >
              {/* Corner accents */}
              {[
                { top: 0, left: 0, borderWidth: '2px 0 0 2px' },
                { top: 0, right: 0, borderWidth: '2px 2px 0 0' },
                { bottom: 0, left: 0, borderWidth: '0 0 2px 2px' },
                { bottom: 0, right: 0, borderWidth: '0 2px 2px 0' },
              ].map((style, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    ...style,
                    width: '20px',
                    height: '20px',
                    borderStyle: 'solid',
                    borderColor: 'var(--cyan)',
                    opacity: 0.6,
                  }}
                />
              ))}

              {/* Canvas */}
              <NetworkCanvas />

              {/* Label */}
              <div
                className="absolute bottom-4 right-4 mono"
                style={{ color: 'rgba(0,245,255,0.4)', fontSize: '9px', letterSpacing: '2px' }}
              >
                NEURAL_NETWORK.VIZ // LIVE
              </div>

              {/* Floating indicators */}
              <div className="absolute top-4 left-4 flex gap-2 items-center">
                {['CONNECTED', 'AI-DRIVEN', 'SCALABLE'].map((t, i) => (
                  <span
                    key={t}
                    className="tag-badge"
                    style={{
                      borderColor: i === 0 ? 'var(--cyan)' : i === 1 ? 'var(--magenta)' : 'var(--gold)',
                      color: i === 0 ? 'var(--cyan)' : i === 1 ? 'var(--magenta)' : 'var(--gold)',
                      fontSize: '8px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating chips */}
            <div
              className="absolute -right-4 top-1/4 flex flex-col gap-2 animate-float"
              style={{ animationDelay: '1s' }}
            >
              {[
                { icon: <Cpu size={12} />, label: 'MERN', color: 'var(--cyan)' },
                { icon: <GitBranch size={12} />, label: 'AI/ML', color: 'var(--magenta)' },
                { icon: <Zap size={12} />, label: 'RT', color: 'var(--gold)' },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-2 px-3 py-2 mono text-xs"
                  style={{
                    background: 'rgba(6,10,16,0.9)',
                    border: `1px solid ${chip.color}40`,
                    color: chip.color,
                    backdropFilter: 'blur(8px)',
                    boxShadow: `0 0 12px ${chip.color}20`,
                  }}
                >
                  {chip.icon} {chip.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"
      >
        <span className="mono text-xs" style={{ color: 'var(--text-muted)', letterSpacing: '2px', fontSize: '9px' }}>
          SCROLL
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(180deg, var(--cyan), transparent)',
            boxShadow: '0 0 6px var(--cyan)',
          }}
        />
      </div>
    </section>
  );
}
