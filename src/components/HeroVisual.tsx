import { motion } from 'framer-motion';
import { useMobile } from './hooks/use-mobile';

export default function HeroVisual() {
  const isMobile = useMobile();
  
  // Mobile-optimized animation variants
  const mobileVariants = {
    // Simplified 3D animations for mobile
    centralShape: {
      animate: isMobile ? {
        scale: [1, 1.05, 1],
        opacity: [0.8, 1, 0.8],
      } : {
        rotateY: [0, 360],
        rotateX: [0, 15, 0, -15, 0],
      },
      transition: isMobile ? {
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      } : {
        rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
        rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      }
    },
    
    // Simplified inner element animations
    innerElement: {
      animate: isMobile ? {
        scale: [1, 1.1, 1],
      } : {
        scale: [1, 1.1, 1],
        rotate: [0, 180, 360],
      },
      transition: isMobile ? {
        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      } : {
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 12, repeat: Infinity, ease: "linear" },
      }
    },
    
    // Simplified satellite animations
    satellite: (i: number) => ({
      animate: isMobile ? {
        y: [0, -10, 0],
        scale: [1, 1.1, 1],
      } : {
        y: [0, -20, 0],
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      },
      transition: isMobile ? {
        y: { duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 3 + i * 0.2, repeat: Infinity, ease: "easeInOut" },
        delay: i * 0.3,
      } : {
        y: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
        scale: { duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
        delay: i * 0.5,
      }
    }),
    
    // Simplified particle animations
    particle: (i: number) => ({
      animate: isMobile ? {
        y: [0, -50, 0],
        opacity: [0, 0.8, 0],
      } : {
        y: [0, -100, 0],
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      },
      transition: isMobile ? {
        duration: 2 + Math.random() * 1,
        repeat: Infinity,
        delay: Math.random() * 2,
        ease: "easeInOut",
      } : {
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 3,
        ease: "easeInOut",
      }
    })
  };
  
  return (
    <div className="relative w-full flex justify-center mt-8 md:mt-16 mb-8 md:mb-16">
      <div className={`w-full max-w-6xl relative ${isMobile ? 'h-[300px]' : 'h-[500px]'} perspective-2000`}>
        {/* Main floating geometric shape */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Central hexagon with glassmorphism - Mobile Optimized */}
          <motion.div
            className={`relative bg-gradient-to-br from-primary/20 via-primary/10 to-transparent backdrop-blur-xl border border-primary/20 rounded-showcase shadow-2xl shadow-primary/20 ${
              isMobile ? 'w-48 h-48' : 'w-80 h-80'
            }`}
            animate={mobileVariants.centralShape.animate}
            transition={mobileVariants.centralShape.transition}
            style={!isMobile ? { transformStyle: "preserve-3d" } : {}}
          >
            {/* Inner glow effect */}
            <div className={`absolute bg-gradient-to-br from-primary/30 to-transparent rounded-feature blur-xl ${
              isMobile ? 'inset-2' : 'inset-4'
            }`} />
            
            {/* Digital acceleration icon representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className={`bg-gradient-to-br from-primary to-primary/60 rounded-feature flex items-center justify-center shadow-luxury ${
                  isMobile ? 'w-20 h-20' : 'w-32 h-32'
                }`}
                animate={mobileVariants.innerElement.animate}
                transition={mobileVariants.innerElement.transition}
              >
                <motion.div
                  className={`bg-background rounded-card flex items-center justify-center ${
                    isMobile ? 'w-10 h-10' : 'w-16 h-16'
                  }`}
                  animate={!isMobile ? {
                    rotate: [0, -360],
                  } : {}}
                  transition={!isMobile ? {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  } : {}}
                >
                  <div className={`bg-gradient-to-br from-primary to-primary/80 rounded-element ${
                    isMobile ? 'w-5 h-5' : 'w-8 h-8'
                  }`} />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating satellite elements - Reduced count on mobile */}
        {[...Array(isMobile ? 3 : 6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-xl border border-primary/20 rounded-card shadow-lg ${
              isMobile ? 'w-10 h-10' : 'w-16 h-16'
            }`}
            style={{
              left: isMobile ? `${30 + (i * 20)}%` : `${20 + (i * 12)}%`,
              top: isMobile ? `${40 + (i % 2) * 20}%` : `${30 + (i % 2) * 40}%`,
            }}
            animate={mobileVariants.satellite(i).animate}
            transition={mobileVariants.satellite(i).transition}
          >
            <div className={`w-full h-full bg-gradient-to-br from-primary/40 to-transparent rounded-card blur-sm ${
              isMobile ? 'opacity-60' : 'opacity-100'
            }`} />
          </motion.div>
        ))}

        {/* Background grid pattern - Simplified on mobile */}
        {!isMobile && (
          <motion.div
            className="absolute inset-0 opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-primary/30"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </motion.div>
        )}

        {/* Particle effects - Reduced count and complexity on mobile */}
        {[...Array(isMobile ? 6 : 12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute bg-primary/60 rounded-full ${
              isMobile ? 'w-1 h-1' : 'w-2 h-2'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={mobileVariants.particle(i).animate}
            transition={mobileVariants.particle(i).transition}
          />
        ))}

        {/* Ambient light effects - Simplified on mobile */}
        <motion.div
          className={`absolute bg-primary/10 rounded-full blur-3xl ${
            isMobile ? 'w-48 h-48 top-1/3 left-1/3' : 'w-96 h-96 top-1/4 left-1/4'
          }`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: isMobile ? 4 : 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {!isMobile && (
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        )}
      </div>
    </div>
  );
}