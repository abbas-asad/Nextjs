import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, TypeScript, and MongoDB",
      tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Real-time task management application with team collaboration features",
      tech: ["React", "Firebase", "Redux", "Material-UI"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Dynamic weather application utilizing multiple weather APIs",
      tech: ["Next.js", "OpenWeather API", "ChartJS", "Tailwind CSS"],
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    "Next.js", "React", "TypeScript", "JavaScript",
    "Node.js", "MongoDB", "PostgreSQL", "Redis",
    "Docker", "AWS", "Git", "REST APIs",
    "GraphQL", "Tailwind CSS", "Material-UI", "SCSS"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold text-gray-800">Abbas</span>
            <div className="flex space-x-4">
              <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-800">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Next.js Developer
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Building modern web applications with cutting-edge technologies
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#contact"
                className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
                Contact Me
              </a>
              <a href="#projects"
                className="border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-lg mb-6">
              I'm a passionate Next.js developer with expertise in building scalable web applications.
              With a strong foundation in modern JavaScript and React, I create efficient and
              user-friendly solutions that solve real-world problems.
            </p>
            <p className="text-gray-600 text-lg">
              I love working with the latest technologies and am always eager to learn new skills
              to improve my development capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="flex items-center text-gray-600 hover:text-gray-800">
                      <Github className="w-5 h-5 mr-1" />
                      Code
                    </a>
                    <a href={project.live} className="flex items-center text-gray-600 hover:text-gray-800">
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <span className="text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="flex justify-center space-x-8">
            <a href="mailto:abbas07tech@gmail.com"
              className="flex items-center text-gray-600 hover:text-gray-800">
              <Mail className="w-6 h-6 mr-2" />
              Email
            </a>
            <a href="https://github.com/abbas-asad"
              className="flex items-center text-gray-600 hover:text-gray-800">
              <Github className="w-6 h-6 mr-2" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/abbas-asad"
              className="flex items-center text-gray-600 hover:text-gray-800">
              <Linkedin className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© 2024 Abbas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
