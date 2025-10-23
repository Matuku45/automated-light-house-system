// src/pages/Dashboard.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Home, FileText, Settings, Zap, Bell, Grid } from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [uploadedFile, setUploadedFile] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleFileChange = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.div
        className={`bg-blue-600 text-white flex flex-col p-5 space-y-6 ${
          sidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300`}
        initial={{ width: 0 }}
        animate={{ width: sidebarOpen ? 256 : 80 }}
      >
        <div className="flex items-center justify-between">
          {sidebarOpen && <h1 className="text-2xl font-bold">Dashboard</h1>}
          <button onClick={toggleSidebar} className="btn btn-sm btn-outline">
            {sidebarOpen ? "<<" : ">>"}
          </button>
        </div>

        <nav className="flex flex-col gap-4 mt-6">
          <a className="flex items-center gap-3 hover:text-yellow-400">
            <Home /> {sidebarOpen && "Home"}
          </a>
          <a className="flex items-center gap-3 hover:text-yellow-400">
            <FileText /> {sidebarOpen && "Plans"}
          </a>
          <a className="flex items-center gap-3 hover:text-yellow-400">
            <Zap /> {sidebarOpen && "LED Simulation"}
          </a>
          <a className="flex items-center gap-3 hover:text-yellow-400">
            <Bell /> {sidebarOpen && "Buzzer Simulation"}
          </a>
          <a className="flex items-center gap-3 hover:text-yellow-400">
            <Settings /> {sidebarOpen && "Settings"}
          </a>
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <motion.h2
          className="text-3xl font-bold text-blue-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Welcome to your Dashboard
        </motion.h2>

        {/* Upload House Plan */}
        <motion.div
          className="bg-white rounded-lg p-6 shadow-md mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
            <Upload /> Upload House Plan
          </h3>
          <input
            type="file"
            accept=".pdf,.jpg,.png"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={handleFileChange}
          />
          {uploadedFile && (
            <p className="mt-2 text-blue-500">
              Selected File: {uploadedFile.name}
            </p>
          )}
        </motion.div>

        {/* Simulation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="text-yellow-400" size={48} />
            <h4 className="text-lg font-semibold text-blue-600">
              LED 1 Simulation
            </h4>
            <div className="w-12 h-12 bg-yellow-400 rounded-full animate-pulse"></div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="text-green-400" size={48} />
            <h4 className="text-lg font-semibold text-blue-600">
              LED 2 Simulation
            </h4>
            <div className="w-12 h-12 bg-green-400 rounded-full animate-pulse"></div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="text-red-400" size={48} />
            <h4 className="text-lg font-semibold text-blue-600">
              LED 3 Simulation
            </h4>
            <div className="w-12 h-12 bg-red-400 rounded-full animate-pulse"></div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <Bell className="text-blue-400" size={48} />
            <h4 className="text-lg font-semibold text-blue-600">Buzzer</h4>
            <div className="w-12 h-12 bg-blue-400 rounded-full animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
