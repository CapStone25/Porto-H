import { Shield, Terminal, Lock, Code, Database, Network, Mail, Linkedin, Github, ExternalLink, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Penetration Testing', icon: Terminal, level: 90 },
    { name: 'Network Security', icon: Network, level: 85 },
    { name: 'Secure Coding', icon: Code, level: 88 },
    { name: 'Database Security', icon: Database, level: 82 },
    { name: 'Cryptography', icon: Lock, level: 87 },
    { name: 'Threat Analysis', icon: Shield, level: 90 },
  ];

  const projects = [
    {
      title: 'Enterprise Security Audit',
      description: 'Comprehensive security assessment for Fortune 500 company',
      tags: ['Penetration Testing', 'Network Security', 'Compliance'],
    },
    {
      title: 'Secure API Development',
      description: 'Built encrypted REST API with OAuth 2.0 implementation',
      tags: ['API Security', 'Authentication', 'Encryption'],
    },
    {
      title: 'Threat Detection System',
      description: 'ML-powered intrusion detection system with real-time alerts',
      tags: ['Machine Learning', 'IDS', 'Python'],
    },
  ];

  const certifications = [
    'OSCP - Offensive Security Certified Professional',
    'CEH - Certified Ethical Hacker',
    'CISSP - Certified Information Systems Security Professional',
    'CompTIA Security+',
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
      {/* Matrix-like background effect */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff41 2px, #00ff41 4px)',
          backgroundSize: '100% 50px',
          animation: 'matrix-scroll 20s linear infinite',
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-emerald-500/30 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Shield className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-all group-hover:rotate-12 duration-300" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              SecPro
            </span>
          </div>
          <div className="flex gap-6">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`hover:text-emerald-400 transition-all duration-300 relative group ${
                  activeSection === item.toLowerCase() ? 'text-emerald-400' : ''
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Cover Photo */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Cover Photo Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-[60vh] bg-gradient-to-br from-emerald-900/40 via-gray-900 to-cyan-900/40 relative overflow-hidden">
            {/* Placeholder for cover photo - user will replace this */}
            <div className="absolute inset-0 flex items-center justify-center text-emerald-400/20 text-xl">
              <div className="text-center">
                <Shield className="w-32 h-32 mx-auto mb-4 animate-pulse" />
                <img
                src='your-name-shooting-7680x4320-14938.jpg'
                />
              </div>
            </div>
            {/* Animated grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid"></div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950"></div>
          </div>
        </div>

        {/* Profile Section */}
        <div className={`relative z-10 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Profile Photo */}
          <div className="relative mx-auto w-48 h-48 mb-8 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 animate-spin-slow"></div>
            <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
              <div className="flex items-center justify-center w-full h-full">
                <img
                src="/MyPicture.jpg"
                alt="Profile"
                 className="w-full h-full object-cover rounded-full"
                 />
              </div>
            </div>
            <div className="absolute -inset-4 rounded-full border border-emerald-400/30 animate-ping-slow"></div>
          </div>

          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
            Abdulrahim Ahmed
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Terminal className="w-6 h-6 text-emerald-400 animate-pulse" />
            <p className="text-2xl text-gray-300">
              Cybersecurity Professional
            </p>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Protecting digital assets through ethical hacking, penetration testing, and secure architecture design.
            Passionate about staying ahead of emerging threats.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="group relative px-8 py-3 bg-emerald-500 text-gray-900 font-bold rounded-lg overflow-hidden hover:bg-emerald-400 transition-all duration-300">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
            <a href="#projects" className="px-8 py-3 border-2 border-emerald-500 text-emerald-400 font-bold rounded-lg hover:bg-emerald-500/10 transition-all duration-300 hover:scale-105">
              View Projects
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-emerald-400" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 flex items-center justify-center gap-4">
            <Lock className="w-12 h-12 text-emerald-400 animate-pulse" />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transform"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animation: `skillBar 1.5s ease-out ${index * 0.1}s both`,
                    }}
                  ></div>
                  <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
                <p className="text-right text-emerald-400 mt-2 font-mono">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900/30 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 flex items-center justify-center gap-4">
            <Code className="w-12 h-12 text-emerald-400 animate-pulse" />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-gray-950/50 backdrop-blur-sm border border-emerald-500/30 rounded-lg overflow-hidden hover:border-emerald-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="h-2 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500 animate-gradient"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 group-hover:scale-125 transition-all" />
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/30 hover:bg-emerald-500/20 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-8 text-emerald-400">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 bg-gray-950/50 backdrop-blur-sm p-4 rounded-lg border border-emerald-500/30 hover:border-emerald-400 hover:scale-105 transition-all duration-300"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1 + 0.5}s both`,
                  }}
                >
                  <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 flex items-center justify-center gap-4">
            <Mail className="w-12 h-12 text-emerald-400 animate-pulse" />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Interested in collaborating or have a security challenge? Let's talk.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="mailto:zongli278@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-lg hover:border-emerald-400 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            >
              <Mail className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform" />
              <span>Email</span>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-lg hover:border-emerald-400 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            >
              <Linkedin className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/CapStone25"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-lg hover:border-emerald-400 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            >
              <Github className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-500/30 py-8 text-center text-gray-400">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Shield className="w-5 h-5 text-emerald-400" />
          <span className="text-emerald-400 font-semibold">SecPro</span>
        </div>
        <p>&copy; 2025 All rights reserved. Built with security in mind.</p>
      </footer>
    </div>
  );
}

export default App;
