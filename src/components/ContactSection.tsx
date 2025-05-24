
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sarimsikander24@gmail.com', href: 'mailto:sarimsikander24@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+92 (335) 3192-953', href: 'tel:+923353192953' },
    { icon: MapPin, label: 'Location', value: 'Islamabad, Pakistan', href: null }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/sarimsikandercs', color: 'hover:text-blue-400' }
    // { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/yourhandle', color: 'hover:text-blue-400' },
    // { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/yourprofile', color: 'hover:text-blue-600' },
    // { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/yourhandle', color: 'hover:text-pink-400' },
    // { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@yourchannel', color: 'hover:text-red-500' }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden animate-on-scroll bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-800/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-6 glow-text">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto glow-text">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 glow-text">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-lg hover:border-blue-500/40 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-white hover:text-blue-400 transition-colors duration-200 glow-text"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white glow-text">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 glow-text">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm border border-blue-500/30 rounded-full flex items-center justify-center text-white ${social.color} hover:scale-110 hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/5 backdrop-blur-sm border-blue-500/20 p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Project discussion"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-blue-500/50 glow-text"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
