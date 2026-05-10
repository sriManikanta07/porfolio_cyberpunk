import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Github, Linkedin, Download, ChevronRight, Send } from 'lucide-react';

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  const contactItems = [
    {
      icon: <Mail size={18} />,
      label: 'EMAIL',
      value: 'srimanikantapulapakura@gmail.com',
      href: 'mailto:srimanikantapulapakura@gmail.com',
      color: 'var(--cyan)',
    },
    {
      icon: <Phone size={18} />,
      label: 'PHONE',
      value: '+91-7095658244',
      href: 'tel:+917095658244',
      color: 'var(--magenta)',
    },
    {
      icon: <Linkedin size={18} />,
      label: 'LINKEDIN',
      value: 'linkedin.com/in/p-sri-manikanta',
      href: 'https://linkedin.com/in/p-sri-manikanta',
      color: 'var(--cyan)',
    },
    {
      icon: <Github size={18} />,
      label: 'GITHUB',
      value: 'github.com/sri-manikanta',
      href: 'https://github.com',
      color: 'var(--gold)',
    },
  ];

  const education = [
    { degree: 'B.Tech CSE', school: 'RGUKT', period: '2023–2027', score: '8.7 CGPA', color: 'var(--cyan)' },
    { degree: 'Intermediate (PUC)', school: 'RGUKT', period: '2023', score: '9.71 CGPA', color: 'var(--magenta)' },
    { degree: 'High School', school: 'ZPP High School', period: '2021', score: '9.8 / 10', color: 'var(--gold)' },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-28 overflow-hidden grid-bg">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(0,245,255,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className="mb-16 text-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="conn-dot" />
            <span className="mono text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>
              CONTACT_MODULE // COMM.CHANNEL
            </span>
          </div>
          <h2 className="section-title text-4xl mb-3">
            <span style={{ color: 'var(--text-primary)' }}>INITIATE</span>{' '}
            <span className="text-glow-cyan">CONNECTION</span>
          </h2>
          <p className="mono text-sm" style={{ color: 'var(--text-muted)' }}>
            // OPEN TO OPPORTUNITIES — HANDSHAKE PROTOCOL ACTIVE
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact + Resume */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateX(-30px)',
              transition: 'all 0.7s ease 0.2s',
            }}
          >
            {/* Contact links */}
            <div className="space-y-3 mb-8">
              {contactItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="holo-block flex items-center gap-4 p-4 group"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 flex-shrink-0"
                    style={{
                      border: `1px solid ${item.color}40`,
                      color: item.color,
                      background: `${item.color}0d`,
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="mono text-xs mb-0.5 tracking-widest" style={{ color: item.color, fontSize: '9px' }}>
                      {item.label}
                    </p>
                    <p className="text-sm font-medium truncate" style={{ color: 'var(--text-primary)' }}>
                      {item.value}
                    </p>
                  </div>
                  <ChevronRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    style={{ color: item.color }}
                  />
                </a>
              ))}
            </div>

            {/* Resume download */}
            <div
              className="p-6 text-center"
              style={{
                border: '1px solid rgba(255,215,0,0.25)',
                background: 'rgba(255,215,0,0.03)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
              />
              <p className="mono text-xs mb-2 tracking-widest" style={{ color: 'var(--text-muted)' }}>
                RESUME // PDF FORMAT
              </p>
              <h3
                className="orbitron font-bold text-lg mb-4"
                style={{ color: 'var(--gold)' }}
              >
                SRI MANIKANTA P
              </h3>
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                Full-Stack MERN Developer & AI Engineer<br />
                B.Tech CSE @ RGUKT · 8.7 CGPA
              </p>
              <a
                href="/SriManikanta_Resume_(5).pdf"
                download
                className="btn-cyber btn-cyber-gold inline-flex"
              >
                <Download size={14} />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>
          </div>

          {/* Right: Education + Leadership */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateX(30px)',
              transition: 'all 0.7s ease 0.3s',
            }}
          >
            {/* Education */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)' }} />
                <span className="orbitron font-bold text-xs tracking-widest" style={{ color: 'var(--cyan)' }}>
                  EDUCATION
                </span>
                <div className="flex-1 h-px" style={{ background: 'rgba(0,245,255,0.2)' }} />
              </div>

              <div className="space-y-3">
                {education.map((e, i) => (
                  <div
                    key={i}
                    className="neo-card p-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{e.degree}</p>
                      <p className="mono text-xs mt-0.5" style={{ color: e.color }}>{e.school}</p>
                      <p className="mono text-xs mt-0.5" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>{e.period}</p>
                    </div>
                    <div
                      className="orbitron font-bold text-lg px-3 py-1"
                      style={{
                        color: e.color,
                        border: `1px solid ${e.color}30`,
                        background: `${e.color}08`,
                        textShadow: `0 0 12px ${e.color}`,
                      }}
                    >
                      {e.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--magenta)', boxShadow: '0 0 8px var(--magenta)' }} />
                <span className="orbitron font-bold text-xs tracking-widest" style={{ color: 'var(--magenta)' }}>
                  LEADERSHIP
                </span>
                <div className="flex-1 h-px" style={{ background: 'rgba(255,0,110,0.2)' }} />
              </div>

              <div className="space-y-3">
                {[
                  {
                    role: 'Hackathon & Marketing Coordinator',
                    org: "Teckzite'25",
                    detail: 'Managed 400+ participants from multiple institutes',
                  },
                  {
                    role: 'Student Co-Treasurer',
                    org: 'SDCAC, RGUKT Nuzvid',
                    detail: 'Financial planning & budgeting for student initiatives',
                  },
                ].map((l, i) => (
                  <div key={i} className="neo-card p-4" style={{ borderLeft: '2px solid var(--magenta)' }}>
                    <p className="font-bold text-sm mb-0.5" style={{ color: 'var(--text-primary)' }}>{l.role}</p>
                    <p className="mono text-xs" style={{ color: 'var(--magenta)' }}>{l.org}</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{l.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-20 pt-8 text-center"
          style={{
            borderTop: '1px solid rgba(0,245,255,0.08)',
            opacity: inView ? 1 : 0,
            transition: 'all 0.6s ease 0.6s',
          }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.2))' }} />
            <div className="conn-dot" />
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(0,245,255,0.2), transparent)' }} />
          </div>
          <p className="mono text-xs" style={{ color: 'var(--text-muted)', letterSpacing: '2px' }}>
            © 2026 SRI MANIKANTA P // ALL SYSTEMS OPERATIONAL
          </p>
          <p className="mono text-xs mt-1" style={{ color: 'rgba(0,245,255,0.3)', fontSize: '10px' }}>
            BUILT WITH MERN STACK // NODE_ENV: PRODUCTION
          </p>
        </div>
      </div>
    </section>
  );
}
