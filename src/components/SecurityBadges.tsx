'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, CheckCircle, Globe, Award } from 'lucide-react'

interface SecurityBadge {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  verified: boolean
}

const securityBadges: SecurityBadge[] = [
  {
    id: 'ssl',
    icon: <Lock className="w-5 h-5" />,
    title: 'SSL Secured',
    description: 'Secure data transmission',
    verified: true
  },
  {
    id: 'privacy',
    icon: <Eye className="w-5 h-5" />,
    title: 'Privacy Protected',
    description: 'Data protection compliant',
    verified: true
  },
  {
    id: 'gdpr',
    icon: <Shield className="w-5 h-5" />,
    title: 'GDPR Compliant',
    description: 'European privacy standards',
    verified: true
  },
  {
    id: 'secure-hosting',
    icon: <Globe className="w-5 h-5" />,
    title: 'Secure Hosting',
    description: 'Enterprise-grade infrastructure',
    verified: true
  },
  {
    id: 'business-verified',
    icon: <Award className="w-5 h-5" />,
    title: 'Business Verified',
    description: 'Legitimate business entity',
    verified: true
  }
]

const badgeHover = {
  scale: 1.1,
  transition: { type: "spring", stiffness: 400, damping: 10 }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
}

interface SecurityBadgesProps {
  variant?: 'horizontal' | 'vertical'
  showDescription?: boolean
  className?: string
}

export default function SecurityBadges({ 
  variant = 'horizontal', 
  showDescription = false,
  className = ''
}: SecurityBadgesProps) {
  return (
    <motion.div 
      className={`${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className={`flex ${variant === 'horizontal' ? 'flex-row flex-wrap justify-center gap-4' : 'flex-col gap-3'}`}>
        {securityBadges.map((badge, index) => (
          <motion.div
            key={badge.id}
            className="group relative"
            variants={badgeVariants}
            whileHover={badgeHover}
            custom={index}
          >
            <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-200">
              <div className="text-primary">
                {badge.icon}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-white">
                    {badge.title}
                  </span>
                  {badge.verified && (
                    <CheckCircle className="w-3 h-3 text-green-400" />
                  )}
                </div>
                {showDescription && (
                  <span className="text-xs text-gray-400">
                    {badge.description}
                  </span>
                )}
              </div>
            </div>
            
            {/* Tooltip for descriptions when not showing them */}
            {!showDescription && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                {badge.description}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Trust Signals Section Component
interface TrustSignalsSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function TrustSignalsSection({ 
  title = "Enterprise-Grade Security", 
  subtitle = "Your data and projects are protected by industry-leading security measures",
  className = ""
}: TrustSignalsSectionProps) {
  const { fadeInUp, staggerContainer } = useAnimationVariants();

  return (
    <motion.section 
      className={`py-16 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground">
            {subtitle}
          </p>
        </motion.div>

        <SecurityBadges 
          layout="grid" 
          showTitles={true} 
          showDescriptions={true}
        />
      </div>
    </motion.section>
  );
}

// Footer Security Badges (compact version for footer)
export function FooterSecurityBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 justify-center ${className}`}>
      <SecurityBadges 
        layout="compact" 
        showTitles={false} 
        showDescriptions={false}
      />
    </div>
  );
} 