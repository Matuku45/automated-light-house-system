import React from "react";
import { Phone, Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white mt-12"
    >
      <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-bold">Automated Light House System</h2>
          <p className="text-sm">© 2025 All rights reserved</p>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="mailto:contact@example.com" className="hover:text-yellow-300 flex items-center space-x-1">
            <Mail size={20} /> <span>contact@example.com</span>
          </a>
          <a href="tel:+1234567890" className="hover:text-yellow-300 flex items-center space-x-1">
            <Phone size={20} /> <span>+1234567890</span>
          </a>
          <a href="https://github.com/your-repo" target="_blank" className="hover:text-yellow-300 flex items-center space-x-1">
            <Github size={20} /> <span>GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-yellow-300 flex items-center space-x-1">
            <Linkedin size={20} /> <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
