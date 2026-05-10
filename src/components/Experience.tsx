import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  ExternalLink,
  ChevronRight,
  Zap,
  Award,
} from "lucide-react";

const experiences = [
  {
    role: "AI Research Intern",
    company: "Infosys Springboard",
    period: "Aug 2025 – Oct 2025",
    type: "INTERNSHIP",
    color: "var(--magenta)",
    highlights: [
      "Engineered real-time face emotion detection using ensemble CNN models; +14% accuracy, +22% inference efficiency",
      "Designed intelligent capture mechanism detecting peak emotional expressions at optimal moments",
    ],
    tags: ["CNN", "AI/ML", "Python", "Deep Learning"],
  },
];

const projects = [
  {
    name: "SANDESHA",
    subtitle: "Real-Time AI-Powered Chat Platform",
    stack: "MERN · Socket.io · LLM APIs",
    color: "var(--cyan)",
    metrics: [
      { label: "MSG LATENCY", value: "<120ms" },
      { label: "AVAILABILITY", value: "99.9%" },
      { label: "CONCURRENT USERS", value: "500+" },
    ],
    highlights: [
      "Scalable real-time chat with typing indicators, delivery/read status, online presence tracking",
      "AI features: conversation summarization, spam detection, message prediction via LLM APIs; -50% information overload",
    ],
    links: {
      live: "https://chat-app-frontend-op3h.onrender.com/",
      github: "https://github.com/sriManikanta07/chat_app",
    },
    tags: ["MERN", "Socket.io", "LLM", "Redis"],
  },
  {
    name: "HEALTHIFY",
    subtitle: "AI-Powered Public Health Assistant",
    stack: "LLM APIs · RAG · Node.js · Vector DB",
    color: "var(--magenta)",
    metrics: [
      { label: "AGENTS", value: "MULTI" },
      { label: "RETRIEVAL", value: "RAG" },
      { label: "COVERAGE", value: "REAL-WORLD" },
    ],
    highlights: [
      "Multi-agent AI chatbot for disease awareness, symptom guidance, preventive healthcare support",
      "Location-based hospital recommendations; structured agent workflow for query understanding + RAG",
    ],
    links: { github: "https://github.com/sriManikanta07/" },
    tags: ["Node.js", "RAG", "Vector DB", "LLM"],
  },
  {
    name: "CodeInsight AI",
    subtitle: "Smart Code Review Engine",
    stack: "LLM APIs · RAG · Node.js · GitHub Integration",
    color: "var(--gold)",
    metrics: [
      { label: "REVIEW TIME", value: "<2s" },
      { label: "ACCURACY", value: ">95%" },
      { label: "EFFORT SAVED", value: "50%" },
    ],
    highlights: [
      "AI code review detecting bugs, suggesting optimizations, estimating time complexity across languages",
      "GitHub workflow integration with PR comment simulation; <2s latency, >95% issue detection accuracy",
    ],
    links: { github: "https://github.com/sriManikanta07/" },
    tags: ["LLM", "RAG", "Node.js", "GitHub"],
  },
  {
    name: "BAKERY MGMT",
    subtitle: "Freelanced Production System",
    stack: "MERN Stack · WhatsApp API · REST",
    color: "var(--cyan)",
    metrics: [
      { label: "ENGAGEMENT", value: "+40%" },
      { label: "MANUAL OPS", value: "-60%" },
      { label: "CONCURRENT USERS", value: "1000+" },
    ],
    highlights: [
      "Production-grade bakery system: catalog, WhatsApp ordering, end-to-end management for real client",
      "K6 load testing + load balancing; scaled 100→1000+ users, -35% API latency, >99% success rate",
    ],
    links: {
      live: "https://bakesofgood.netlify.app/",
      github: "https://github.com/sriManikanta07/sweet-order-system",
    },
    tags: ["MERN", "WhatsApp", "K6", "REST"],
  },
  {
    name: "COMPILY",
    subtitle: "High-Performance Image Compression",
    stack: "MERN Stack",
    color: "var(--magenta)",
    metrics: [
      { label: "PROCESSING", value: "<1s" },
      { label: "SIZE REDUCTION", value: "65-80%" },
      { label: "PARALLEL REQS", value: "500+" },
    ],
    highlights: [
      "Drag-and-drop image compression; <1s processing, 65-80% size reduction preserving visual quality",
      "Scalable backend APIs for 500+ concurrent uploads; +40% upload efficiency",
    ],
    links: {
      live: "https://image-compressor-pro-cracked.netlify.app/",
      github: "https://github.com/sriManikanta07/Compify",
    },
    tags: ["MERN", "Sharp", "Node.js", "REST"],
  },
];

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

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="conn-dot" />
      <span
        className="mono text-xs tracking-widest"
        style={{ color: "var(--text-muted)" }}
      >
        {text}
      </span>
    </div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-28 overflow-hidden grid-bg"
    >
      {/* Decorative lines */}
      <div className="iso-line" style={{ top: 0, opacity: 0.3 }} />
      <div className="iso-line" style={{ bottom: 0, opacity: 0.3 }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div
          className="mb-16 text-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <SectionLabel text="CAREER_MODULE // EXPERIENCE.LOG" />
          <h2
            className="section-title text-4xl mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            <span className="text-glow-cyan">EXPERIENCE</span>
            <span style={{ color: "var(--text-muted)", margin: "0 12px" }}>
              &
            </span>
            <span className="text-glow-magenta">PROJECTS</span>
          </h2>
          <p className="mono text-sm" style={{ color: "var(--text-muted)" }}>
            // INTERCONNECTED MODULES — EACH A SYSTEM NODE
          </p>
        </div>

        {/* Experience block */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase size={16} style={{ color: "var(--magenta)" }} />
            <span
              className="orbitron text-sm font-bold tracking-widest"
              style={{ color: "var(--magenta)" }}
            >
              PROFESSIONAL EXPERIENCE
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(255,0,110,0.2)" }}
            />
          </div>

          {experiences.map((exp, i) => (
            <div
              key={i}
              className="holo-block p-6 rounded-none"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateX(-30px)",
                transition: `all 0.7s ease ${i * 0.15}s`,
                borderLeft: "3px solid var(--magenta)",
              }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <span
                    className="tag-badge mb-2 inline-block"
                    style={{
                      borderColor: "var(--magenta)",
                      color: "var(--magenta)",
                    }}
                  >
                    {exp.type}
                  </span>
                  <h3
                    className="orbitron font-bold text-xl"
                    style={{
                      color: "var(--text-primary)",
                      letterSpacing: "2px",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="mono text-sm mt-1"
                    style={{ color: "var(--magenta)" }}
                  >
                    @ {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="px-3 py-1 mono text-xs"
                    style={{
                      border: "1px solid rgba(255,0,110,0.3)",
                      color: "var(--text-muted)",
                      background: "rgba(255,0,110,0.05)",
                    }}
                  >
                    {exp.period}
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {exp.highlights.map((h, j) => (
                  <div key={j} className="flex gap-3">
                    <ChevronRight
                      size={14}
                      className="flex-shrink-0 mt-1"
                      style={{ color: "var(--magenta)" }}
                    />
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-muted)", lineHeight: 1.7 }}
                    >
                      {h}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="tag-badge"
                    style={{
                      borderColor: "rgba(255,0,110,0.3)",
                      color: "rgba(255,0,110,0.7)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Projects grid */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Zap size={16} style={{ color: "var(--cyan)" }} />
            <span
              className="orbitron text-sm font-bold tracking-widest"
              style={{ color: "var(--cyan)" }}
            >
              ENGINEERED SYSTEMS
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(0,245,255,0.2)" }}
            />
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <div
                key={i}
                className="holo-block p-5 flex flex-col"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(30px)",
                  transition: `all 0.7s ease ${0.2 + i * 0.1}s`,
                  borderTop: `2px solid ${p.color}`,
                  minHeight: "320px",
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Award size={12} style={{ color: p.color }} />
                      <span
                        className="orbitron font-bold text-sm tracking-wider"
                        style={{ color: p.color }}
                      >
                        {p.name}
                      </span>
                    </div>
                    <p
                      className="text-xs font-semibold"
                      style={{
                        color: "var(--text-primary)",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {p.subtitle}
                    </p>
                    <p
                      className="mono text-xs mt-1"
                      style={{ color: "var(--text-muted)", fontSize: "10px" }}
                    >
                      {p.stack}
                    </p>
                  </div>
                  {p.links.live && (
                    <ExternalLink
                      size={13}
                      style={{ color: "var(--text-muted)", flexShrink: 0 }}
                    />
                  )}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {p.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="text-center py-2"
                      style={{
                        background: `${p.color}08`,
                        border: `1px solid ${p.color}20`,
                      }}
                    >
                      <div
                        className="orbitron font-bold text-sm"
                        style={{ color: p.color }}
                      >
                        {m.value}
                      </div>
                      <div
                        className="mono"
                        style={{
                          color: "var(--text-muted)",
                          fontSize: "8px",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="flex-1 space-y-2 mb-4">
                  {p.highlights.map((h, j) => (
                    <div key={j} className="flex gap-2">
                      <ChevronRight
                        size={12}
                        className="flex-shrink-0 mt-1"
                        style={{ color: p.color }}
                      />
                      <p
                        style={{
                          color: "var(--text-muted)",
                          fontSize: "12px",
                          lineHeight: 1.6,
                        }}
                      >
                        {h}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="tag-badge"
                      style={{
                        borderColor: `${p.color}30`,
                        color: `${p.color}80`,
                        fontSize: "9px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 mt-auto">
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 mono text-xs font-semibold transition-all duration-300"
                      style={{
                        border: `1px solid ${p.color}60`,
                        color: p.color,
                        background: `${p.color}0d`,
                        fontSize: "10px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${p.color}20`;
                        e.currentTarget.style.boxShadow = `0 0 12px ${p.color}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${p.color}0d`;
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <ExternalLink size={11} />
                      <span>LIVE</span>
                    </a>
                  )}
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 mono text-xs font-semibold transition-all duration-300"
                    style={{
                      border: `1px solid ${p.color}60`,
                      color: p.color,
                      background: `${p.color}0d`,
                      fontSize: "10px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${p.color}20`;
                      e.currentTarget.style.boxShadow = `0 0 12px ${p.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${p.color}0d`;
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <ExternalLink size={11} />
                    <span>GITHUB</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
