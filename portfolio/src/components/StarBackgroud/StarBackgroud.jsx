
import React, { useState, useEffect, useRef } from 'react';
import styles from './StarBackgroud.module.css';
import { useTheme } from '../../hooks/ThemeContext';

export const StarBackground = () => {
  const { isDark } = useTheme();
  const [stars, setStars] = useState([]);
  const [activeMeteors, setActiveMeteors] = useState([]);
  const meteorTimer = useRef(null);
  const meteorId    = useRef(0);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const generate = () => {
      // Reduzir estrelas em mobile (mais que 3x menos)
      const divisor = isMobile ? 18000 : 6500;
      const count = Math.floor((window.innerWidth * window.innerHeight) / divisor);
      const newStars = Array.from({ length: count }, (_, i) => {
        const roll = Math.random();
        let size, baseOpacity, twinkleDuration, glow;

        if (roll < 0.55) {
          size = Math.random() * 0.7 + 0.2; baseOpacity = Math.random() * 0.25 + 0.08;
          twinkleDuration = Math.random() * 6 + 5; glow = false;
        } else if (roll < 0.88) {
          size = Math.random() * 1.1 + 0.7; baseOpacity = Math.random() * 0.35 + 0.28;
          twinkleDuration = Math.random() * 4 + 2.5; glow = false;
        } else {
          size = Math.random() * 1.6 + 1.4; baseOpacity = Math.random() * 0.25 + 0.65;
          twinkleDuration = Math.random() * 2.5 + 1.2; glow = true;
        }

        const t = Math.random();
        let color, glowColor, lightColor, lightGlow;
        if      (t < 0.55) { color='#ffffff'; glowColor='rgba(255,255,255,0.6)';  lightColor='#6366f1'; lightGlow='rgba(99,102,241,0.25)';  }
        else if (t < 0.68) { color='#fff5e4'; glowColor='rgba(255,220,160,0.5)';  lightColor='#8b5cf6'; lightGlow='rgba(139,92,246,0.25)';  }
        else if (t < 0.78) { color='#ddeeff'; glowColor='rgba(160,200,255,0.5)';  lightColor='#6366f1'; lightGlow='rgba(99,102,241,0.2)';   }
        else if (t < 0.86) { color='#ffccaa'; glowColor='rgba(255,180,100,0.5)';  lightColor='#ec4899'; lightGlow='rgba(236,72,153,0.25)';  }
        else if (t < 0.93) { color='#6366f1'; glowColor='rgba(99,102,241,0.7)';   lightColor='#6366f1'; lightGlow='rgba(99,102,241,0.45)';  }
        else               { color='#ec4899'; glowColor='rgba(236,72,153,0.7)';   lightColor='#ec4899'; lightGlow='rgba(236,72,153,0.45)';  }

        return { id:i, size, x:Math.random()*100, y:Math.random()*100, baseOpacity,
                 color, glowColor, lightColor, lightGlow, glow, twinkleDuration,
                 twinkleDelay: Math.random() * 8 };
      });
      setStars(newStars);
    };
    generate();
    window.addEventListener('resize', generate);
    return () => window.removeEventListener('resize', generate);
  }, []);

  useEffect(() => {
    // Desabilitar meteoros em mobile
    if (isMobile) return;
    
    const spawnMeteor = () => {
      const id = meteorId.current++;
      const big = Math.random() < 0.2;
      const meteor = {
        id, big,
        x:        6  + Math.random() * 68,
        y:        1  + Math.random() * 32,
        duration: big ? Math.random() * 0.7 + 0.5 : Math.random() * 0.9 + 0.5,
        length:   big ? 150 + Math.random() * 90   : 55  + Math.random() * 90,
        colored:  Math.random() < 0.35,
      };
      setActiveMeteors(prev => [...prev, meteor]);
      setTimeout(() => setActiveMeteors(prev => prev.filter(m => m.id !== id)),
        (meteor.duration + 0.8) * 1000);
    };

    const schedule = () => {
      const delay = Math.random() * 1600 + 600;
      meteorTimer.current = setTimeout(() => {
        const burst = Math.random() < 0.25 ? 3 : Math.random() < 0.45 ? 2 : 1;
        for (let i = 0; i < burst; i++)
          setTimeout(spawnMeteor, i * (150 + Math.random() * 200));
        schedule();
      }, delay);
    };

    schedule();
    return () => clearTimeout(meteorTimer.current);
  }, []);

  return (
    <div className={`${styles.starsContainer} ${isDark ? '' : styles.lightMode}`}>
      {stars.map(star => (
        <div
          key={`star-${star.id}`}
          className={`${styles.star} ${star.glow ? styles.starGlow : ''}`}
          style={{
            width:`${star.size}px`, height:`${star.size}px`,
            left:`${star.x}%`, top:`${star.y}%`,
            '--sc':  star.color,   '--sgc': star.glowColor,
            '--lc':  star.lightColor, '--lgc': star.lightGlow,
            '--bo':  star.baseOpacity,
            animationDuration:`${star.twinkleDuration}s`,
            animationDelay:`${star.twinkleDelay}s`,
          }}
        />
      ))}
      {activeMeteors.map(meteor => (
        <div
          key={`meteor-${meteor.id}`}
          className={`${styles.meteor} ${meteor.colored ? styles.meteorColored:''} ${meteor.big ? styles.meteorBig:''}`}
          style={{
            left:`${meteor.x}%`, top:`${meteor.y}%`,
            '--ml':`${meteor.length}px`,
            animationDuration:`${meteor.duration}s`,
          }}
        />
      ))}
    </div>
  );
};