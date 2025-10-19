import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import './index.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const AnimatedElement = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 100);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
    >
      {children}
    </div>
  );
};

export default function Portfolio() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <AnimatedElement delay={0}>
            <h1 className="text-xl font-bold tracking-tighter">Ebad</h1>
          </AnimatedElement>
          <AnimatedElement delay={1}>
            <div className="flex gap-6 text-sm">
              <a href="#work" className="hover:text-blue-400 transition">Work</a>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
          </AnimatedElement>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl w-full">
          <AnimatedElement delay={2}>
            <div className="space-y-6">
              <h2 className="text-6xl md:text-7xl font-bold tracking-tight">
                Software Engineer
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                I build software applications I find interesting and craft digital experiences. Currently seeking 2026 internship opportunities to solve challenging problems.
              </p>
              <div className="flex gap-4 pt-8">
                <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition flex items-center gap-2">
                  Get in touch <ArrowRight size={18} />
                </a>
                <a href="https://github.com/ebadr761" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-slate-600 hover:border-slate-400 rounded-lg font-semibold transition">
                  GitHub
                </a>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement delay={0}>
            <h3 className="text-4xl font-bold mb-16">Experience</h3>
          </AnimatedElement>

          <div className="space-y-16">
            {/* Experience 1 */}
            <AnimatedElement delay={1}>
              <div className="group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold group-hover:text-blue-400 transition">
                      AI Developer Intern
                    </h4>
                    <p className="text-slate-400">Quest • Remote</p>
                  </div>
                  <span className="text-slate-500 text-sm">May 2025 — Aug 2025</span>
                </div>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Architected weather-specific chatbot using n8n workflows and LangChain/LangGraph multi-agent system. Integrated Python backend with frontend UI while coordinating with the software development team. Developed EV recommendation chatbot aggregating real-time pricing data.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">Python</span>
                  <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">n8n</span>
                  <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">LangChain</span>
                  <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">React</span>
                </div>
              </div>
            </AnimatedElement>

            {/* Experience 2 */}
            <AnimatedElement delay={2}>
              <div className="group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold group-hover:text-blue-400 transition">
                      Freelance Web Designer
                    </h4>
                    <p className="text-slate-400">Designmen Consulting • Remote</p>
                  </div>
                  <span className="text-slate-500 text-sm">Aug 2023 — Jan 2025</span>
                </div>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Led end-to-end design and development of 3 business websites for Calgary clients including a local gym, daycare and college. Optimized site performance through SEO best practices.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">WordPress</span>
                  <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">SQL</span>
                  <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">SEO</span>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement delay={0}>
            <h3 className="text-4xl font-bold mb-16">Projects</h3>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedElement delay={1}>
              <a href="#" className="group block">
                <div className="bg-slate-900 rounded-lg p-8 h-full hover:bg-slate-800 transition border border-slate-800">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition">
                    Learning Management System
                  </h4>
                  <p className="text-slate-400 mb-6">
                    Full-stack application with React frontend and Flask REST API enabling course management and personalized learning paths.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">React</span>
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">Flask</span>
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">JavaScript</span>
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">HTML</span>
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">CSS</span>
                  </div>
                </div>
              </a>
            </AnimatedElement>

            <AnimatedElement delay={2}>
              <a href="#" className="group block">
                <div className="bg-slate-900 rounded-lg p-8 h-full hover:bg-slate-800 transition border border-slate-800">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition">
                    Weather Chatbot
                  </h4>
                  <p className="text-slate-400 mb-6">
                    Multi-agent AI chatbot providing weather-specific recommendations with real-time climate API integration.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">Python</span>
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">LangChain</span>
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">n8n</span>
                  </div>
                </div>
              </a>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement delay={0}>
            <h3 className="text-4xl font-bold mb-8">About</h3>
          </AnimatedElement>
          <AnimatedElement delay={1}>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I'm a software engineering student with hands-on experience in full-stack development and AI integration. I've worked on diverse projects ranging from AI-powered chatbots to custom business websites.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              My tech stack includes JavaScript, Python, React, and modern tooling. I'm passionate about clean code, user experience, and continuously learning new technologies.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-3">Languages</h4>
                <p className="text-slate-400 text-sm">JavaScript, Python, Java, C/C++, SQL</p>
              </div>
              <div>
                <h4 className="font-bold mb-3">Frontend</h4>
                <p className="text-slate-400 text-sm">React+Vite (used for this site!), HTML/CSS, Tailwind, Framer Motion</p>
              </div>
              <div>
                <h4 className="font-bold mb-3">Backend</h4>
                <p className="text-slate-400 text-sm">Flask in Python, AWS, Linux</p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 border-t border-slate-800 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement delay={0}>
            <h3 className="text-4xl font-bold mb-6">Let's Connect</h3>
            <p className="text-slate-400 text-lg mb-12">
              I'm interested in internship opportunities for the period of May 2026-August 2027. Feel free to reach out!
            </p>
            <div className="flex justify-center gap-6">
              <a href="mailto:ebad.rehman@ucalgary.ca" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
                <Mail size={20} /> Email
              </a>
              <a href="https://linkedin.com/in/rehmane" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-400 rounded-lg font-semibold transition">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="https://github.com/ebadr761" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-400 rounded-lg font-semibold transition">
                <Github size={20} /> GitHub
              </a>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p>© 2025 Ebad Rehman. Built with React.</p>
        </div>
      </footer>
    </div>
  );
}