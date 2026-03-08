import React, { useState, useEffect } from 'react';
import styles from './StarBackgroud.module.css';
import { useTheme } from '../../hooks/ThemeContext'; // Importe o tema aqui

export const StarBackground = () => {
    const { isDark } = useTheme();
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
            const newStars = [];
            for (let i = 0; i < numberOfStars; i++) {
                newStars.push({
                    id: i,
                    size: Math.random() * 2 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: Math.random() * 0.5 + 0.3,
                    duration: Math.random() * 3 + 2,
                });
            }
            setStars(newStars);
        };

        const generateMeteors = () => {
    const numberOfMeteors = 6;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
        newMeteors.push({
            id: i,
            x: 30 + Math.random() * 40, 
            y: 10 + Math.random() * 40, 
            delay: Math.random() * 10,
            duration: Math.random() * 2 + 2,
        });
    }
    setMeteors(newMeteors);
};

        generateStars();
        generateMeteors();

        window.addEventListener('resize', generateStars);
        return () => window.removeEventListener('resize', generateStars);
    }, []);

    return (
        /* Adicionamos uma classe condicional baseada no tema */
        <div className={`${styles.starsContainer} ${isDark ? '' : styles.lightMode}`}>
            {stars.map(star => (
                <div
                    key={`star-${star.id}`}
                    className={styles.starParticle}
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity, // Corrigido de opanpcity
                        animationDuration: `${star.duration}s`,
                    }}
                />
            ))}

            {meteors.map(meteor => (
                <div
                    key={`meteor-${meteor.id}`}
                    className={styles.meteor}
                    style={{
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        animationDelay: `${meteor.delay}s`,
                        animationDuration: `${meteor.duration}s`,
                    }}
                />
            ))}
        </div>
    );
};