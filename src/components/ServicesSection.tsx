"use client";

import { motion } from 'framer-motion';
import { Rocket, Globe, Smartphone, TrendingUp, Code, Layers, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { useAnimationVariants } from './lib/utils';

const accelerationServices = [
  {
    icon: Zap,
    title: 'Digital Velocity Enhancement',
    description: 'Accelerate your digital transformation with enterprise-grade solutions that deliver measurable business impact.',
    features: ['Performance optimization', 'Scalable architecture', 'Real-time analytics', 'Cloud acceleration'],
  },
  {
    icon: Globe,
    title: 'Enterprise Web Platforms',
    description: 'Mission-critical web applications built for scale, security, and seamless user experiences.',
    features: ['Enterprise security', 'Global CDN deployment', 'Advanced integrations', 'Multi-tenant architecture'],
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Acceleration',
    description: 'Native-quality mobile experiences that drive engagement and accelerate business growth.',
    features: ['Cross-platform deployment', 'Offline capabilities', 'Push notifications', 'Performance monitoring'],
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence & Analytics',
    description: 'Data-driven insights and intelligent automation to accelerate decision-making and growth.',
    features: ['Real-time dashboards', 'Predictive analytics', 'Automated reporting', 'Business intelligence'],
  },
  {
    icon: Code,
    title: 'Custom Enterprise Solutions',
    description: 'Tailored digital solutions engineered for your specific business requirements and industry standards.',
    features: ['Modern technology stack', 'Microservices architecture', 'API-first approach', 'Legacy modernization'],
  },
  {
    icon: Layers,
    title: 'Full-Stack Acceleration',
    description: 'End-to-end digital acceleration covering every layer of your technology infrastructure.',
    features: ['Database optimization', 'Backend acceleration', 'Frontend performance', 'DevOps automation'],
  },
];

export default function ServicesSection() {
  const { fadeInUp, staggerContainer } = useAnimationVariants();
  return (
    <section id="services" className="py-section-large bg-gradient-to-b from-background via-background/95 to-background">
      <div className="container mx-auto px-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-8 tracking-tight"
          >
            Enterprise-Grade
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Acceleration
            </span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-foreground/70 leading-relaxed"
          >
            Comprehensive digital solutions engineered to accelerate your business velocity and competitive advantage.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {accelerationServices.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              custom={index}
              className="group"
            >
              <Card className="relative h-full p-8 bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 shadow-2xl hover:shadow-luxury transition-all duration-700 hover:scale-105 rounded-showcase overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with glassmorphism effect */}
                  <motion.div 
                    className="relative mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-xl border border-primary/30 rounded-feature flex items-center justify-center shadow-lg group-hover:shadow-luxury transition-all duration-500">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 bg-primary/20 rounded-feature blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                  </motion.div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold font-headline mb-4 text-foreground group-hover:text-primary transition-colors duration-500">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center gap-3 text-sm text-foreground/60"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-showcase bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
                }} />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="mt-20 text-center bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-showcase p-12 backdrop-blur-xl border border-primary/20 shadow-2xl"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold font-headline mb-6"
          >
            Ready to Accelerate Your
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Digital Transformation?
            </span>
          </motion.h3>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how our enterprise-grade solutions can accelerate your business velocity and deliver measurable results.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="/contact?utm_source=website&utm_medium=cta&utm_campaign=conversion&utm_content=services-consultation"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105"
            >
              <span className="relative z-10">Schedule Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
            
            <a 
              href="/process"
              className="group px-12 py-6 text-xl font-medium rounded-full hover:bg-primary/5 transition-all duration-300 border border-primary/20 backdrop-blur-xl"
            >
              View Our Process
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 