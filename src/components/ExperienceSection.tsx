
const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Lead development of enterprise-scale applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.',
      achievements: [
        'Reduced application load time by 40%',
        'Led team of 5 developers',
        'Implemented microservices architecture'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Innovation Labs',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Specialized in React ecosystem and cloud deployments.',
      achievements: [
        'Delivered 15+ successful projects',
        'Improved code quality with 90% test coverage',
        'Optimized database queries for better performance'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartUp Inc',
      period: '2019 - 2020',
      description: 'Built responsive web applications and collaborated with design teams to create exceptional user experiences.',
      achievements: [
        'Increased user engagement by 60%',
        'Implemented responsive design system',
        'Reduced bug reports by 50%'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient glow-text">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto glow-text">
            Building innovative solutions and leading development teams across various industries
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-red-600 shadow-lg shadow-purple-500/50"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 animate-on-scroll">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-red-600 rounded-full border-4 border-black shadow-lg shadow-purple-500/50"></div>
                
                <div className="ml-20 bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 border border-purple-500/30">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 glow-text">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-purple-400 glow-text">{exp.company}</h4>
                    </div>
                    <span className="text-sm font-medium text-red-400 bg-red-500/20 px-3 py-1 rounded-full mt-2 md:mt-0 border border-red-500/30 glow-text">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 glow-text">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-white glow-text">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-gray-300 glow-text">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 shadow-lg shadow-purple-500/50"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
