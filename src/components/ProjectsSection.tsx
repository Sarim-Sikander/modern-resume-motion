
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Enterprise ETL Data Pipeline',
      description: 'Scalable data pipeline processing 10M+ records daily using Airflow and AWS. Integrated multiple data sources including APIs, databases, and streaming data with automated monitoring and error handling.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80',
      tech: ['Apache Airflow', 'AWS Glue', 'Python', 'Teradata', 'Docker'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Real-time Financial Data API',
      description: 'High-performance FastAPI backend processing real-time financial data from IQFeed. Built with async architecture, Redis caching, and PostgreSQL for millisecond response times.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
      tech: ['FastAPI', 'Python', 'Redis', 'PostgreSQL', 'IQFeed'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'ML-Powered Resume Parser',
      description: 'Intelligent resume parsing system using NLP and computer vision to extract structured information. Built with Django, deployed on AWS with 96% accuracy rate.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
      tech: ['Django', 'BERT', 'OpenCV', 'AWS', 'NLP'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Social Media Analytics Platform',
      description: 'Django-based web application (Nizam-e-Ilahi) with integrated ML algorithms for content recommendation and user behavior analysis. Features real-time analytics and Islamic cultural compliance.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
      tech: ['Django', 'Machine Learning', 'PostgreSQL', 'Redis', 'Celery'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Multi-Source Data Integration Hub',
      description: 'Comprehensive ETL system integrating Google, Facebook, Twitter, Reddit APIs with real-time data processing. Handles 1M+ API calls daily with automated retry mechanisms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'Apache Kafka', 'MongoDB', 'Docker', 'Kubernetes'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI-Powered Chatbot with NLP',
      description: 'Intelligent conversational AI deployed on GCP with BERT integration. Features sentiment analysis, intent recognition, and seamless Node.js API integration for web applications.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'BERT', 'Node.js', 'GCP', 'Natural Language Processing'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient glow-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto glow-text">
            A showcase of my recent work, demonstrating expertise in modern ML and Backend development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-white/10 backdrop-blur-sm border border-purple-500/30 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 animate-on-scroll">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white/90 text-gray-800 hover:bg-white">
                    <Link className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors glow-text">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3 glow-text">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-red-600/30 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 glow-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white">
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-purple-500 text-purple-400 hover:bg-purple-500/10">
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-500 hover:border-red-500 text-purple-400 hover:text-red-400 hover:bg-red-500/10 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 glow-text"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
