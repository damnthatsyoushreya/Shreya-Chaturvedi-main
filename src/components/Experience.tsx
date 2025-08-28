import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Code, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      year: "2024",
      title: "Hackathon Team Lead",
      organization: "Multiple Hackathons",
      type: "Leadership",
      description: "Led cross-functional teams of 4-6 developers in various hackathons, consistently delivering innovative solutions within 24-48 hour timeframes.",
      achievements: [
        "🥇 Winner at TechFest 2024 - AI-powered study assistant",
        "🥈 2nd Place at CodeRush - Sustainable tech solution",
        "🏆 Best UI/UX at InnovateFest - Social impact platform"
      ],
      skills: ["Team Leadership", "Project Management", "Rapid Prototyping", "Presentation"],
      icon: Trophy,
      color: "from-yellow-500 to-orange-500"
    },
    {
      year: "2023-2024",
      title: "Full-Stack Developer Intern",
      organization: "TechStartup Inc.",
      type: "Internship",
      description: "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with senior developers on client projects.",
      achievements: [
        "Improved application performance by 40%",
        "Built responsive components used by 10K+ users",
        "Implemented automated testing reducing bugs by 60%"
      ],
      skills: ["React", "Node.js", "MongoDB", "Testing", "Agile"],
      icon: Code,
      color: "from-blue-500 to-purple-500"
    },
    {
      year: "2023",
      title: "Frontend Developer",
      organization: "College Tech Club",
      type: "Volunteer",
      description: "Led the development of the college's official website and event management system, managing a team of junior developers.",
      achievements: [
        "Built college website serving 5000+ students",
        "Mentored 8 junior developers",
        "Organized 3 successful coding workshops"
      ],
      skills: ["React", "Leadership", "Mentoring", "UI/UX Design"],
      icon: Users,
      color: "from-green-500 to-teal-500"
    },
    {
      year: "2022-2023",
      title: "Web Development Projects",
      organization: "Freelance & Personal",
      type: "Projects",
      description: "Worked on various personal and freelance projects to build portfolio and gain real-world experience in web development.",
      achievements: [
        "Completed 5+ client projects with 100% satisfaction",
        "Built 10+ personal projects exploring different technologies",
        "Contributed to 3 open-source projects"
      ],
      skills: ["JavaScript", "CSS", "Git", "Client Communication"],
      icon: Zap,
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Experience & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through hackathons, internships, and projects that shaped me as a developer and leader
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-primary md:transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.title} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center md:transform md:-translate-x-1/2 shadow-glow`}>
                  <exp.icon className="w-4 h-4 text-white" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <Card className="glass-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`bg-gradient-to-r ${exp.color} text-white border-0 font-semibold`}>
                          {exp.year}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {exp.title}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium">
                        {exp.organization}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-primary">Key Achievements:</h4>
                        <ul className="space-y-1 text-sm">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="text-xs bg-secondary/50 hover:bg-secondary transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Year Display for larger screens */}
                <div className="hidden md:block md:w-2/12">
                  <div className={`text-2xl font-bold text-primary/70 ${
                    index % 2 === 0 ? 'text-left' : 'text-right'
                  }`}>
                    {exp.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
          {[
            { number: "15+", label: "Projects Completed", icon: "🚀" },
            { number: "5", label: "Hackathons Won", icon: "🏆" },
            { number: "3", label: "Years Coding", icon: "💻" },
            { number: "8", label: "Developers Mentored", icon: "👥" },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center glass-card rounded-2xl p-6 hover:shadow-card transition-all duration-300"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;