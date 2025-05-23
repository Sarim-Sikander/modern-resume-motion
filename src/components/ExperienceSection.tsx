
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
    <section id="experience" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building innovative solutions and leading development teams across various industries
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 animate-on-scroll">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="ml-20 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-blue-600">{exp.company}</h4>
                    </div>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-700">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
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
