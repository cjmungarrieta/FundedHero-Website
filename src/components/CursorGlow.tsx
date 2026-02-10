import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -300, y: -300 });
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 300, y: e.clientY - 300 });

      const target = e.target as HTMLElement;
      const isInteractiveElement =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[data-interactive="true"]') ||
        target.classList.contains('glass') ||
        target.classList.contains('glass-premium') ||
        target.classList.contains('glass-ultra');

      setIsInteracting(!!isInteractiveElement);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="cursor-glow-element"
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: isInteracting
          ? 'radial-gradient(circle, rgba(228, 184, 51, 0.15) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(228, 184, 51, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'screen',
        transition: 'background 0.3s ease, transform 0.1s ease',
        transform: isInteracting ? 'scale(0.8)' : 'scale(1)',
      }}
    />
  );
}
