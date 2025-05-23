
const SkillsSection = () => {
  const skills = [
    { name: 'React & Next.js', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Language' },
    { name: 'Node.js & Express', level: 88, category: 'Backend' },
    { name: 'AWS & Cloud', level: 85, category: 'DevOps' },
    { name: 'PostgreSQL & MongoDB', level: 82, category: 'Database' },
    { name: 'Docker & Kubernetes', level: 78, category: 'DevOps' },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'GraphQL',
    'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'Redis', 'Git'
  ];

  return (
    <section id="skills" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build scalable, performant applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out group-hover:scale-105"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Technologies</h3>
            <div className="grid grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={tech}
                  className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="font-medium text-gray-700 text-center block">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-on-scroll">
          {[
            { title: '5+ Years', subtitle: 'Experience', description: 'Building scalable web applications' },
            { title: '50+ Projects', subtitle: 'Completed', description: 'Across various industries' },
            { title: '100%', subtitle: 'Client Satisfaction', description: 'Delivering quality solutions' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-gradient mb-2">{stat.title}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.subtitle}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
