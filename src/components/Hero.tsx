import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const floatingEmojis = [
    { emoji: "✨", top: "10%", left: "10%", delay: "0s" },
    { emoji: "🍰", top: "20%", right: "15%", delay: "1s" },
    { emoji: "🌸", top: "60%", left: "8%", delay: "2s" },
    { emoji: "🎬", top: "70%", right: "20%", delay: "3s" },
    { emoji: "💻", top: "15%", left: "80%", delay: "4s" },
    { emoji: "🚀", top: "80%", left: "75%", delay: "5s" },
    { emoji: "🎨", top: "40%", left: "5%", delay: "6s" },
    { emoji: "⚡", top: "50%", right: "10%", delay: "7s" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)'
        }}
      />

      {/* Floating Emojis */}
      {floatingEmojis.map((item, index) => (
        <div
          key={index}
          className="emoji-float"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            animationDelay: item.delay,
          }}
        >
          {item.emoji}
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center shadow-card">
        <div className="space-y-6">
          {/* Greeting */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="gradient-text">Shreya</span> 👋
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground space-y-2">
              <p className="gradient-accent-text font-semibold">Full-Stack Developer & Data Analyst</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
  I build modern, responsive web applications with clean, efficient code — and analyze data to uncover insights that drive smarter decisions. I enjoy learning new technologies and recently participated in SIH 2025, where I collaborated with peers to solve real-world challenges through technology and analytics.
</p>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow text-white border-0 rounded-xl px-8 py-6 text-lg font-semibold"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/30 hover:bg-primary/5 transition-all duration-300 rounded-xl px-8 py-6 text-lg font-semibold bg-transparent backdrop-blur-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            {[
              { icon: Github, href: "https://github.com/damnthatsyoushreya", label: "GitHub" },  
              { icon: Linkedin, href: "https://www.linkedin.com/in/shreya-chaturvedi-ba1280218", label: "LinkedIn" },  
              { icon: Mail, href: "mailto:chaturvedi.d.shreya@gmail.com", label: "Email" },  
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-xl glass-card hover:shadow-glow transition-all duration-300 group"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary/70" />
      </div>
    </section>
  );
};

export default Hero;