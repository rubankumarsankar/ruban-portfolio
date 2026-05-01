"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiTerminal,
  FiFolder,
  FiShare2,
  FiMessageSquare,
  FiMenu,
  FiX,
  FiMapPin,
  FiMail,
  FiPhone
} from "react-icons/fi";
import { portfolioData } from "../data/portfolio";

export default function Sidebar({ activeTab = "terminal" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#0B0F19] border border-[#38bdf8] text-[#38bdf8] rounded-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-screen w-64 border-r border-[#1f2937] flex flex-col justify-between bg-[#0d1117] z-50 md:z-10 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="overflow-y-auto overflow-x-hidden flex-1 flex flex-col">
          {/* Sidebar Header */}
          <div className="p-6 pt-16 md:pt-6 border-b border-[#1f2937]">
            <h1 className="text-white font-bold text-xl tracking-wider">
              {portfolioData.personalInfo.shortName}
            </h1>
            <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest font-mono">
              {portfolioData.personalInfo.version}
            </p>
          </div>

          {/* Navigation */}
          <nav className="mt-8 flex flex-col gap-2 font-mono">
            <Link href="/" className="block">
              <motion.button
                whileHover={{ paddingLeft: "1.75rem", backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(false)}
                className={`w-full flex items-center gap-4 px-6 py-4 text-sm font-semibold tracking-widest transition-all ${
                  activeTab === "terminal"
                    ? "text-[#38bdf8] border-r-2 border-[#38bdf8] bg-[#38bdf8]/5"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <FiTerminal size={18} />
                TERMINAL
              </motion.button>
            </Link>
            <Link href="/projects" className="block">
              <motion.button
                whileHover={{ paddingLeft: "1.75rem", backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(false)}
                className={`w-full flex items-center gap-4 px-6 py-4 text-sm font-semibold tracking-widest transition-all ${
                  activeTab === "projects"
                    ? "text-[#38bdf8] border-r-2 border-[#38bdf8] bg-[#38bdf8]/5"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <FiFolder size={18} />
                PROJECTS
              </motion.button>
            </Link>
            <Link href="/architecture" className="block">
              <motion.button
                whileHover={{ paddingLeft: "1.75rem", backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(false)}
                className={`w-full flex items-center gap-4 px-6 py-4 text-sm font-semibold tracking-widest transition-all ${
                  activeTab === "architecture"
                    ? "text-[#38bdf8] border-r-2 border-[#38bdf8] bg-[#38bdf8]/5"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <FiShare2 size={18} />
                ARCHITECTURE
              </motion.button>
            </Link>
            <Link href="/comms" className="block">
              <motion.button
                whileHover={{ paddingLeft: "1.75rem", backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(false)}
                className={`w-full flex items-center gap-4 px-6 py-4 text-sm font-semibold tracking-widest transition-all ${
                  activeTab === "comms"
                    ? "text-[#38bdf8] border-r-2 border-[#38bdf8] bg-[#38bdf8]/5"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <FiMessageSquare size={18} />
                COMMS
              </motion.button>
            </Link>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-[#1f2937] p-4 font-mono flex flex-col gap-3 mt-auto">
          <div className="px-2 pb-2 text-xs text-gray-500 flex flex-col gap-3 tracking-tight">
            <p className="flex items-center gap-2">
              <FiMapPin size={14} className="text-[#38bdf8]" /> {portfolioData.personalInfo.location}
            </p>
            <a 
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="flex items-center gap-2 truncate hover:text-white transition-colors" 
              title={portfolioData.personalInfo.email}
            >
              <FiMail size={14} className="text-[#38bdf8]" /> {portfolioData.personalInfo.email}
            </a>
            <a 
              href={`tel:${portfolioData.personalInfo.phone}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <FiPhone size={14} className="text-[#38bdf8]" /> {portfolioData.personalInfo.phone}
            </a>
          </div>
          <div className="flex gap-4 px-2 py-2 text-xs text-[#38bdf8]">
            <a href={portfolioData.personalInfo.github} className="hover:text-white transition-colors">GitHub</a>
            <a href={portfolioData.personalInfo.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </aside>
    </>
  );
}
