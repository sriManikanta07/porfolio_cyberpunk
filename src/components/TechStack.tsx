import { useEffect, useRef, useState } from "react";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

const stackCategories = [
  {
    label: "CORE STACK",
    color: "var(--cyan)",
    items: [
      { name: "MongoDB", abbr: "MDB", desc: "NoSQL Database", level: 90 },
      { name: "Express.js", abbr: "EXP", desc: "Backend Framework", level: 88 },
      { name: "React.js", abbr: "RCT", desc: "UI Library", level: 92 },
      { name: "Node.js", abbr: "NOD", desc: "Runtime Engine", level: 90 },
    ],
  },
  {
    label: "AI / DATA",
    color: "var(--magenta)",
    items: [
      { name: "LLM APIs", abbr: "LLM", desc: "AI Integration", level: 85 },
      {
        name: "RAG Systems",
        abbr: "RAG",
        desc: "Retrieval Augmented",
        level: 80,
      },

      { name: "Python", abbr: "PYT", desc: "ML / Scripting", level: 82 },
    ],
  },
  {
    label: "INFRASTRUCTURE",
    color: "var(--gold)",
    items: [
      { name: "Socket.io", abbr: "SCK", desc: "Real-Time Comms", level: 88 },

      { name: "Redux", abbr: "RDX", desc: "State Management", level: 85 },
    ],
  },
  {
    label: "TOOLS",
    color: "var(--cyan)",
    items: [
      { name: "Git / GitHub", abbr: "GIT", desc: "Version Control", level: 92 },
      { name: "REST APIs", abbr: "RST", desc: "API Design", level: 93 },
      { name: "K6 Testing", abbr: "K6T", desc: "Load Testing", level: 75 },
      { name: "SQL", abbr: "SQL", desc: "Relational DB", level: 80 },
    ],
  },
];

const featuredIcons = [
  { name: "MongoDB", sym: "M", color: "#00ed64", glow: "#00ed64" },
  { name: "Docker", sym: "D", color: "#2496ed", glow: "#2496ed" },
  { name: "GraphQL", sym: "G", color: "#e535ab", glow: "#e535ab" },
  { name: "Kafka", sym: "K", color: "#ffd700", glow: "#ffd700" },
  { name: "BigData", sym: "B", color: "#00f5ff", glow: "#00f5ff" },
  { name: "React", sym: "R", color: "#61dafb", glow: "#61dafb" },
  { name: "Node.js", sym: "N", color: "#68a063", glow: "#68a063" },
  { name: "Python", sym: "P", color: "#ffbc3c", glow: "#ffbc3c" },
];

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section
      id="stack"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      {/* Diagonal accent line */}
      <div
        className="absolute w-full"
        style={{
          top: "40%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(0,245,255,0.1), rgba(255,0,110,0.1), transparent)",
          transform: "rotate(-1deg)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className="mb-16 text-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="conn-dot" />
            <span
              className="mono text-xs tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              TECH_MODULE // STACK.REGISTRY
            </span>
          </div>
          <h2 className="section-title text-4xl mb-3">
            <span className="text-glow-gold">TECH</span>{" "}
            <span style={{ color: "var(--text-primary)" }}>STACK</span>
          </h2>
          <p className="mono text-sm" style={{ color: "var(--text-muted)" }}>
            // PRECISION ARRAY — SYNCHRONIZED PULSE
          </p>
        </div>

        {/* Featured icon row — diagonal axis */}
        <div
          className="relative mb-16 overflow-hidden"
          style={{
            opacity: inView ? 1 : 0,
            transition: "all 0.8s ease 0.2s",
          }}
        >
          <div
            className="flex items-center gap-6 py-6 px-2"
            style={{
              borderTop: "1px solid rgba(0,245,255,0.1)",
              borderBottom: "1px solid rgba(0,245,255,0.1)",
              background: "rgba(0,245,255,0.02)",
            }}
          >
            {/* Diagonal separator */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(105deg, transparent 45%, rgba(0,245,255,0.03) 45%, rgba(0,245,255,0.03) 55%, transparent 55%)",
              }}
            />

            {featuredIcons.map((icon, i) => (
              <div
                key={icon.name}
                className="flex flex-col items-center gap-2 flex-1 animate-icon-pulse"
                style={{
                  animationDelay: `${i * 0.4}s`,
                  opacity: inView ? 1 : 0,
                  transform: inView
                    ? "none"
                    : `translateY(${i % 2 === 0 ? "-" : ""}20px)`,
                  transition: `all 0.6s ease ${0.3 + i * 0.07}s`,
                }}
              >
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    width: 52,
                    height: 52,
                    border: `1.5px solid ${icon.color}50`,
                    background: `${icon.color}0d`,
                    boxShadow: `0 0 16px ${icon.glow}20, inset 0 0 16px ${icon.glow}08`,
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <span
                    className="orbitron font-bold text-lg"
                    style={{
                      color: icon.color,
                      textShadow: `0 0 12px ${icon.glow}`,
                    }}
                  >
                    {icon.sym}
                  </span>
                </div>
                <span
                  className="mono text-center"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "9px",
                    letterSpacing: "1px",
                  }}
                >
                  {icon.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((cat, ci) => (
            <div
              key={ci}
              className="neo-card p-5"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(30px)",
                transition: `all 0.7s ease ${0.3 + ci * 0.1}s`,
                borderTop: `2px solid ${cat.color}`,
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: cat.color,
                    boxShadow: `0 0 8px ${cat.color}`,
                  }}
                />
                <span
                  className="mono font-semibold text-xs tracking-widest"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </span>
              </div>

              <div className="space-y-4">
                {cat.items.map((item, ii) => (
                  <div key={ii}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="mono text-xs font-bold"
                          style={{
                            color: cat.color,
                            fontSize: "9px",
                            background: `${cat.color}15`,
                            padding: "1px 5px",
                            border: `1px solid ${cat.color}30`,
                          }}
                        >
                          {item.abbr}
                        </span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {item.name}
                        </span>
                      </div>
                      <span
                        className="mono text-xs"
                        style={{ color: "var(--text-muted)", fontSize: "10px" }}
                      >
                        {item.level}%
                      </span>
                    </div>
                    <p
                      className="mono mb-1.5"
                      style={{ color: "var(--text-muted)", fontSize: "10px" }}
                    >
                      {item.desc}
                    </p>
                    {/* Progress bar */}
                    <div
                      style={{
                        height: "2px",
                        background: "rgba(255,255,255,0.06)",
                        borderRadius: "1px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className="progress-bar"
                        style={{
                          width: inView ? `${item.level}%` : "0%",
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}aa)`,
                          boxShadow: `0 0 6px ${cat.color}80`,
                          transition: `width 1.2s cubic-bezier(0.23,1,0.32,1) ${0.5 + ii * 0.1 + ci * 0.05}s`,
                          height: "2px",
                          borderRadius: "1px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
