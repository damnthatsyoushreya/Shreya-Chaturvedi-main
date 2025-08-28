import Hero from "@/components/Hero";
import SkillsBubbles from "@/components/SkillsBubbles";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <SkillsBubbles />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
