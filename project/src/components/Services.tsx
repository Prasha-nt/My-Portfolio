import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, MonitorSmartphoneIcon, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive, fast, and scalable web applications using modern technologies like React, Node.js, and TypeScript.',
      features: ['Frontend Development', 'Backend APIs', 'Database Design', 'Performance Optimization'],
      color: 'from-blue-500 to-cyan-500',
    },
     {
      id: 2,
      icon: MonitorSmartphoneIcon,
      title: 'Software Development',
      description: 'Designing and developing scalable software solutions that solve real-world problems with clean and maintainable code.',
      features: ['System Design', 'Clean Code Practices', 'Version Control (Git)', 'Testing & Debugging'],
      color: 'from-indigo-500 to-purple-500',
      
    },
    {
      id: 3,
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive user interfaces that provide exceptional user experiences and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      color: 'from-purple-500 to-pink-500',
    }
  ];

  const [expandedCard, setExpandedCard] = React.useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent">
              My Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions to bring your digital vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 h-full shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: expandedCard === service.id ? 'auto' : 0,
                        opacity: expandedCard === service.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-4">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                          What's Included:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setExpandedCard(expandedCard === service.id ? null : service.id)}
                      className={`flex items-center text-sm font-semibold ${
                        expandedCard === service.id 
                          ? 'text-gray-600 dark:text-gray-400' 
                          : 'text-blue-600 dark:text-blue-400'
                      } hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200`}
                    >
                      {expandedCard === service.id ? 'Show Less' : 'Learn More'}
                      <ArrowRight 
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          expandedCard === service.id ? 'rotate-90' : ''
                        }`} 
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
