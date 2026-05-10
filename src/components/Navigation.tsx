import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { label: "SYS.INIT", href: "#hero" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "STACK", href: "#stack" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(6,10,16,0.95)" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(0,245,255,0.1)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div
              className="w-9 h-9 border flex items-center justify-center"
              style={{
                borderColor: "var(--cyan)",
                boxShadow: "0 0 12px rgba(0,245,255,0.3)",
                clipPath:
                  "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                background: "rgba(0,245,255,0.06)",
              }}
            >
              <Terminal size={16} style={{ color: "var(--cyan)" }} />
            </div>
          </div>
          <div>
            <div
              className="orbitron font-bold text-sm leading-none"
              style={{ color: "var(--cyan)", letterSpacing: "2px" }}
            >
              SM<span style={{ color: "var(--magenta)" }}>.</span>DEV
            </div>
            <div
              className="mono text-xs"
              style={{
                color: "var(--text-muted)",
                letterSpacing: "1px",
                fontSize: "9px",
              }}
            >
              v2.0.26 // ONLINE
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className="relative px-4 py-2 mono text-xs group transition-all duration-300"
              style={{
                color:
                  active === link.href ? "var(--cyan)" : "var(--text-muted)",
                letterSpacing: "2px",
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(0,245,255,0.05)" }}
              />
              <span
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{
                  background: "var(--cyan)",
                  boxShadow: "0 0 6px var(--cyan)",
                }}
              />
              <span className="relative group-hover:text-white transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Status indicator */}
        <div className="hidden md:flex items-center gap-2">
          <div className="conn-dot" />
          <span
            className="mono text-xs"
            style={{ color: "var(--text-muted)", fontSize: "10px" }}
          >
            SYSTEMS ONLINE
          </span>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 transition-colors"
          style={{ color: "var(--cyan)" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(6,10,16,0.98)",
            borderColor: "rgba(0,245,255,0.1)",
            backdropFilter: "blur(20px)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActive(link.href);
                setOpen(false);
              }}
              className="block px-6 py-3 mono text-sm border-b transition-all duration-200 hover:pl-8"
              style={{
                color: "var(--text-muted)",
                borderColor: "rgba(0,245,255,0.05)",
                letterSpacing: "2px",
              }}
            >
              <span style={{ color: "var(--cyan)" }}>// </span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
