"use client";

import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { portfolioData } from "../../data/portfolio";

export default function Architecture() {
  return (
    <div className="flex h-screen w-full bg-[#0B0F19] text-white font-mono overflow-hidden">
      {/* SIDEBAR */}
      <Sidebar activeTab="architecture" />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header title="ROOT // SYSTEM_ARCH_LOG" />

        <div className="flex-1 overflow-y-auto px-4 py-8 md:px-12 relative z-10 bg-[#0d1117]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {/* Header Section */}
            <div className="border-b border-[#1f2937] pb-8 mb-12">
              <div className="flex justify-end mb-4">
                <div className="text-gray-500 text-[10px] tracking-[0.2em] font-mono">
                  SEC_03 // 13.0827
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold font-sans tracking-tight mb-2">
                SYSTEM_LOG
              </h1>
              <p className="text-gray-500 text-sm tracking-widest uppercase">
                {" // "} EXPERIENTIAL TIMELINE {" // "} OP_MODES {" // "} DEPLOYMENTS
              </p>
            </div>

            {/* Timeline Layout */}
            <div className="relative w-full min-h-[600px] mt-8">
              {/* Central Line for Desktop, Left Line for Mobile */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] border-l border-dashed border-[#1f2937] md:-translate-x-1/2 z-0"></div>

              <div className="w-full flex flex-col gap-12 lg:gap-16 pb-24 z-10 pt-4">

                {portfolioData.timeline.map((item, index) => {
                  const isLeft = item.type === "education";

                  return (
                    <div
                      key={index}
                      className={`relative flex flex-col md:flex-row items-center w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}
                    >
                      {/* Timeline Node (Cyan Square) */}
                      <div className="absolute left-6 md:left-1/2 w-2.5 h-2.5 border-2 border-[#38bdf8] bg-[#0d1117] transform -translate-x-[5px] z-20"></div>

                      {/* Desktop layout splits the row into two 50% sides */}
                      <div className="hidden md:block w-1/2"></div>

                      {/* Content side */}
                      <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isLeft ? 'md:pr-12 lg:pr-16' : 'md:pl-12 lg:pl-16'}`}>
                        <motion.div
                          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          whileHover={{ scale: 1.02, boxShadow: "0 10px 40px -15px rgba(56,189,248,0.2)" }}
                          transition={{ duration: 0.6 }}
                          className="bg-[#111520] border border-[#1f2937] p-8 relative group transition-all duration-300 hover:border-[#38bdf8]/50"
                        >
                          {/* Connector Line (Desktop) */}
                          <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 lg:w-16 h-[1px] border-b border-dashed border-[#1f2937] ${isLeft ? '-right-12 lg:-right-16' : '-left-12 lg:-left-16'}`}></div>

                          <div className="flex justify-between items-start mb-6">
                            <div className="text-[#38bdf8] text-xs sm:text-sm tracking-wider font-semibold uppercase">
                              {item.duration}
                            </div>
                            <div className="text-gray-500 text-[10px] sm:text-xs tracking-widest uppercase">
                              {item.id}
                            </div>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-bold font-sans mb-1">
                            {item.role}
                          </h3>
                          <div className="flex justify-between items-center mb-6">
                            <h4 className="text-gray-400 text-sm sm:text-lg font-sans group-hover:text-gray-200 transition-colors">
                              {item.entity}
                            </h4>
                            {item.percentage && (
                              <motion.span
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                                className="text-[#38bdf8] font-bold tracking-widest bg-[#38bdf8]/10 px-2 py-1 text-xs border border-[#38bdf8]/20"
                              >
                                {item.percentage}
                              </motion.span>
                            )}
                          </div>

                          {item.description && (
                            <p className="text-gray-300 text-sm leading-relaxed mb-8 font-sans">
                              {item.description}
                            </p>
                          )}

                          {/* Tags */}
                          {item.tags && item.tags.length > 0 && (
                            <div className="flex flex-wrap gap-4">
                              {item.tags.map((tag, tIdx) => (
                                <span key={tIdx} className="border border-[#1f2937] bg-[#0d1117] text-gray-300 px-3 py-1.5 text-[10px] sm:text-xs tracking-wider">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      </div>

                    </div>
                  );
                })}

              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
