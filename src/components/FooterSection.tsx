import { Logo } from './logo';
import SecurityBadges from './SecurityBadges';

export default function FooterSection() {
  return (
    <footer className="bg-white/5 border-t border-white/10 pt-12 sm:pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <Logo />
              <span className="text-base sm:text-lg font-bold font-headline">DigitalAccel</span>
            </div>
            <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed mb-3">
              Accelerating digital transformation for modern enterprises. Delivering sustainable competitive advantage through innovative technology solutions.
            </p>
            <a 
              href="mailto:hello@digitalaccel.io" 
              className="text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors font-medium"
            >
              hello@digitalaccel.io
            </a>
          </div>
          {/* Services */}
          <div>
            <h4 className="font-headline font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-foreground/70">
              {['Digital Acceleration', 'Enterprise Platforms', 'Custom Solutions', 'Technology Modernization'].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-headline font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-foreground/70">
              {['About', 'Process', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-headline font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">Legal</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-foreground/70">
              {['Privacy Policy', 'Terms of Service', 'Security'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Security Badges */}
        <div className="mb-6 sm:mb-8">
          <SecurityBadges variant="horizontal" showDescription={false} className="justify-center opacity-60" />
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs text-foreground/60">
            © 2024 DigitalAccel. All rights reserved.
          </p>
          <div className="flex items-center gap-2 sm:gap-4 text-xs text-foreground/60 text-center">
            <span>Built for enterprise excellence</span>
            <span>•</span>
            <span>Powered by modern architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 