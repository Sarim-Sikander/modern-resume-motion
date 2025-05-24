
const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelors of Science in Computer Science',
      institution: 'Bahria University',
      period: '2018 - 2022',
      grade: 'GPA: 3.53/4.0',
      description: 'Specialized in Machine Learning and Distributed Systems.',
      courses: ['Advanced Algorithms', 'Machine Learning', 'Distributed Systems', 'Web Security', 'Data Science']
    }
  ];

  return (
    <section id="education" className="py-20 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Educational Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Continuous learning and academic excellence in computer science and technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="relative group">
                  {/* Card with unique hexagonal design */}
                  <div className="relative bg-gradient-to-br from-purple-900/30 to-red-900/30 p-8 rounded-2xl border border-purple-500/30 hover:border-red-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-purple-400"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-red-400"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-red-400"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-purple-400"></div>
                    
                    {/* Institution icon */}
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                      <span className="text-white font-bold text-lg">🎓</span>
                    </div>
                    
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">{edu.institution}</h4>
                      <div className="flex justify-between items-center text-sm mb-4">
                        <span className="text-red-400 bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30">
                          {edu.period}
                        </span>
                        <span className="text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">{edu.description}</p>
                    
                    {/* Course tags */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-white text-sm">Key Courses:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span key={i} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full border border-white/20 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                            {course}
                          </span>
                        ))}
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

export default EducationSection;
