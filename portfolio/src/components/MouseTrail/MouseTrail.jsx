import React, { useEffect, useRef } from 'react';
import styles from './MouseTrail.module.css';

const MouseTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {

    if (window.innerWidth < 600) {
      return;
    }

    const c = canvasRef.current;
    const ctx = c.getContext('2d');

    let WIDTH  = c.width  = window.innerWidth;
    let HEIGHT = c.height = window.innerHeight;

    // Paleta do portfólio: roxo → rosa → índigo
    const PALETTE = [
      { r: 99,  g: 102, b: 241 }, // indigo  #6366f1
      { r: 139, g: 92,  b: 246 }, // violet  #8b5cf6
      { r: 168, g: 85,  b: 247 }, // purple  #a855f7
      { r: 236, g: 72,  b: 153 }, // pink    #ec4899
      { r: 255, g: 255, b: 255 }, // white spark
    ];

    const mouse = { x: 0, y: 0, isMoved: false };

    class Particle {
      constructor() {
        this.x = 0; this.y = 0;
        this.vx = 0; this.vy = 0;
        this.r = 255; this.g = 255; this.b = 255;
        this.a = 0;
        this.life = 0;
        this.radius = 0;
        this.glow = false;
      }

      reset(tx, ty) {
        const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        this.x = tx + (Math.random() - 0.5) * 6;
        this.y = ty + (Math.random() - 0.5) * 6;
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = (Math.random() - 0.5) * 3;
        this.r  = color.r;
        this.g  = color.g;
        this.b  = color.b;
        this.a  = 1;
        this.life   = 120 + Math.random() * 60;
        this.maxLife = this.life;
        this.radius = 1.5 + Math.random() * 3.5;
        this.glow   = Math.random() < 0.25; // 25% das partículas têm glow
      }

      update() {
        if (this.life <= 0) return;
        this.life -= 1.8;
        this.vx *= 0.94;
        this.vy *= 0.94;
        this.x  += this.vx;
        this.y  += this.vy;
        this.a   = Math.max(0, this.life / this.maxLife);
        // encolhe no final da vida
        this.radius *= 0.998;
      }

      render(ctx) {
        if (this.life <= 0 || this.a <= 0) return;
        ctx.save();

        if (this.glow) {
          ctx.shadowColor = `rgba(${this.r},${this.g},${this.b},${this.a * 0.8})`;
          ctx.shadowBlur  = this.radius * 6;
        }

        ctx.globalAlpha = this.a;
        ctx.fillStyle   = `rgb(${this.r},${this.g},${this.b})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.1, this.radius), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const PARTICLE_COUNT = 450;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
    let idx = 0;

    let tx = WIDTH  / 2;
    let ty = HEIGHT / 2;

    const temp = {
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      x: WIDTH  / 2,
      y: HEIGHT / 2,
    };

    const spawn = (target) => {
      tx += (target.x - tx) * 0.18;
      ty += (target.y - ty) * 0.18;
      particles[idx].reset(tx, ty);
      if (++idx >= PARTICLE_COUNT) idx = 0;
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isMoved = true;
      spawn(mouse);
    };

    let animId;
    const loop = () => {
      animId = requestAnimationFrame(loop);
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      if (!mouse.isMoved) {
        temp.vx += (Math.random() - 0.5) * 0.8;
        temp.vy += (Math.random() - 0.5) * 0.8;
        temp.vx *= 0.97;
        temp.vy *= 0.97;
        temp.x  += temp.vx;
        temp.y  += temp.vy;

        if (temp.x > WIDTH)  { temp.x = WIDTH;  temp.vx *= -1; }
        if (temp.x < 0)      { temp.x = 0;      temp.vx *= -1; }
        if (temp.y > HEIGHT) { temp.y = HEIGHT;  temp.vy *= -1; }
        if (temp.y < 0)      { temp.y = 0;       temp.vy *= -1; }

        spawn(temp);
      }

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles[i].update();
        particles[i].render(ctx);
      }
    };

    requestAnimationFrame(loop);
    document.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      WIDTH  = c.width  = window.innerWidth;
      HEIGHT = c.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles['mouse-trail-canvas']} />;
};

export default MouseTrail;