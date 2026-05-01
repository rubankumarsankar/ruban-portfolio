"use client";

import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { portfolioData } from "../../data/portfolio";

export default function Projects() {
  const projects = portfolioData.projects.standard;
  const advancedProject = portfolioData.projects.advanced;

  return (
    <div className="flex h-screen w-full bg-[#0B0F19] text-white font-mono overflow-hidden">
      {/* SIDEBAR */}
      <Sidebar activeTab="projects" />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <Header title="ROOT // PROJECTS_LIBRARY" />

        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="p-6 md:p-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-end mb-4">
                <div className="text-gray-500 text-[10px] tracking-[0.2em] font-mono">
                  SEC_02 // 13.0827
                </div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold font-sans tracking-tight mb-2">
                SYSTEM.PROJECTS_LIBRARY
              </h1>
              <p className="text-gray-500 text-sm tracking-widest uppercase mb-10">
                INDEXING DEPLOYED ARCHITECTURES // 5 RECORDS FOUND
              </p>

              {/* Grid Layout Container */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -8, boxShadow: "0 20px 40px -20px rgba(56,189,248,0.2)", borderColor: "#38bdf8" }}
                    className="bg-[#111520] border border-[#1f2937] p-8 flex flex-col relative group transition-all duration-300"
                  >
                    <div className="absolute top-6 right-6 text-[10px] text-gray-500 tracking-[0.2em] font-mono group-hover:text-[#38bdf8] transition-colors">
                      {project.id} // 13.0827 // {project.node}
                    </div>
                    <h3 className="text-2xl font-bold font-sans mb-1">
                      {project.title}
                    </h3>
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-[#38bdf8] text-sm tracking-wide uppercase">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-500 text-xs font-mono tracking-widest">
                        {project.duration}
                      </p>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans min-h-[40px]">
                      {project.description}
                    </p>

                    <div className="mb-8">
                      <ul className="space-y-2 text-gray-400 text-xs font-mono">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex gap-2 items-start">
                            <span className="text-[#38bdf8] mt-0.5">&gt;</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-auto">
                      <motion.button 
                        whileHover={{ scale: 1.05, backgroundColor: "#38bdf8", color: "#0d1117" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#38bdf8] text-[#0d1117] px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all"
                      >
                        LIVE DEMO
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                        whileTap={{ scale: 0.95 }}
                        className="border border-[#1f2937] text-white px-6 py-2 text-xs font-bold tracking-widest uppercase transition-colors"
                      >
                        REPO
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Advanced Project Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ boxShadow: "0 0 30px -10px rgba(56,189,248,0.15)", borderColor: "#38bdf8" }}
                className="border border-[#1f2937] bg-[#0d1117]/80 backdrop-blur-sm p-8 relative transition-all duration-500 group"
              >
                <div className="absolute top-8 right-8 text-[10px] text-gray-400 tracking-[0.2em] font-mono z-30 group-hover:text-[#38bdf8] transition-colors">
                  {advancedProject.id} // 13.0827 // {advancedProject.node}
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-sans mb-1 flex items-center gap-3">
                      {advancedProject.title}
                      <span className="bg-[#38bdf8] text-[#0d1117] px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase">Advanced</span>
                    </h3>
                    <div className="flex justify-between items-center mb-6 max-w-xl">
                      <p className="text-[#38bdf8] text-sm tracking-wide uppercase">
                        {advancedProject.subtitle}
                      </p>
                      <p className="text-gray-500 text-xs font-mono tracking-widest">
                        {advancedProject.duration}
                      </p>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xl font-sans">
                      {advancedProject.description}
                    </p>

                    <div className="mb-8">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-400 text-xs font-mono">
                        {advancedProject.features.map((feature, idx) => (
                          <li key={idx} className="flex gap-2 items-center">
                            <span className="text-[#38bdf8]">&gt;</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <motion.button 
                        whileHover={{ scale: 1.05, backgroundColor: "#38bdf8", color: "#0d1117", boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#38bdf8] text-[#0d1117] px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all"
                      >
                        LIVE DEMO
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                        whileTap={{ scale: 0.95 }}
                        className="border border-[#1f2937] text-white px-6 py-2 text-xs font-bold tracking-widest uppercase transition-colors"
                      >
                        REPO_ACCESS
                      </motion.button>
                    </div>
                  </div>

                  {/* Aggregate Graphic */}
                  <div className="flex-1 border border-[#1f2937] bg-[#090d14] relative p-4 flex flex-col h-48 lg:h-auto mt-4 lg:mt-0">
                    <div className="flex justify-between items-center mb-4 text-[10px] tracking-widest uppercase text-gray-500 border-b border-[#1f2937] pb-2">
                      <span>ETL_PIPELINE.SYS</span>
                      <span className="flex items-center gap-1 text-[#38bdf8] font-bold">
                        <span className="w-1.5 h-1.5 bg-[#38bdf8] block animate-pulse"></span> ACTIVE
                      </span>
                    </div>

                    <div className="flex flex-1 items-center justify-center gap-4 text-[#38bdf8] opacity-80">
                      {/* Visual representation of ETL */}
                      <div className="w-16 h-16 border-2 border-dashed border-[#38bdf8] rounded-full flex items-center justify-center text-xs">CSV</div>
                      <div className="w-12 h-[2px] bg-[#38bdf8]"></div>
                      <div className="w-16 h-16 bg-[#38bdf8]/20 border-2 border-[#38bdf8] flex items-center justify-center text-xs font-bold">PANDAS</div>
                      <div className="w-12 h-[2px] bg-[#38bdf8]"></div>
                      <div className="w-16 h-16 border-2 border-[#38bdf8] flex items-center justify-center text-xs">DB</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
