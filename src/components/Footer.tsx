import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-r from-primary/5 to-accent/5 border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Shreya</h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Developer passionate about creating beautiful, 
              functional web experiences and passionate about Data Analysis.
            </p>
            <div className="flex gap-4">
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Status:</span> Available for new opportunities
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold gradient-accent-text">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { label: "About", href: "" },
                { label: "Projects", href: "src/components/projects.tsx" },
                { label: "Experience", href: "#" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold gradient-text">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm hover:bg-secondary transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* <p className="text-sm text-muted-foreground">
              This portfolio showcases modern web development practices with a focus on performance, 
              accessibility, and user experience.
            </p> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear} Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by</span>
              <span className="font-semibold text-primary">Shreya</span>
            </div>

            {/* Fun Stats */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>☕ Powered by coffee</span>
              <span>🚀 Built for the future</span>
              <span>✨ Made with passion</span>
            </div>

            {/* Back to Top Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-primary/20 hover:bg-primary/5 transition-all duration-300 group"
            >
              <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="ml-2">Back to Top</span>
            </Button>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors duration-300 cursor-default">
            🎉 Thanks for scrolling all the way down! You're awesome! 🎉
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 opacity-20">
        <div className="emoji-float text-2xl" style={{ animationDelay: '0s' }}>⭐</div>
      </div>
      <div className="absolute bottom-4 left-4 opacity-20">
        <div className="emoji-float text-2xl" style={{ animationDelay: '2s' }}>💫</div>
      </div>
    </footer>
  );
};

export default Footer;