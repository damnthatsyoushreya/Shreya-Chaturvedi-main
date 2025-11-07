import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with React, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and glass-morphism design.",
      image: "/api/placeholder/400/250",
      tech: ["React", "TypeScript", "Tailwind", "Vite"],
      github: "https://github.com/damnthatsyoushreya/Shreya-Chaturvedi-main",
      live: "https://shreya-chaturvedi.vercel.app/",
      featured: true
    },
    {
      title: "Evently",
      description: "Evently is a MERN + Supabase-powered platform for seamless event creation and RSVP management. It’s currently being enhanced with new dashboard features and design improvements.",
      image: "/api/placeholder/400/250",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Supabase",
        "TailwindCSS",
        "Recharts",
        "Shadcn UI"
      ],
      github: "https://github.com/damnthatsyoushreya/Evently",
      live: "https://evently-beta-seven.vercel.app/",
      featured: true
    },

    {
      title: "Social Media Dashboard",
      description: "STILL UNDER DEVELOPMENT Analytics dashboard for social media management with real-time metrics, post scheduling, and performance insights across multiple platforms.",
      image: "/api/placeholder/400/250",
      tech: ["Vue.js", "D3.js", "Node.js", "Redis"],
      github: "#",
      live: "https://smart-moderation-dashboard.vercel.app/",
      featured: false
    },
    // {
    //   title: "E-commerce Store",
    //   description: "Modern e-commerce platform with shopping cart, payment integration, admin dashboard, and inventory management system.",
    //   image: "/api/placeholder/400/250",
    //   tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    //   github: "#",
    //   live: "#",
    //   featured: false
    // },
    // {
    //   title: "ChatBot AI Assistant",
    //   description: "Intelligent chatbot with natural language processing, context awareness, and integration with multiple AI models for enhanced user interactions.",
    //   image: "/api/placeholder/400/250",
    //   tech: ["Python", "OpenAI", "FastAPI", "React"],
    //   github: "#",
    //   live: "#",
    //   featured: false
    // },
    // {
    //   title: "Social Media Dashboard",
    //   description: "Analytics dashboard for social media management with real-time metrics, post scheduling, and performance insights across multiple platforms.",
    //   image: "/api/placeholder/400/250",
    //   tech: ["Vue.js", "D3.js", "Node.js", "Redis"],
    //   github: "#",
    //   live: "#",
    //   featured: false
    // }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development journey - from hackathon winners to full-stack applications that solve real-world problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-2 glass-card border-0 overflow-hidden ${project.featured ? 'ring-2 ring-primary/20' : ''
                }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-accent rounded-t-lg flex items-center justify-center">
                  <div className="text-6xl opacity-50">🚀</div>
                </div>
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-gradient-primary text-white border-0">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-0 flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-primary hover:opacity-90 text-white border-0"
                  asChild
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        {/* <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary/30 hover:bg-primary/5 transition-all duration-300 rounded-xl px-8 py-6 text-lg font-semibold"
          >
            View All Projects on GitHub
            <Github className="w-5 h-5 ml-2" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;