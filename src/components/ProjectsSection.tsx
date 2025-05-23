
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'Modern project management tool with drag-and-drop functionality, real-time collaboration, and advanced analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Business intelligence platform with machine learning integration, data visualization, and predictive analytics capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
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
            A showcase of my recent work, demonstrating expertise in modern web development
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
