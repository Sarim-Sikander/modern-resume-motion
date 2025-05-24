
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
      ],
      tech: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB']
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
      ],
      tech: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Kubernetes']
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
      ],
      tech: ['React', 'CSS3', 'JavaScript', 'Redux', 'Webpack']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building innovative solutions and leading development teams across various industries
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="animate-on-scroll">
                <div className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Experience Card */}
                  <div className="flex-1 relative">
                    <div className="bg-gradient-to-br from-purple-900/40 via-black/60 to-red-900/40 p-8 rounded-3xl border border-purple-500/30 hover:border-red-500/50 transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm shadow-2xl">
                      
                      {/* Company badge */}
                      <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-purple-400 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30">
                          {exp.period}
                        </span>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <h4 className="text-xl font-semibold text-red-400 mb-4">{exp.company}</h4>
                        <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                      </div>
                      
                      {/* Achievements with unique bullet design */}
                      <div className="mb-6">
                        <h5 className="font-semibold text-white mb-4 flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                          Key Achievements
                        </h5>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start">
                              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center mr-4 mt-0.5 shadow-lg">
                                <span className="text-white text-xs font-bold">✓</span>
                              </div>
                              <span className="text-gray-300 flex-1">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Tech stack */}
                      <div>
                        <h5 className="font-semibold text-white mb-3 flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                          Technologies
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <span key={i} className="bg-gradient-to-r from-purple-500/20 to-red-500/20 text-white px-3 py-1 rounded-full text-sm border border-purple-500/30 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 relative">
                      {/* Animated circles */}
                      <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                      <div className="absolute inset-2 border-2 border-red-500/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                      <div className="absolute inset-4 border-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
                      
                      {/* Center icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-red-600 rounded-full flex items-center justify-center shadow-2xl">
                          <span className="text-white text-2xl font-bold">{index + 1}</span>
                        </div>
                      </div>
                    </div>
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
