// src/components/AnimatedBackground.jsx

import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  const mouse = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    vx: 0,
    vy: 0,
    active: false,
  });

  const particles = useRef([]);
  const bursts = useRef([]);
  const ripples = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* =====================================================
       SETTINGS
       ===================================================== */

    const mobile = window.innerWidth < 768;
    const tablet = window.innerWidth < 1100;

    const PARTICLE_COUNT = mobile ? 70 : tablet ? 105 : 155;
    const MAX_BURSTS = mobile ? 100 : 180;
    const MAX_RIPPLES = 6;
    const CONNECTION_DISTANCE = mobile ? 72 : 105;
    const MOUSE_RADIUS = mobile ? 145 : 230;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let time = 0;

    /* =====================================================
       COLORS
       ===================================================== */

    const BLUE = { r: 19, g: 164, b: 255 };
    const CYAN = { r: 70, g: 222, b: 255 };
    const WHITE = { r: 220, g: 248, b: 255 };
    const BLUE_SOFT = { r: 55, g: 116, b: 190 };
    const FIRE = { r: 255, g: 175, b: 74 };

    /* =====================================================
       RESIZE
       ===================================================== */

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    /* =====================================================
       RANDOM FLOW DIRECTION
       ===================================================== */

    const randomFlow = () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.55 + 0.25;

      return {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed,
      };
    };

    /* =====================================================
       CREATE FLOWING ENERGY PARTICLE
       ===================================================== */

    const createParticle = () => {
      const velocity = randomFlow();
      const colorRoll = Math.random();

      let color;
      if (colorRoll > 0.88) {
        color = FIRE;
      } else if (colorRoll > 0.55) {
        color = CYAN;
      } else {
        color = BLUE;
      }

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: velocity.x,
        vy: velocity.y,
        baseSpeed: Math.random() * 0.65 + 0.3,
        size: Math.random() * 1.7 + 0.6,
        life: Math.random() * 0.6 + 0.4,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 2 + 0.7,
        color,
        trail: [],
        trailLength: mobile ? 5 : Math.floor(Math.random() * 9) + 5,
        energy: Math.random(),
        wave: Math.random() * Math.PI * 2,
        waveSpeed: Math.random() * 1.2 + 0.5,
        connection: Math.random(),
      };
    };

    /* =====================================================
       CREATE INITIAL PARTICLES
       ===================================================== */

    particles.current = Array.from({ length: PARTICLE_COUNT }, createParticle);

    /* =====================================================
       DRAW GLOW
       ===================================================== */

    const drawGlow = (x, y, radius, color, alpha) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);

      gradient.addColorStop(0, `rgba(${color.r},${color.g},${color.b},${alpha})`);
      gradient.addColorStop(
        0.25,
        `rgba(${color.r},${color.g},${color.b},${alpha * 0.35})`
      );
      gradient.addColorStop(1, `rgba(${color.r},${color.g},${color.b},0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    /* =====================================================
       BACKGROUND
       ===================================================== */

    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);

      gradient.addColorStop(0, "#061a31");
      gradient.addColorStop(0.3, "#031225");
      gradient.addColorStop(0.7, "#020914");
      gradient.addColorStop(1, "#01040a");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    /* =====================================================
       LARGE ATMOSPHERIC GLOWS
       ===================================================== */

    const drawAtmosphere = () => {
      const breathing = 1 + Math.sin(time * 0.45) * 0.08;

      drawGlow(
        width * 0.18,
        height * 0.2,
        Math.max(width, height) * 0.42 * breathing,
        BLUE,
        0.055
      );

      drawGlow(
        width * 0.82,
        height * 0.72,
        Math.max(width, height) * 0.42,
        CYAN,
        0.045
      );

      drawGlow(
        width * 0.5,
        height * 0.45,
        Math.max(width, height) * 0.5,
        BLUE_SOFT,
        0.035
      );
    };

    /* =====================================================
       ENERGY STREAMS
       ===================================================== */

    const drawEnergyStreams = () => {
      for (let stream = 0; stream < 5; stream++) {
        const offset = stream * 0.9;
        const baseY = height * (0.08 + stream * 0.2);
        const amplitude = 35 + stream * 12;

        ctx.beginPath();
        ctx.moveTo(-50, baseY);

        for (let x = -50; x <= width + 50; x += 18) {
          const y =
            baseY +
            Math.sin(x * 0.004 + time * (0.25 + stream * 0.035) + offset) *
              amplitude +
            Math.sin(x * 0.009 - time * 0.18) * amplitude * 0.3;

          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `rgba(30,177,255,${0.018 + stream * 0.006})`;
        ctx.lineWidth = stream === 2 ? 1.2 : 0.55;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(20,180,255,0.25)";
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    };

    /* =====================================================
       UPDATE MOUSE
       ===================================================== */

    const updateMouse = () => {
      if (mouse.current.targetX < -500) {
        mouse.current.x = -1000;
        mouse.current.y = -1000;
        return;
      }

      const previousX = mouse.current.x;
      const previousY = mouse.current.y;

      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.12;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.12;

      mouse.current.vx = mouse.current.x - previousX;
      mouse.current.vy = mouse.current.y - previousY;
    };

    /* =====================================================
       UPDATE PARTICLE
       ===================================================== */

    const updateParticle = (particle) => {
      const mouseX = mouse.current.x;
      const mouseY = mouse.current.y;

      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const distance = Math.hypot(dx, dy);

      /* Natural flowing movement */
      const wave = Math.sin(time * particle.waveSpeed + particle.wave);
      particle.vx += Math.cos(wave) * 0.003;
      particle.vy += Math.sin(wave) * 0.003;

      /* Mouse attraction */
      if (distance < MOUSE_RADIUS) {
        const force = 1 - distance / MOUSE_RADIUS;
        const attraction = force * 0.018;

        particle.vx += dx * attraction * 0.01;
        particle.vy += dy * attraction * 0.01;

        /* Mouse movement creates energy push */
        particle.vx += mouse.current.vx * force * 0.012;
        particle.vy += mouse.current.vy * force * 0.012;
      }

      /* Keep velocity controlled */
      const speed = Math.hypot(particle.vx, particle.vy);
      const desiredSpeed =
        particle.baseSpeed *
        (1 + Math.sin(time * 0.8 + particle.pulse) * 0.18);

      if (speed > 0) {
        particle.vx +=
          ((particle.vx / speed) * desiredSpeed - particle.vx) * 0.008;
        particle.vy +=
          ((particle.vy / speed) * desiredSpeed - particle.vy) * 0.008;
      }

      particle.x += particle.vx;
      particle.y += particle.vy;

      /* Wrap around screen */
      const margin = 30;

      if (particle.x < -margin) particle.x = width + margin;
      if (particle.x > width + margin) particle.x = -margin;
      if (particle.y < -margin) particle.y = height + margin;
      if (particle.y > height + margin) particle.y = -margin;

      /* Store trail */
      particle.trail.push({ x: particle.x, y: particle.y });

      if (particle.trail.length > particle.trailLength) {
        particle.trail.shift();
      }
    };

    /* =====================================================
       DRAW PARTICLE TRAIL
       ===================================================== */

    const drawParticleTrail = (particle) => {
      if (particle.trail.length < 2) return;

      for (let i = 1; i < particle.trail.length; i++) {
        const previous = particle.trail[i - 1];
        const current = particle.trail[i];
        const progress = i / particle.trail.length;
        const alpha = progress * 0.32;

        ctx.beginPath();
        ctx.moveTo(previous.x, previous.y);
        ctx.lineTo(current.x, current.y);
        ctx.strokeStyle = `rgba(${particle.color.r},${particle.color.g},${particle.color.b},${alpha})`;
        ctx.lineWidth = particle.size * progress * 0.85;
        ctx.stroke();
      }
    };

    /* =====================================================
       DRAW PARTICLE
       ===================================================== */

    const drawParticle = (particle) => {
      const pulse =
        1 + Math.sin(time * particle.pulseSpeed + particle.pulse) * 0.18;

      let alpha =
        0.55 + Math.sin(time * particle.pulseSpeed + particle.pulse) * 0.2;

      const distance = Math.hypot(
        mouse.current.x - particle.x,
        mouse.current.y - particle.y
      );

      if (distance < MOUSE_RADIUS) {
        alpha += (1 - distance / MOUSE_RADIUS) * 0.35;
      }

      alpha = Math.min(1, alpha);

      const radius = particle.size * pulse;

      /* Glow around particle */
      drawGlow(particle.x, particle.y, radius * 7, particle.color, alpha * 0.28);

      /* Trail */
      drawParticleTrail(particle);

      /* Bright core */
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${particle.color.r},${particle.color.g},${particle.color.b},${alpha})`;
      ctx.shadowBlur = particle.color === FIRE ? 15 : 11;
      ctx.shadowColor = `rgba(${particle.color.r},${particle.color.g},${particle.color.b},0.9)`;
      ctx.fill();
      ctx.shadowBlur = 0;

      /* White-hot center */
      if (particle.size > 1) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, radius * 0.38, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${WHITE.r},${WHITE.g},${WHITE.b},${alpha * 0.85})`;
        ctx.fill();
      }
    };

    /* =====================================================
       CONNECT PARTICLES
       ===================================================== */

    const drawConnections = () => {
      const list = particles.current;

      for (let i = 0; i < list.length; i++) {
        const a = list[i];

        for (let j = i + 1; j < list.length; j++) {
          const b = list[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > CONNECTION_DISTANCE) continue;

          const strength = 1 - distance / CONNECTION_DISTANCE;
          const alpha = strength * 0.16;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(42,188,255,${alpha})`;
          ctx.lineWidth = 0.35 + strength * 0.5;
          ctx.stroke();

          /* Flowing light travelling along the connection */
          if (strength > 0.48) {
            const flow = (time * 0.35 + a.connection) % 1;
            const fx = a.x + (b.x - a.x) * flow;
            const fy = a.y + (b.y - a.y) * flow;

            drawGlow(fx, fy, 4 + strength * 4, CYAN, strength * 0.2);
          }
        }
      }
    };

    /* =====================================================
       MOUSE ENERGY FIELD
       ===================================================== */

    const drawMouseField = () => {
      if (mouse.current.x < 0) return;

      const x = mouse.current.x;
      const y = mouse.current.y;

      const pulse = 1 + Math.sin(time * 3.5) * 0.12;

      /* Large invisible energy field */
      drawGlow(x, y, 125 * pulse, CYAN, 0.06);
      drawGlow(x, y, 55 * pulse, BLUE, 0.09);

      /* Small bright core */
      ctx.beginPath();
      ctx.arc(x, y, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(235,252,255,0.95)";
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#1fcaff";
      ctx.fill();
      ctx.shadowBlur = 0;

      /* Rotating small particles around mouse */
      for (let i = 0; i < 5; i++) {
        const angle = time * (0.9 + i * 0.08) + (i * Math.PI * 2) / 5;
        const radius = 17 + Math.sin(time * 2 + i) * 5;

        const px = x + Math.cos(angle) * radius;
        const py = y + Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.arc(px, py, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(90,220,255,0.75)";
        ctx.shadowBlur = 9;
        ctx.shadowColor = "#1fcaff";
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    /* =====================================================
       CLICK BURST
       ===================================================== */

    const createBurst = (x, y) => {
      const count = mobile ? 45 : 85;

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5.5 + 1.5;
        const fire = Math.random() > 0.72;

        bursts.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2.2 + 0.5,
          life: 1,
          decay: Math.random() * 0.018 + 0.012,
          color: fire ? FIRE : Math.random() > 0.45 ? CYAN : BLUE,
        });
      }

      if (bursts.current.length > MAX_BURSTS) {
        bursts.current.splice(0, bursts.current.length - MAX_BURSTS);
      }
    };

    /* =====================================================
       DRAW BURSTS
       ===================================================== */

    const drawBursts = () => {
      for (let i = bursts.current.length - 1; i >= 0; i--) {
        const particle = bursts.current[i];

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.965;
        particle.vy *= 0.965;
        particle.life -= particle.decay;
        particle.size *= 0.985;

        if (particle.life <= 0 || particle.size < 0.15) {
          bursts.current.splice(i, 1);
          continue;
        }

        drawGlow(
          particle.x,
          particle.y,
          particle.size * 7,
          particle.color,
          particle.life * 0.25
        );

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.color.r},${particle.color.g},${particle.color.b},${particle.life})`;
        ctx.shadowBlur = 13;
        ctx.shadowColor = `rgba(${particle.color.r},${particle.color.g},${particle.color.b},${particle.life})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    /* =====================================================
       CLICK RIPPLES
       ===================================================== */

    const createRipple = (x, y) => {
      if (ripples.current.length >= MAX_RIPPLES) {
        ripples.current.shift();
      }

      ripples.current.push({
        x,
        y,
        radius: 0,
        maxRadius: mobile ? 150 : 270,
        life: 1,
      });
    };

    /* =====================================================
       DRAW RIPPLES
       ===================================================== */

    const drawRipples = () => {
      for (let i = ripples.current.length - 1; i >= 0; i--) {
        const ripple = ripples.current[i];

        ripple.radius += mobile ? 4 : 5;
        ripple.life -= 0.018;

        if (ripple.life <= 0 || ripple.radius > ripple.maxRadius) {
          ripples.current.splice(i, 1);
          continue;
        }

        /* Main ring */
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(35,203,255,${ripple.life * 0.5})`;
        ctx.lineWidth = 1.2;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "#1bcaff";
        ctx.stroke();
        ctx.shadowBlur = 0;

        /* Secondary ring */
        if (ripple.radius > 30) {
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius * 0.62, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(100,228,255,${ripple.life * 0.18})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    };

    /* =====================================================
       MOUSE EVENTS
       ===================================================== */

    const handleMouseMove = (event) => {
      mouse.current.targetX = event.clientX;
      mouse.current.targetY = event.clientY;
      mouse.current.active = true;
    };

    const handleMouseLeave = () => {
      mouse.current.targetX = -1000;
      mouse.current.targetY = -1000;
      mouse.current.active = false;
    };

    const handleClick = (event) => {
      createRipple(event.clientX, event.clientY);
      createBurst(event.clientX, event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);
    window.addEventListener("resize", resize);

    /* =====================================================
       RENDER
       ===================================================== */

    const render = () => {
      time += 0.016;

      ctx.clearRect(0, 0, width, height);

      /* Background */
      drawBackground();
      drawAtmosphere();
      drawEnergyStreams();

      /* Mouse physics */
      updateMouse();

      /* Particles */
      for (const particle of particles.current) {
        updateParticle(particle);
      }

      /* Connections first */
      drawConnections();

      /* Then particles */
      for (const particle of particles.current) {
        drawParticle(particle);
      }

      /* Mouse field */
      drawMouseField();

      /* Click effects */
      drawBursts();
      drawRipples();

      animationFrame = requestAnimationFrame(render);
    };

    render();

    /* =====================================================
       CLEANUP
       ===================================================== */

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resize);
    };
  }, []);

 

  return (
    
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(8,54,95,0.38), transparent 68%), radial-gradient(ellipse 50% 55% at 0% 55%, rgba(0,120,210,0.08), transparent 72%), radial-gradient(ellipse 50% 55% at 100% 65%, rgba(0,190,255,0.06), transparent 72%)",
        }}
      />

      {/* -----------------------------------------------
          Subtle technical grid
      ----------------------------------------------- */}
      <div
        className="absolute inset-0 animate-grid-flow"
        style={{
          opacity: 0.12,
          backgroundImage:
            "linear-gradient(rgba(35,175,240,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(35,175,240,0.07) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
          maskImage:
            "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.6) 45%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.6) 45%, transparent 100%)",
        }}
      />

      {/* -----------------------------------------------
          Flowing left aura
      ----------------------------------------------- */}
      <div
        className="absolute left-[-18%] top-[10%] w-[45rem] h-[45rem] rounded-full blur-[110px] animate-aura-flow"
        style={{
          background:
            "radial-gradient(circle, rgba(0,150,255,0.09), transparent 68%)",
        }}
      />

      {/* -----------------------------------------------
          Flowing right aura
      ----------------------------------------------- */}
      <div
        className="absolute right-[-18%] bottom-[-5%] w-[45rem] h-[45rem] rounded-full blur-[120px] animate-aura-flow"
        style={{
          animationDelay: "-7s",
          background:
            "radial-gradient(circle, rgba(0,210,255,0.075), transparent 68%)",
        }}
      />

      {/* -----------------------------------------------
          Large subtle orbital structure
      ----------------------------------------------- */}
      <div
        className="absolute left-1/2 top-[44%] w-[72vw] h-[72vw] max-w-[900px] max-h-[900px] rounded-full animate-orbit"
        style={{
          border: "1px solid rgba(40,190,255,0.035)",
          transform: "translate(-50%, -50%) rotate(0deg)",
        }}
      />

      {/* -----------------------------------------------
          Second orbital structure
      ----------------------------------------------- */}
      <div
        className="absolute left-1/2 top-[44%] w-[48vw] h-[20vw] max-w-[650px] max-h-[260px] rounded-[50%] animate-orbit"
        style={{
          border: "1px solid rgba(70,210,255,0.035)",
          transform: "translate(-50%, -50%) rotate(25deg)",
          animationDuration: "31s",
        }}
      />

      {/* -----------------------------------------------
          Moving light sweep
      ----------------------------------------------- */}
      <div
        className="absolute top-[-20%] bottom-[-20%] left-0 w-[25%] animate-energy-sweep"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(30,190,255,0.045), transparent)",
          filter: "blur(22px)",
        }}
      />

      {/* -----------------------------------------------
          Canvas
      ----------------------------------------------- */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* -----------------------------------------------
          Soft vignette
      ----------------------------------------------- */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 30%, rgba(1,4,10,0.28) 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;