"use client";

import { useEffect, useRef } from "react";

const ShimmerShapes: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Function to draw dots
    const drawDots = (ctx: CanvasRenderingContext2D, maskPath: Path2D) => {
      const spacing = 20;
      const radius = 1.5;
      ctx.save();
      ctx.clip(maskPath);

      for (let y = 0; y < canvas.height; y += spacing) {
        for (let x = 0; x < canvas.width; x += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
          ctx.fill();
          ctx.closePath();
        }
      }

      ctx.restore();
    };

    // Function to draw geometric shapes
    const drawShapes = () => {
      const maskPath = new Path2D();

      // Semi-circle (left shape)
      maskPath.moveTo(canvas.width * 0.2, canvas.height * 0.5);
      maskPath.arc(
        canvas.width * 0.2,
        canvas.height * 0.5,
        canvas.height * 0.3,
        Math.PI,
        0,
        false,
      );

      // Rounded rectangle (center shape)
      const rectX = canvas.width * 0.35;
      const rectY = canvas.height * 0.2;
      const rectWidth = canvas.width * 0.3;
      const rectHeight = canvas.height * 0.6;
      const cornerRadius = 100;

      maskPath.moveTo(rectX + cornerRadius, rectY);
      maskPath.lineTo(rectX + rectWidth - cornerRadius, rectY);
      maskPath.arcTo(
        rectX + rectWidth,
        rectY,
        rectX + rectWidth,
        rectY + cornerRadius,
        cornerRadius,
      );
      maskPath.lineTo(rectX + rectWidth, rectY + rectHeight - cornerRadius);
      maskPath.arcTo(
        rectX + rectWidth,
        rectY + rectHeight,
        rectX + rectWidth - cornerRadius,
        rectY + rectHeight,
        cornerRadius,
      );
      maskPath.lineTo(rectX + cornerRadius, rectY + rectHeight);
      maskPath.arcTo(
        rectX,
        rectY + rectHeight,
        rectX,
        rectY + rectHeight - cornerRadius,
        cornerRadius,
      );
      maskPath.lineTo(rectX, rectY + cornerRadius);
      maskPath.arcTo(rectX, rectY, rectX + cornerRadius, rectY, cornerRadius);

      // Draw dots inside shapes
      drawDots(ctx, maskPath);
    };

    // Draw the background
    const drawBackground = () => {
      ctx.fillStyle = "#1e1e1e"; // Dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Render the entire canvas
    const render = () => {
      drawBackground();
      drawShapes();
    };

    render();

    // Handle resizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        background: "#1e1e1e",
      }}
      className="dots-canvas"
    />
  );
};

export default ShimmerShapes;
