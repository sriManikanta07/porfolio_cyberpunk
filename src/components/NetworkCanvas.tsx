import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulsePhase: number;
}

interface Connection {
  from: number;
  to: number;
  progress: number;
  speed: number;
  color: string;
}

const COLORS = ['#00f5ff', '#ff006e', '#ffd700', '#00f5ff', '#00f5ff'];

export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const particlesRef = useRef<{ x: number; y: number; tx: number; ty: number; progress: number; color: string; connIdx: number }[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initNodes();
    };

    const initNodes = () => {
      const w = canvas.width;
      const h = canvas.height;
      const count = 18;
      nodesRef.current = Array.from({ length: count }, (_, i) => ({
        x: 60 + Math.random() * (w - 120),
        y: 60 + Math.random() * (h - 120),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 3 + Math.random() * 3,
        color: COLORS[i % COLORS.length],
        pulsePhase: Math.random() * Math.PI * 2,
      }));

      connectionsRef.current = [];
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const ni = nodesRef.current[i];
          const nj = nodesRef.current[j];
          const dx = ni.x - nj.x;
          const dy = ni.y - nj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            connectionsRef.current.push({
              from: i,
              to: j,
              progress: Math.random(),
              speed: 0.002 + Math.random() * 0.003,
              color: Math.random() > 0.7 ? '#ff006e' : '#00f5ff',
            });
          }
        }
      }
      particlesRef.current = [];
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      timeRef.current += 0.01;

      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const conns = connectionsRef.current;

      // Update nodes
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 40 || n.x > w - 40) n.vx *= -1;
        if (n.y < 40 || n.y > h - 40) n.vy *= -1;
      });

      // Draw connections
      conns.forEach(c => {
        const a = nodes[c.from];
        const b = nodes[c.to];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 220) return;

        const alpha = (1 - dist / 220) * 0.25;
        ctx.strokeStyle = c.color === '#00f5ff'
          ? `rgba(0,245,255,${alpha})`
          : `rgba(255,0,110,${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        // Traveling particle
        c.progress += c.speed;
        if (c.progress > 1) c.progress = 0;

        const px = a.x + dx * c.progress;
        const py = a.y + dy * c.progress;
        const pAlpha = Math.sin(c.progress * Math.PI) * 0.9;

        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = c.color === '#00f5ff'
          ? `rgba(0,245,255,${pAlpha})`
          : `rgba(255,0,110,${pAlpha})`;
        ctx.fill();

        // Glow
        const grd = ctx.createRadialGradient(px, py, 0, px, py, 6);
        grd.addColorStop(0, c.color === '#00f5ff' ? `rgba(0,245,255,${pAlpha * 0.5})` : `rgba(255,0,110,${pAlpha * 0.5})`);
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach(n => {
        const pulse = Math.sin(timeRef.current * 2 + n.pulsePhase) * 0.5 + 0.5;
        const r = n.radius + pulse * 2;

        // Outer glow
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4);
        grd.addColorStop(0, n.color + '60');
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();

        // Inner bright
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      });

      // Rotating orbit rings around center
      const cx = w / 2;
      const cy = h / 2;
      [80, 130, 180].forEach((rad, i) => {
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,245,255,${0.04 + i * 0.02})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Orbiting dot
        const angle = timeRef.current * (0.4 - i * 0.1) + i * 2;
        const ox = cx + Math.cos(angle) * rad;
        const oy = cy + Math.sin(angle) * rad;
        ctx.beginPath();
        ctx.arc(ox, oy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = i === 1 ? '#ff006e' : '#00f5ff';
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
