"use client";
import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  waveColors = ["#38bdf8"], // Keep it blue for contrast
  waveWidth = 5, // Thicker wave lines
  backgroundFill = "#000", 
  blur = 0, 
  speed = 0.002,
  waveOpacity = 1, // Keep waves fully visible
  waveHeight = 300, // Make the waves bigger
}) => {
  const canvasRef = useRef(null);
  const noise = createNoise2D();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight); // Make waves fill the whole height

    let nt = 0;

    ctx.filter = `none`;

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = backgroundFill;
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.translate(0, h * 0.4); // Moves the wave higher

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 200, nt) * waveHeight; // Increase wave height
          ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.closePath();
      }

      ctx.restore();
      nt += speed;
      requestAnimationFrame(render);
    };

    render();
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden"> 
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
};
