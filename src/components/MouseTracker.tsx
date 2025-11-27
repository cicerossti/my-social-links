import { useEffect, useState } from "react";

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Glow effect seguindo o mouse */}
      <div
        className="pointer-events-none fixed z-0"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "400px",
          height: "400px",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(74, 222, 128, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
          transition: "left 0.3s ease-out, top 0.3s ease-out",
        }}
      />
      
      {/* Matrix rain effect sutil */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green text-xs font-mono matrix-rain-item"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {Array.from({ length: 10 }).map((_, j) => (
              <div key={j} style={{ opacity: 1 - j * 0.1 }}>
                {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default MouseTracker;
