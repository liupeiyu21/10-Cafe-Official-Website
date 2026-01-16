import { useEffect, useRef } from "react";

const WaveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight * 0.3;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#8C8745";

      const topY = height * 0.35;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, topY);

      ctx.bezierCurveTo(
        width * 0.05, topY + height * 0.58,
        width * 0.18, topY + height * 0.88,
        width * 0.22, topY + height * 0.45
      );

      ctx.bezierCurveTo(
        width * 0.32, topY,
        width * 0.42, topY + height * 0.85,
        width * 0.52, topY + height * 0.38
      );

      ctx.bezierCurveTo(
        width * 0.62, topY + height * 0.45,
        width * 0.72, topY + height * 0.05,
        width * 0.82, topY + height * 0.02
      );

      ctx.bezierCurveTo(
        width * 0.9, topY,
        width, topY + height * 0.2,
        width, topY
      );

      ctx.lineTo(width, 0);
      ctx.closePath();
      ctx.fill();
    };

    draw();

    let timer: number;
    const onResize = () => {
      clearTimeout(timer);
      timer = window.setTimeout(draw, 100);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full z-0 pointer-events-none"
    />
  );
};

export default WaveCanvas;
