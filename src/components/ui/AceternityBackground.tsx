'use client';

import { useEffect, useRef } from 'react';

export function AceternityBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const properties = {
      bgColor: 'rgba(10, 10, 15, 1)',
      particleColor: 'rgba(69, 245, 66, 0.8)',
      particleRadius: 2,
      particleCount: 100,
      particleMaxVelocity: 0.5,
      lineLength: 150,
      particleLife: 6,
    };

    class Particle {
      x: number;
      y: number;
      velocityX: number;
      velocityY: number;
      life: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
        this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
        this.life = Math.random() * properties.particleLife * 60;
      }

      position() {
        if ((this.x + this.velocityX > width && this.velocityX > 0) || (this.x + this.velocityX < 0 && this.velocityX < 0)) {
          this.velocityX *= -1;
        } else {
          this.x += this.velocityX;
        }
        
        if ((this.y + this.velocityY > height && this.velocityY > 0) || (this.y + this.velocityY < 0 && this.velocityY < 0)) {
          this.velocityY *= -1;
        } else {
          this.y += this.velocityY;
        }
      }

      reDraw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
        ctx!.closePath();
        ctx!.fillStyle = properties.particleColor;
        ctx!.fill();
      }
    }

    function reDrawBackground() {
      if (!ctx) return;
      ctx.fillStyle = properties.bgColor;
      ctx.fillRect(0, 0, width, height);
    }

    function drawLines() {
      let x1, y1, x2, y2, length, opacity;
      for (let i = 0; i < particles.length; i++) {
        for (let j = 0; j < particles.length; j++) {
          x1 = particles[i].x;
          y1 = particles[i].y;
          x2 = particles[j].x;
          y2 = particles[j].y;
          length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          if (length < properties.lineLength) {
            opacity = 1 - length / properties.lineLength;
            if (!ctx) return;
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.closePath();
            ctx.stroke();
          }
        }
      }
    }

    function reDrawParticles() {
      for (let i = 0; i < particles.length; i++) {
        particles[i].reDraw();
        particles[i].position();
      }
    }

    function loop() {
      if (!ctx) return;
      reDrawBackground();
      reDrawParticles();
      drawLines();
      requestAnimationFrame(loop);
    }

    function init() {
      for (let i = 0; i < properties.particleCount; i++) {
        particles.push(new Particle());
      }
      loop();
    }

    function handleResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    init();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
