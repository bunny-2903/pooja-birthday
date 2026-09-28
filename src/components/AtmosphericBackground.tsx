"use client";

import { useEffect, useRef } from "react";

export default function AtmosphericBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Stars
    const starCount = Math.floor((width * height) / 4000);
    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speed: number;
      twinkleSpeed: number;
    }> = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.3,
        alpha: Math.random(),
        speed: Math.random() * 0.05 + 0.01,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    // Glowing particles & hearts
    const floatingItems: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      alpha: number;
      type: "particle" | "heart" | "petal";
      rotation: number;
      rotSpeed: number;
    }> = [];

    const maxItems = 45;
    for (let i = 0; i < maxItems; i++) {
      floatingItems.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 6 + 2,
        speedY: Math.random() * 0.4 + 0.1,
        speedX: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.5 + 0.2,
        type: Math.random() > 0.85 ? "heart" : Math.random() > 0.7 ? "petal" : "particle",
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    const drawHeart = (
      context: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      size: number,
      color: string
    ) => {
      context.save();
      context.beginPath();
      context.fillStyle = color;
      const topCurveHeight = size * 0.3;
      context.moveTo(cx, cy + topCurveHeight);
      // top left curve
      context.bezierCurveTo(
        cx,
        cy,
        cx - size / 2,
        cy,
        cx - size / 2,
        cy + topCurveHeight
      );
      // bottom left curve
      context.bezierCurveTo(
        cx - size / 2,
        cy + (size + topCurveHeight) / 2,
        cx,
        cy + size,
        cx,
        cy + size
      );
      // bottom right curve
      context.bezierCurveTo(
        cx,
        cy + size,
        cx + size / 2,
        cy + (size + topCurveHeight) / 2,
        cx + size / 2,
        cy + topCurveHeight
      );
      // top right curve
      context.bezierCurveTo(
        cx + size / 2,
        cy,
        cx,
        cy,
        cx,
        cy + topCurveHeight
      );
      context.closePath();
      context.fill();
      context.restore();
    };

    const drawPetal = (
      context: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      size: number,
      rotation: number,
      color: string
    ) => {
      context.save();
      context.translate(cx, cy);
      context.rotate(rotation);
      context.beginPath();
      context.fillStyle = color;
      context.ellipse(0, 0, size * 0.6, size * 1.2, 0, 0, Math.PI * 2);
      context.fill();
      context.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, width, height);
      bgGradient.addColorStop(0, "#080508");
      bgGradient.addColorStop(0.4, "#100914");
      bgGradient.addColorStop(0.7, "#1c0b17");
      bgGradient.addColorStop(1, "#080508");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Render Stars
      for (const star of stars) {
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0.1) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 245, 235, ${Math.max(0.1, Math.min(1, star.alpha))})`;
        ctx.fill();
      }

      // Render Floating Items (Particles, Hearts, Petals)
      for (const item of floatingItems) {
        item.y -= item.speedY;
        item.x += Math.sin(item.y * 0.01) * 0.3 + item.speedX;
        item.rotation += item.rotSpeed;

        if (item.y < -20) {
          item.y = height + 20;
          item.x = Math.random() * width;
        }

        if (item.type === "heart") {
          drawHeart(
            ctx,
            item.x,
            item.y,
            item.size * 1.5,
            `rgba(244, 114, 182, ${item.alpha * 0.7})`
          );
        } else if (item.type === "petal") {
          drawPetal(
            ctx,
            item.x,
            item.y,
            item.size,
            item.rotation,
            `rgba(90, 22, 48, ${item.alpha * 0.8})`
          );
        } else {
          ctx.beginPath();
          ctx.arc(item.x, item.y, item.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(254, 240, 138, ${item.alpha * 0.6})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = "rgba(244, 114, 182, 0.5)";
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,5,8,0.75)_80%,rgba(8,5,8,0.95)_100%)] pointer-events-none" />

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.035] bg-grain pointer-events-none" />
    </div>
  );
}
