// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-8">
        <motion.h1
          className="text-4xl font-bold text-blue-600 mb-4 flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          About Our System <Sparkles />
        </motion.h1>

        <motion.p
          className="text-blue-500 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The Automated Light House System is designed to help homeowners and architects visualize smart home lighting setups. Using real-time simulations, users can understand LED positioning, buzzer alerts, and the overall automation experience.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Our Vision
            </h2>
            <p className="text-blue-500">
              To bring simple, interactive, and educational smart home simulations to everyone.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Our Passion
            </h2>
            <p className="text-blue-500 flex items-center gap-1">
              Creating intuitive solutions for home automation <Heart className="text-red-500" />
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
