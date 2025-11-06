const SkillsBubbles = () => {
  const skills = [
    { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
    { name: "Tailwind", icon: "🎨", color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-600" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-800" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-orange-500" },
    { name: "Python", icon: "🐍", color: "from-blue-500 to-yellow-500" },
    { name: "Git", icon: "📚", color: "from-orange-500 to-red-500" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-700 to-indigo-800" },
    { name: "Power BI", icon: "📊", color: "from-green-400 to-teal-500" }, // new skill added
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit of modern technologies that I use to bring ideas to life
          </p>
        </div>

        {/* Skills Bubbles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bubble glass-card rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center p-6 cursor-pointer group`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="text-4xl md:text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-sm md:text-base font-semibold text-center group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Additional floating skills in background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="emoji-float text-6xl opacity-20" style={{ top: '10%', left: '5%', animationDelay: '0s' }}>
            💡
          </div>
          <div className="emoji-float text-5xl opacity-20" style={{ top: '20%', right: '10%', animationDelay: '2s' }}>
            🔥
          </div>
          <div className="emoji-float text-7xl opacity-20" style={{ bottom: '10%', left: '10%', animationDelay: '4s' }}>
            ⭐
          </div>
          <div className="emoji-float text-5xl opacity-20" style={{ bottom: '20%', right: '5%', animationDelay: '6s' }}>
            🎯
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsBubbles;