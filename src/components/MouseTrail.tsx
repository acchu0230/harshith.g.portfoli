import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
  hue: number;
}

const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, moving: false });
  const animFrameRef = useRef<number>(0);

  const createParticle = useCallback((x: number, y: number) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2 + 0.5;
    return {
      x,
      y,
      size: Math.random() * 4 + 1,
      speedX: Math.cos(angle) * speed,
      speedY: Math.sin(angle) * speed,
      life: 0,
      maxLife: Math.random() * 40 + 20,
      hue: Math.random() > 0.5 ? 199 : 262, // primary or accent
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let timeout: ReturnType<typeof setTimeout>;
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.moving = true;

      // Spawn particles
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push(createParticle(e.clientX, e.clientY));
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        mouseRef.current.moving = false;
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((p) => p.life < p.maxLife);

      for (const p of particlesRef.current) {
        p.life++;
        p.x += p.speedX;
        p.y += p.speedY;
        p.speedX *= 0.98;
        p.speedY *= 0.98;

        const progress = p.life / p.maxLife;
        const alpha = 1 - progress;
        const size = p.size * (1 - progress * 0.5);

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 3);
        glow.addColorStop(0, `hsla(${p.hue}, 89%, 48%, ${alpha * 0.3})`);
        glow.addColorStop(1, `hsla(${p.hue}, 89%, 48%, 0)`);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 89%, 68%, ${alpha})`;
        ctx.fill();
      }

      // Mouse glow ring when moving
      if (mouseRef.current.moving) {
        const { x, y } = mouseRef.current;
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        const ringGlow = ctx.createRadialGradient(x, y, 5, x, y, 20);
        ringGlow.addColorStop(0, "hsla(199, 89%, 48%, 0.15)");
        ringGlow.addColorStop(1, "hsla(199, 89%, 48%, 0)");
        ctx.fillStyle = ringGlow;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameRef.current);
      clearTimeout(timeout);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default MouseTrail;
