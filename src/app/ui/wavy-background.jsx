"use client";
import { useEffect, useRef, useState } from "react";
import { createNoise2D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  colors,
  waveWidth = 10, // Thinner for smoother movement
  backgroundFill = "#000",
  blur = 10,
  waveOpacity = 1,
  speed = 0.002,
  waveHeight = 100, // Default height, will be modified by music
  audioSrc, // Add an audio source prop
}) => {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const [audioContext, setAudioContext] = useState(null);
  const [analyzer, setAnalyzer] = useState(null);
  const noise = createNoise2D();
  
  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    
    let nt = 0;
    
    const setupAudio = () => {
      if (!audioSrc) return;
      if (audioContext) return; // Prevent multiple initializations

      const context = new (window.AudioContext || window.webkitAudioContext)();
      const audio = new Audio(audioSrc);
      audio.crossOrigin = "anonymous"; // Prevent CORS issues
      audio.loop = true; // Make it loop
      audio.play();

      const source = context.createMediaElementSource(audio);
      const analyser = context.createAnalyser();
      analyser.fftSize = 256; // Adjust for smoother frequency analysis

      source.connect(analyser);
      analyser.connect(context.destination);

      setAudioContext(context);
      setAnalyzer(analyser);
      audioRef.current = audio;
    };

    setupAudio();

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = backgroundFill;
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.translate(0, h * 0.5);

      let freqData = new Uint8Array(128); // Store frequency data
      if (analyzer) {
        analyzer.getByteFrequencyData(freqData);
      }

      const beatStrength = freqData.reduce((sum, val) => sum + val, 0) / freqData.length; // Average intensity
      const dynamicWaveHeight = Math.max(50, (beatStrength / 256) * waveHeight * 2); // Scale waves to beat

      for (let i = 0; i < 3; i++) { // Fewer waves for a cleaner effect
        ctx.beginPath();
        ctx.lineWidth = waveWidth;
        ctx.strokeStyle = waveColors[i % waveColors.length];

        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 200, nt) * dynamicWaveHeight;
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
    
  }, [analyzer, audioContext]); // Only run when audio is available

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
      <audio ref={audioRef} src={audioSrc} loop></audio> {/* Hidden audio element */}
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
};
