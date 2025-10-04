import React, { useEffect, useRef } from 'react';
import styles from './Teste.module.css';

const MouseTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext('2d');

    let WIDTH = c.width = window.innerWidth;
    let HEIGHT = c.height = window.innerHeight;

    const mouse = {
      x: 0,
      y: 0,
      isMoved: false
    };

    class Particle {
      constructor() {
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.r = 255;
        this.g = 255;
        this.b = 255;
        this.a = 0;
        this.life = 0;
        this.radius = Math.random() * 5;
      }

      update() {
        if (this.life > 0) {
          this.life -= 2;
          if (this.life < 50) {
            this.vx += Math.random() * 4 - 2;
            this.vy += Math.random() * 4 - 2;
            this.vx *= 0.9;
            this.vy *= 0.9;
            this.x += this.vx;
            this.y += this.vy;
            this.a = this.life / 50;
          }
        }
      }

      render(ctx) {
        ctx.save();
        ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      reset(tx, ty) {
        this.x = tx;
        this.y = ty;
        this.vx = Math.random() * 4 - 1;
        this.vy = Math.random() * 4 - 1;
        this.life = 150;
        this.a = 1;
        this.g = Math.round(255 * (this.x / WIDTH));
        this.b = Math.round(255 * (this.y / HEIGHT));
        this.radius = Math.random() * 5;
      }
    }

    const particles = [];
    const particleCount = 500;
    let idx = 0;
    let particle;

    let tx = 0;
    let ty = HEIGHT / 2;

    const temp = {
      vx: Math.random() * 4 - 2,
      vy: Math.random() * 4 - 2,
      x: WIDTH / 2,
      y: HEIGHT / 2
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const spawn = (target) => {
      tx += (target.x - tx) * 0.2;
      ty += (target.y - ty) * 0.2;

      particles[idx].reset(tx, ty);
      if (++idx >= particles.length) idx = 0;
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isMoved = true;
      spawn(mouse);
    };

    const loop = () => {
      requestAnimationFrame(loop);
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      if (!mouse.isMoved) {
        temp.vx += Math.random() * 4 - 2;
        temp.vy += Math.random() * 4 - 2;
        temp.vx *= 0.98;
        temp.vy *= 0.98;
        temp.x += temp.vx;
        temp.y += temp.vy;

        if (temp.x > WIDTH) {
          temp.x = WIDTH;
          temp.vx *= -1;
        }
        if (temp.x < 0) {
          temp.x = 0;
          temp.vx *= -1;
        }
        if (temp.y > HEIGHT) {
          temp.y = HEIGHT;
          temp.vy *= -1;
        }
        if (temp.y < 0) {
          temp.y = 0;
          temp.vy *= -1;
        }

        spawn(temp);
      }

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.update();
        p.render(ctx);
      }
    };

    // Iniciar animação
    requestAnimationFrame(loop);

    // Evento mousemove no documento inteiro
    document.addEventListener('mousemove', onMouseMove);

    // Redimensionamento
    const onResize = () => {
      WIDTH = c.width = window.innerWidth;
      HEIGHT = c.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles['mouse-trail-canvas']} />;
};

export default MouseTrail;
