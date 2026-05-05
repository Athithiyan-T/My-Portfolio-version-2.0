import React, { useEffect, useState } from 'react';
import './ParticleScene.css';

const ParticleScene = () => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    // Generate random shapes on mount
    const newShapes = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 50 + 15, // 15px to 65px
      left: Math.random() * 100,     // 0% to 100%
      animationDuration: Math.random() * 25 + 15, // 15s to 40s
      delay: Math.random() * -30,    // Negative delay so they are visible immediately
      type: Math.random() > 0.6 ? 'triangle' : 'square',
    }));
    setShapes(newShapes);
  }, []);

  return (
    <div className="antigravity-container">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`shape ${shape.type}`}
          style={{
            width: shape.type === 'square' ? `${shape.size}px` : 0,
            height: shape.type === 'square' ? `${shape.size}px` : 0,
            left: `${shape.left}vw`,
            animationDuration: `${shape.animationDuration}s`,
            animationDelay: `${shape.delay}s`,
            borderBottomWidth: shape.type === 'triangle' ? `${shape.size}px` : undefined,
            borderLeftWidth: shape.type === 'triangle' ? `${shape.size / 2}px` : undefined,
            borderRightWidth: shape.type === 'triangle' ? `${shape.size / 2}px` : undefined,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleScene;
