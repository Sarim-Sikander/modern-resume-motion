
const SkillsSection = () => {
  const skills = [
    { name: 'Python & Machine Learning', level: 95, category: 'Programming' },
    { name: 'Data Engineering (ETL)', level: 92, category: 'Data' },
    { name: 'AWS & GCP Cloud', level: 88, category: 'Cloud' },
    { name: 'SQL & Teradata', level: 90, category: 'Database' },
    { name: 'Apache Airflow', level: 85, category: 'Data' },
    { name: 'FastAPI & Django', level: 87, category: 'Backend' },
    { name: 'Docker & Kubernetes', level: 80, category: 'DevOps' },
    { name: 'TensorFlow & Deep Learning', level: 83, category: 'ML/AI' },
    { name: 'Natural Language Processing', level: 82, category: 'ML/AI' },
    { name: 'Hadoop & PySpark', level: 78, category: 'Big Data' }
  ];

  const technologies = [
    'Python', 'SQL', 'Apache Airflow', 'AWS', 'GCP', 'Teradata',
    'FastAPI', 'Django', 'Machine Learning', 'TensorFlow', 'Docker',
    'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'Git', 'Hadoop',
    'PySpark', 'BERT', 'NLP', 'ETL', 'JavaScript', 'Node.js', 'R'
  ];

  return (
    <section id="skills" className="py-20 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient glow-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto glow-text">
            Leveraging cutting-edge technologies to build scalable, performant applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-8 text-white glow-text">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-200 glow-text">{skill.name}</span>
                    <span className="text-sm text-purple-400 glow-text">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden border border-purple-500/30">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-red-600 rounded-full transition-all duration-1000 ease-out group-hover:scale-105 shadow-lg shadow-purple-500/50"
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
            <h3 className="text-2xl font-bold mb-8 text-white glow-text">Technologies</h3>
            <div className="grid grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={tech}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-purple-500/30 hover:border-red-500/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="font-medium text-white text-center block glow-text">{tech}</span>
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
            <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:scale-105 transition-transform duration-300 border border-purple-500/30 hover:border-red-500/50">
              <div className="text-4xl font-bold text-gradient mb-2 glow-text">{stat.title}</div>
              <div className="text-lg font-semibold text-purple-400 mb-1 glow-text">{stat.subtitle}</div>
              <div className="text-gray-300 glow-text">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
