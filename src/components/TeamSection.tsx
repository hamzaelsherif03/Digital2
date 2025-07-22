"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Github, ExternalLink, Users } from 'lucide-react';
import { teamMembers, getFeaturedTeamMembers, type TeamMember } from '@/data/team';
import { useAnimationVariants } from '@/components/lib/utils';

interface TeamSectionProps {
  showFeaturedOnly?: boolean;
  layout?: 'grid' | 'carousel' | 'compact';
  showBios?: boolean;
  showExpertise?: boolean;
  showSocial?: boolean;
  className?: string;
}

export default function TeamSection({ 
  showFeaturedOnly = true,
  layout = 'grid',
  showBios = true,
  showExpertise = true,
  showSocial = true,
  className = "" 
}: TeamSectionProps) {
  const { fadeInUp, staggerContainer } = useAnimationVariants();
  const displayMembers = showFeaturedOnly ? getFeaturedTeamMembers() : teamMembers;

  if (layout === 'compact') {
    return (
      <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 ${className}`}>
        {displayMembers.map((member, index) => (
          <CompactTeamMember key={member.id} member={member} index={index} />
        ))}
      </div>
    );
  }

  return (
    <motion.section 
      className={`py-20 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <Users className="w-4 h-4" />
            Our team
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
            Meet the minds behind<br />
            <span className="text-primary">DigitalAccel</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our team combines decades of experience from leading tech companies with a passion for helping startups succeed.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {displayMembers.map((member, index) => (
            <TeamMemberCard 
              key={member.id} 
              member={member} 
              index={index}
              showBio={showBios}
              showExpertise={showExpertise}
              showSocial={showSocial}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// Individual Team Member Card Component
interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  showBio: boolean;
  showExpertise: boolean;
  showSocial: boolean;
}

function TeamMemberCard({ member, index, showBio, showExpertise, showSocial }: TeamMemberCardProps) {
  const { fadeInUp } = useAnimationVariants();

  const cardHover = {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3 }
  };

  const imageHover = {
    scale: 1.1,
    transition: { duration: 0.3 }
  };

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileHover={cardHover}
      className="group"
    >
      <div className="rounded-2xl border text-card-foreground shadow-lg bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 overflow-hidden h-full">
        {/* Member Photo */}
        <div className="relative h-64 overflow-hidden">
          <motion.div whileHover={imageHover} className="h-full">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Social Links Overlay */}
          {showSocial && (
            <div className="absolute top-4 right-4">
              <SocialLinks member={member} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold font-headline mb-1 group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          
          <p className="text-primary font-medium mb-3">
            {member.title}
          </p>

          {showBio && (
            <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
              {member.bio}
            </p>
          )}

          {showExpertise && (
            <div className="flex flex-wrap gap-2">
              {member.expertise.slice(0, 4).map((skill) => (
                <span 
                  key={skill}
                  className="px-2 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
              {member.expertise.length > 4 && (
                <span className="px-2 py-1 bg-white/5 border border-white/10 text-muted-foreground text-xs rounded-full">
                  +{member.expertise.length - 4} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Social Links Component
function SocialLinks({ member }: { member: TeamMember }) {
  const socialPlatforms = [
    { key: 'linkedin', icon: Linkedin, url: member.social.linkedin },
    { key: 'twitter', icon: Twitter, url: member.social.twitter },
    { key: 'github', icon: Github, url: member.social.github }
  ];

  return (
    <div className="flex gap-2">
      {socialPlatforms.map(({ key, icon: Icon, url }) => (
        url && (
          <Link 
            key={key}
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-black/50 hover:bg-primary text-white rounded-full transition-all duration-300 hover:scale-110"
          >
            <Icon className="w-4 h-4" />
          </Link>
        )
      ))}
    </div>
  );
}

// Compact Team Member Component
function CompactTeamMember({ member, index }: { member: TeamMember; index: number }) {
  const { fadeInUp } = useAnimationVariants();

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="group text-center"
    >
      <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-primary/50 transition-all duration-300">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="80px"
        />
      </div>
      
      <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
        {member.name}
      </h4>
      
      <p className="text-xs text-muted-foreground">
        {member.title}
      </p>
    </motion.div>
  );
}

// Leadership Team Component (for About page)
export function LeadershipTeam({ className = "" }: { className?: string }) {
  const { fadeInUp, staggerContainer } = useAnimationVariants();
  const leaders = getFeaturedTeamMembers();

  return (
    <motion.section 
      className={`py-20 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry veterans committed to your success
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={staggerContainer}
        >
          {leaders.map((member, index) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              custom={index}
              className="text-center group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/10 group-hover:ring-primary/50 transition-all duration-500">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="128px"
                />
              </div>
              
              <h3 className="text-xl font-bold font-headline mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              
              <p className="text-primary font-medium mb-4">
                {member.title}
              </p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {member.bio}
              </p>

              <SocialLinks member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// Team Stats Component
export function TeamStats({ className = "" }: { className?: string }) {
  const stats = [
    { value: "50+", label: "Years Combined Experience" },
    { value: "100+", label: "Projects Delivered" },
    { value: "15+", label: "Industries Served" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  const { fadeInUp, staggerContainer } = useAnimationVariants();

  return (
    <motion.div 
      className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          variants={fadeInUp}
          custom={index}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
} 