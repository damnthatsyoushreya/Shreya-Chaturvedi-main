import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Music, BookOpen, Camera, Dumbbell, Flower, Gamepad2 } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const interests = [
    { icon: Gamepad2, label: "Gaming", color: "text-red-500" },
    { icon: Music, label: "Music", color: "text-purple-500" },
    { icon: BookOpen, label: "Continuous Learning", color: "text-blue-500" },
    { icon: Camera, label: "Photography", color: "text-green-500" },
    { icon: Flower, label: "Open Source", color: "text-pink-500" },
    { icon: Heart, label: "Dog Lover", color: "text-amber-500" },
    { icon: Dumbbell, label: "Gym", color: "text-orange-500" }, // optional if you want gym separate
  ];


  const values = [
    {
      title: "Innovation First",
      description: "Always seeking creative solutions to complex problems",
      emoji: "💡"
    },
    {
      title: "Team Player",
      description: "Believe in the power of collaboration and knowledge sharing",
      emoji: "🤝"
    },
    {
      title: "Quality Code",
      description: "Writing clean, maintainable, and efficient code",
      emoji: "✨"
    },
    {
      title: "User-Centric",
      description: "Creating experiences that users love and find valuable",
      emoji: "❤️"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know the person behind the code – my journey, values, and passion for technology
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-primary rounded-full animate-pulse opacity-20"></div>
              <img
                src={profileImage}
                alt="Shreya - Developer"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-glow"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-accent rounded-full p-3 shadow-card">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8 space-y-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I'm <span className="text-primary font-semibold">Shreya</span>, a 7th Semester IT student with a passion for building modern web applications. I enjoy learning new technologies and applying them to real-world projects.
                </p>

                <p>
                  I have experience participating in events like <span className="text-accent font-semibold">SIH 2024</span> and working on personal and freelance web development projects. These experiences helped me strengthen my problem-solving skills and collaborative abilities.
                </p>

                <p>
                  Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously improving my skills.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">7th</div>
                  <div className="text-sm text-muted-foreground">Semester IT Student</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-accent-text">8.25</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 gradient-accent-text">
            My Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card
                key={value.title}
                className="glass-card border-0 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group text-center p-6"
              >
                <CardContent className="space-y-4 p-0">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.emoji}
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interests & Hobbies */}
        {/* Interests & Hobbies */}
        <div className="glass-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Beyond Code: My Interests
          </h3>
          <div className="flex justify-center gap-6 flex-nowrap overflow-x-auto">
            {interests.map((interest) => (
              <div
                key={interest.label}
                className="flex flex-col items-center p-4 rounded-xl hover:bg-secondary/20 transition-all duration-300 group cursor-pointer"
              >
                <interest.icon
                  className={`w-8 h-8 mb-2 ${interest.color} group-hover:scale-110 transition-transform duration-300`}
                />
                <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                  {interest.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Badge className="bg-gradient-accent text-accent-foreground border-0 px-6 py-2 text-sm font-semibold">
              Always learning, always growing 🌱
            </Badge>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;