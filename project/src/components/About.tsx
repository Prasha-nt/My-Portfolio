import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Swords, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  const techStack = [
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'from-cyan-400 to-blue-600',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: 'from-green-400 to-emerald-600',
  },
  {
    name: 'VS Code',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    color: 'from-indigo-400 to-indigo-700',
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: 'from-blue-700 to-blue-900',
  },
  {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    color: 'from-zinc-400 to-gray-800',
  },
  {
    name: 'Express.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    color: 'from-gray-500 to-gray-700',
  },
  {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    color: 'from-pink-500 to-purple-600',
  },
];


  const stats = [
    { number: '15+', label: 'Projects Completed', icon: Code },
    { number: '12+', label: 'Technologies Learned', icon: Brain },
    { number: '3+', label: 'Personal Dev Tools Used', icon: Swords },
    { number: '100%', label: 'Passion & Commitment', icon: HeartHandshake },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate developer with a love for creating beautiful, functional digital experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div variants={itemVariants}>
              <div className="relative group">
                <div className="w-full max-w-md md:max-w-lg lg:max-w-xl aspect-square mx-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative w-full h-full bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 p-6 sm:p-8 group-hover:bg-white/15 dark:group-hover:bg-white/10 transition-all duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <img 
                        src="/src/assets/prashant.jpg"
                        alt="Profile"
                        className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 w-6 h-6 bg-blue-400/60 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-6 left-6 w-4 h-4 bg-purple-400/60 rounded-full animate-bounce"></div>
                      <div className="absolute top-1/2 left-4 w-3 h-3 bg-emerald-400/60 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Crafting Digital Experiences with Passion
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Hi, I'm <strong>Prashant Gupta</strong>, a <strong>full-stack web developer</strong> and <strong>designer</strong> with a strong foundation in modern technologies.
                I'm currently pursuing my <strong>B.Tech in Electronics and Communication Engineering</strong> from <strong>Madan Mohan Malaviya University of Technology, Gorakhpur</strong>, with a CGPA of <strong>8.25</strong>.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in building clean, responsive, and interactive web apps using the <strong>MERN stack, Next.js, and Tailwind CSS</strong>, with a passion for delivering smooth user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond frontend and backend, I’m experienced with <strong>PostgreSQL, MongoDB</strong>, and tools like Supabase. I’m always eager to explore new tech, collaborate on exciting projects, and build products that make an impact.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Let’s connect and build something impactful! 🚀
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 bg-white/80 dark:bg-white/5 backdrop-blur-lg rounded-lg border border-white/20 dark:border-white/10 shadow-md hover:shadow-lg hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">{stat.number}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
  <h3 className="text-2xl font-bold text-center mb-12 text-gray-800 dark:text-white">
    My Tech Arsenal
  </h3>

  <div className="relative overflow-hidden w-full max-w-6xl mx-auto">
    <motion.div
      className="flex gap-6 py-4"
      initial={{ x: 0 }}
      animate={{ x: ['0%', '-50%'] }} // loop movement
      transition={{
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      {/* Render tech logos twice for smooth loop */}
      {[...techStack, ...techStack].map((tech, index) => (
        <div
          key={`${tech.name}-${index}`}
          className="min-w-[120px] bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-xl p-4 shadow-lg text-center group border border-white/20 dark:border-white/10"
        >
          <div
            className={`w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-md`}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-7 h-7 object-contain"
            />
          </div>
          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">
            {tech.name}
          </h4>
        </div>
      ))}
    </motion.div>
  </div>
</motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
