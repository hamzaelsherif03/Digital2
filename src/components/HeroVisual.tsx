"use client";

import { useMobile } from './hooks/use-mobile';
import { cn } from './lib/utils';
import { useEffect, useRef } from 'react';

export default function HeroVisual() {
  const isMobile = useMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.setAttribute('data-visible', 'true');
    }
  }, []);
  
  return (
    <div className="relative w-full flex justify-center mt-6 sm:mt-8 md:mt-12 lg:mt-16 mb-6 sm:mb-8 md:mb-12 lg:mb-16">
      <div 
        ref={containerRef}
        className={cn(
          "w-full max-w-6xl relative perspective-2000 opacity-0 transition-opacity duration-1000 data-[visible=true]:opacity-100",
          isMobile ? 'h-[250px] sm:h-[300px]' : 'h-[400px] lg:h-[500px]'
        )}
      >
        {/* Main floating geometric shape */}
        <div className="absolute inset-0 flex items-center justify-center">
          
          {/* Central hexagon with glassmorphism - Optimized */}
          <div className={cn(
            "relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56",
            "bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5",
            "backdrop-blur-xl rounded-3xl border border-primary/30",
            "shadow-2xl transform-gpu will-change-transform",
            "animate-pulse"
          )}
          style={{
            animation: isMobile 
              ? 'floatMobile 4s ease-in-out infinite'
              : 'float3D 20s linear infinite, bobbing 8s ease-in-out infinite'
          }}>
            
            {/* Inner rotating element - Simplified */}
            <div className={cn(
              "absolute inset-4 sm:inset-6 rounded-2xl",
              "bg-gradient-to-tr from-primary/30 to-primary/10",
              "border border-primary/40 backdrop-blur-sm",
              "transform-gpu will-change-transform"
            )}
            style={{
              animation: isMobile 
                ? 'innerRotateMobile 3s ease-in-out infinite'
                : 'innerRotate 12s linear infinite, scale 4s ease-in-out infinite'
            }}>
              
              {/* Core light effect */}
              <div className="absolute inset-2 rounded-xl bg-primary/20 animate-pulse" 
                   style={{ animationDuration: '2s' }} />
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/60 rounded-full animate-bounce" 
                 style={{ animationDelay: '0s', animationDuration: '2s' }} />
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary/40 rounded-full animate-bounce" 
                 style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
          </div>

          {/* Satellite elements - Simplified */}
          {[...Array(isMobile ? 3 : 6)].map((_, i) => {
            const angle = (360 / (isMobile ? 3 : 6)) * i;
            const radius = isMobile ? 80 : 120;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <div
                key={i}
                className={cn(
                  "absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full",
                  "bg-gradient-to-br from-primary/40 to-primary/20",
                  "border border-primary/50 backdrop-blur-sm",
                  "transform-gpu will-change-transform"
                )}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  animation: `satellite${i} ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            );
          })}

          {/* Ambient particles - Ultra simplified */}
          {!isMobile && [...Array(8)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animation: `particle ${2 + Math.random() * 1}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-60" />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float3D {
          0%, 100% { transform: rotateY(0deg) rotateX(0deg); }
          25% { transform: rotateY(90deg) rotateX(5deg); }
          50% { transform: rotateY(180deg) rotateX(0deg); }
          75% { transform: rotateY(270deg) rotateX(-5deg); }
        }
        
        @keyframes floatMobile {
          0%, 100% { transform: scale(1) translateY(0px); }
          50% { transform: scale(1.05) translateY(-5px); }
        }
        
        @keyframes bobbing {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes innerRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes innerRotateMobile {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes satellite0 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
        
        @keyframes satellite1 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.2); }
        }
        
        @keyframes satellite2 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
        }
        
        @keyframes satellite3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-12px) scale(1.15); }
        }
        
        @keyframes satellite4 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-18px) scale(1.25); }
        }
        
        @keyframes satellite5 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-6px) scale(1.08); }
        }
        
        @keyframes particle {
          0%, 100% { opacity: 0; transform: translateY(0px) scale(0); }
          50% { opacity: 0.8; transform: translateY(-30px) scale(1); }
        }
        
        .perspective-2000 {
          perspective: 2000px;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-from), var(--tw-gradient-to));
        }
      `}</style>
    </div>
  );
}