import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const FloatingResumeButton: React.FC = () => {
  const handleDownload = () => {
    // In a real application, you would link to your actual resume file
    const link = document.createElement('a');
    link.href = '/Prashant_Gupta_Resume.pdf'; 
    link.download = 'Prashant_Gupta_Resume.pdf';
    link.click();
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleDownload}
      className="fixed bottom-8 left-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <Download size={24} className="group-hover:animate-bounce" />
      <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Download Resume
      </span>
    </motion.button>
  );
};

export default FloatingResumeButton;