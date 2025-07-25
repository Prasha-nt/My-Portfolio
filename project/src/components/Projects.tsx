import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import images from '../assets/images';


const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'FoodCart',
      description: 'A responsive food ordering web app built with React, Tailwind CSS, and Redux, featuring live search, category filtering, and cart management with global state handling.',
      image: images.foodcart,
      tech: ['React', 'Tailwind CSS', 'Redux', 'Javascript'],
      liveUrl: 'https://foodcart-chi.vercel.app/',
      codeUrl: 'https://github.com/Prasha-nt/Foodcart',
      featured: true,
    },
    {
      id: 2,
      title: 'Shop Connect',
      description: 'ShopConnect is a full-stack platform that enables local shopkeepers to digitize their physical stores with online profiles, product catalogs, and customer interaction tools — all accessible via QR codes.',
      image: images.shopconnect,
      tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'JWT'],
      liveUrl: 'https://shop-connect-two.vercel.app/',
      codeUrl: 'https://github.com/Prasha-nt/ShopConnect',
      featured: true,
    },
    {
      id: 3,
      title: 'Disaster Resposne',
      description: 'Disaster Response Coordination Platform – A backend-focused MERN app for real-time disaster tracking using AI, geolocation, and social media data.',
      image: images.disaster,
      tech: ['React', 'Node', 'Socket.io', 'Supabase', 'Express'],
      liveUrl: 'https://disaster-response-theta.vercel.app/',
      codeUrl: 'https://github.com/Prasha-nt/Disaster-Response',
      featured: false,
    },
    {
      id: 4,
      title: 'SeekhLo',
      description: 'Frontend project aligned with UN Sustainable Development Goals using custom Bootstrap and JS.',
      image: images.seekhlo,
      tech: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
      liveUrl: 'https://seekh-lo.vercel.app/',
      codeUrl: 'https://github.com/Prasha-nt/SeekhLo',
      featured: false,
    },
    {
      id: 5,
      title: 'Form Builder',
      description: 'A sleek, drag-and-drop Form Builder built with React Remix and Tailwind CSS.',
      image: images.form,
      tech: ['React Remix', 'Redux', 'Tailwind CSS', 'Express'],
      liveUrl: 'https://form-builder-kappa-three.vercel.app/',
      codeUrl: 'https://github.com/Prasha-nt/Form-Builder',
      featured: false,
    },
    {
      id: 6,
      title: 'User Access Management',
      description: 'Full-stack User Access Management System with 3 user roles (Employee, Manager, Admin)',
      image: images.user,
      tech: ['React', 'Node', 'PostgreSQL', 'JWT'],
      liveUrl: 'https://user-access-management-sand.vercel.app/',
      codeUrl: 'https://github.com/Prasha-nt/User_access_management',
      featured: false,
    },
    {
      id: 7,
      title: 'Student ERP App',
      description: 'Mobile-first Student ERP Frontend built using Next.js for managing academics, attendance, fees, and more.',
      image: images.erp,
      tech: ['Next Js', 'PWA','Tailwind CSS', 'Javascript'],
      liveUrl: 'https://student-erp-nine.vercel.app/',
      codeUrl: 'https://github.com/Prasha-nt/Student-ERP',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my latest work and creative solutions
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Featured Projects</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-200"
                      >
                        <Github size={16} />
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                      >
                        <Eye size={14} />
                      </motion.a>
                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-1.5 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-200"
                      >
                        <Github size={14} />
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
