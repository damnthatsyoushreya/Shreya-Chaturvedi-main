import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Code, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      year: "2024 – Present",
      title: "Front End Developer (Part Time)",
      organization: "Smart Tech Info Craft, Ahmedabad",
      type: "Work",
      description:
        "Converted UI/UX designs into responsive HTML, CSS, and Bootstrap layouts. Ensured cross-browser compatibility and collaborated with the design team to maintain visual integrity.",
      achievements: [
        "Developed responsive interfaces with optimized performance",
        "Maintained brand consistency across multiple projects",
        "Improved cross-browser compatibility and speed"
      ],
      skills: ["HTML", "CSS", "Bootstrap", "UI/UX", "Collaboration"],
      icon: Code,
      color: "from-green-500 to-teal-500",
    },
    {
      year: "2023",
      title: "Full Stack Intern",
      organization: "NextGen Solutions, Ahmedabad",
      type: "Internship",
      description:
        "Built and developed websites using HTML, CSS, Bootstrap, JavaScript, and Django. Worked across both front-end and back-end with a focus on responsiveness and user experience.",
      achievements: [
        "Delivered 3+ responsive client websites",
        "Collaborated on debugging and testing features",
        "Optimized site performance for multi-device support"
      ],
      skills: ["JavaScript", "Django", "Bootstrap", "Testing", "Agile"],
      icon: Zap,
      color: "from-blue-500 to-purple-500",
    },
    {
      year: "2024",
      title: "Smart India Hackathon – Team Lead",
      organization: "Delhi Transport Corporation Project",
      type: "Hackathon",
      description:
        "Led a team to develop 'Yatra', an Automated Bus Scheduling & Route Management System. Proposed dynamic route adjustments during emergencies and eco-friendly route optimization.",
      achievements: [
        "Selected and approved for SIH 2024",
        "Developed real-world transport solution prototype",
        "Led cross-functional hackathon team to success"
      ],
      skills: ["Leadership", "Project Management", "Problem-Solving", "UI/UX"],
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
    },
    {
      year: "2022",
      title: "Freelance & Academic Projects",
      organization: "Personal / Academic",
      type: "Projects",
      description:
        "Worked on freelance and academic projects to strengthen portfolio and practical skills in full-stack development and UI/UX design.",
      achievements: [
        "Way To Interior – platform connecting clients with designers",
        "Single Page Application – authentication & data fetching",
        "Abyss Skills – e-learning platform with offline access",
        "App Clone – social media prototype in Figma"
      ],
      skills: ["React.js", "JavaScript", "MySQL", "Figma", "Problem-Solving"],
      icon: Users,
      color: "from-pink-500 to-rose-500",
    },
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
            My journey through internships, part-time roles, hackathons, and projects that shaped my career in technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-primary md:transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center md:transform md:-translate-x-1/2 shadow-glow`}
                >
                  <exp.icon className="w-4 h-4 text-white" />
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <Card className="glass-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          className={`bg-gradient-to-r ${exp.color} text-white border-0 font-semibold`}
                        >
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

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-primary">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

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
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { number: "4+", label: "Major Projects", icon: "🚀" },
              { number: "1", label: "National Hackathon", icon: "🏆" },
              { number: "2+", label: "Work Experiences", icon: "💻" },
            ].map((stat) => (
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
      </div>
    </section>
  );
};

export default Experience;
