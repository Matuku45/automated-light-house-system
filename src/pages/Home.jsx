// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto p-8">
        <motion.h1
          className="text-5xl font-extrabold text-blue-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to Automated Light House System
        </motion.h1>

        <motion.p
          className="text-lg text-blue-500 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Upload your house plan, simulate LEDs and buzzer, and monitor everything in real-time. This system brings your house automation visualization to life.
        </motion.p>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.03 }}
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Features
          </h2>
          <ul className="list-disc list-inside text-blue-500 space-y-2">
            <li>Upload house plans (PDF or Image)</li>
            <li>Interactive LED & buzzer simulation</li>
            <li>User dashboard with plan details</li>
            <li>Download simulation reports</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
