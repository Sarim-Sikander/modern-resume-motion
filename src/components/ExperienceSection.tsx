
const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Data Engineer',
      company: 'Probabilities Unlimited',
      period: 'Feb 2025 - Present',
      location: 'Islamabad, Pakistan',
      description: 'Managing the whole architecture of data pipelines. Implementing and maintaining efficient data pipelines using automation tools.',
      achievements: [
        'Working with a team of 2 developers',
        'Managing complete data pipeline architecture',
        'Implementing automation tools like Airflow and Cloud services'
      ],
      tech: ['Airflow', 'AWS', 'FastAPI', 'IQFeed', 'Data Pipelines', 'Team Leadership']
    },
    {
      title: 'Senior Data Engineer',
      company: 'Bloxx (Akamai Technologies)',
      period: 'Feb 2024 - Oct 2024',
      location: 'Islamabad, Pakistan',
      description: 'Leading a team of MLOps and Data Engineers, fostering collaboration and ensuring successful delivery of projects. Designing and implementing scalable data pipelines.',
      achievements: [
        'Led team of MLOps and Data Engineers',
        'Designed scalable and efficient data pipelines',
        'Architected and deployed data infrastructure using AWS cloud services'
      ],
      tech: ['Airflow', 'AWS Glue', 'Stitch', 'Talent', 'AWS', 'ETL', 'MLOps', 'Team Leadership']
    },
    {
      title: 'Data Scientist (Resource Management)',
      company: 'PTCL',
      period: 'Feb 2023 - Nov 2023',
      location: 'Islamabad, Pakistan',
      description: 'Managing KPIs and building different data source ETL pipelines using AWS and GCP. Worked on major pipelines and Teradata using large data and machine learning models.',
      achievements: [
        'Managed KPIs and built multiple data source ETL pipelines',
        'Worked with large data using Teradata',
        'Developed machine learning models for various use cases'
      ],
      tech: ['AWS', 'GCP', 'Teradata', 'ETL Pipelines', 'Machine Learning', 'KPI Management']
    },
    {
      title: 'Engineering Manager - Data/ML',
      company: 'Stealth Startup',
      period: 'Oct 2022 - Jan 2023',
      location: 'San Diego, USA',
      description: 'Increased sales and revenue by creating creative analytical reports and dashboards to get better insights for business decision making.',
      achievements: [
        'Increased sales and revenue by 6.5% in 2 months',
        'Created creative analytical reports and dashboards',
        'Provided better business insights through data analysis'
      ],
      tech: ['Data Analytics', 'Dashboard Development', 'Business Intelligence', 'Management']
    },
    {
      title: 'Data Scientist',
      company: 'Turing.com',
      period: 'March 2022 - Sept 2022',
      location: 'Palo Alto, CA',
      description: 'Responsible for the engineering challenges of Turing\'s data science team that enables them to source, search for jobs, and match developers with exciting jobs.',
      achievements: [
        'Solved engineering challenges for data science team',
        'Enabled efficient developer sourcing and job matching',
        'Improved job search and matching algorithms'
      ],
      tech: ['Data Science', 'Machine Learning', 'Job Matching Algorithms', 'Python']
    },
    {
      title: 'Data Scientist',
      company: 'Sui Southern Gas Company (SSGC)',
      period: 'May 2021 - Nov 2021',
      location: 'Karachi, Pakistan',
      description: 'Completed 3 months internship with fulltime job. Designed and automated innovative digitization and online marketing report tools and dashboards.',
      achievements: [
        'Completed internship and transitioned to full-time role',
        'Designed and automated 3+ innovative digitization tools',
        'Built marketing report tools and dashboards based on KPIs',
        'Increased transparency and sales performance'
      ],
      tech: ['Dashboard Development', 'KPI Analysis', 'Marketing Analytics', 'Digitization Tools', 'Automation']
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
