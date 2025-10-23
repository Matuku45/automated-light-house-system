// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-8">

        {/* Contact Info */}
        <motion.div
          className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Get in Touch</h1>
          <p className="text-blue-500 mb-4">
            Have questions, feedback, or want to collaborate? Reach out to us through the contact details below or submit your message through the form.
          </p>

          <div className="flex flex-col gap-3 text-blue-600">
            <div className="flex items-center gap-2 font-semibold">
              <Mail /> info@automatedlighthouse.com
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <Phone /> +27 123 456 789
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <MapPin /> 123 Smart Street, Cape Town, South Africa
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <Clock /> Mon - Fri: 08:00 - 18:00
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="#" className="text-blue-500 hover:text-blue-700 transition">
              <Linkedin />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700 transition">
              <Twitter />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700 transition">
              <Github />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-400 transition"
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full focus:ring-2 focus:ring-blue-400 transition"
            rows={5}
          />
          <button
            type="submit"
            className="btn btn-primary mt-2 hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Footer CTA */}
      <motion.div
        className="mt-12 text-center text-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>
          Prefer direct communication? Call us or send an email—we respond within 24 hours!
        </p>
      </motion.div>
    </div>
  );
}
