import { useEffect, useRef } from 'react';

export default function Starfield() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const starCount = 150;
    const stars: HTMLDivElement[] = [];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const isGold = Math.random() < 0.15;

      star.className = `star ${isGold ? 'star-gold' : ''}`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDuration = `${15 + Math.random() * 25}s`;
      star.style.animationDelay = `${Math.random() * 10}s`;
      star.style.opacity = `${0.3 + Math.random() * 0.7}`;

      container.appendChild(star);
      stars.push(star);
    }

    return () => {
      stars.forEach(star => star.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    />
  );
}
