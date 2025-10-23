import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Header and Footer
import Header from "./components/Header";
import Footer from "./components/Footer";

// Placeholder pages
function Home() {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to Automated Light House System
        </h1>
        <p className="text-blue-500 text-lg">
          This is the front-end of the system. Use the navigation to explore features like uploading house plans, viewing LED simulation, and accessing the dashboard.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add more pages here later: Upload, Dashboard, About, Contact */}
      </Routes>
      <Footer />
    </Router>
  );
}
