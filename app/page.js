"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCode, FiArrowRight, FiAtSign, FiDownload } from "react-icons/fi";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import { portfolioData } from "../data/portfolio";

export default function Home() {
  const [typedCode, setTypedCode] = useState("");
  const codeSnippet = `class ${portfolioData.home.codeSnippet.className}(Developer):
    def __init__(self):
        self.stack = ${portfolioData.home.codeSnippet.stack}
        self.focus = ${portfolioData.home.codeSnippet.focus}
        
    def execute_build(self, requirements):
        # Compiling optimal architecture
        return Backend.scale(infinity=True)`;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < codeSnippet.length) {
        setTypedCode(codeSnippet.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, [codeSnippet]);

  return (
    <div className="flex h-screen w-full bg-[#0d1117] text-white font-mono overflow-hidden">
      {/* SIDEBAR */}
      <Sidebar activeTab="terminal" />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Header */}
        <Header title="ROOT_ACCESS // TERMINAL_V1" />

        <div className="flex-1 overflow-y-auto">
          <div className="p-6 md:p-12">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 h-auto min-h-[50vh] items-center">
              {/* Left Col: Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-col items-start gap-6"
              >
                <div className="flex items-center gap-2 text-[#38bdf8] text-sm tracking-widest font-semibold uppercase">
                  <span className="w-2 h-2 bg-[#38bdf8] inline-block"></span>
                  SYSTEM.INIT // {portfolioData.personalInfo.shortName}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] font-sans tracking-tight whitespace-pre-wrap">
                  {portfolioData.home.heroTitle}
                </h1>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md font-mono">
                  &gt; {portfolioData.home.heroDescription}
                </p>

                <a href={portfolioData.personalInfo.resumeUrl} download>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 bg-[#38bdf8] text-[#0d1117] px-8 py-3 font-bold tracking-widest uppercase hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] flex items-center gap-3"
                  >
                    <FiDownload size={18} />
                    GET_RESUME
                  </motion.button>
                </a>
              </motion.div>

              {/* Right Col: Code Snippet */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative w-full border-t lg:border-t-0 lg:border-l border-[#1f2937] pt-8 lg:pt-0 lg:pl-12 h-full flex flex-col justify-center mt-4 lg:mt-0"
              >
                <div className="absolute top-0 right-0 text-gray-500 text-xs tracking-widest">
                  SEC_01 // 13.0827
                </div>

                <pre className="text-sm md:text-base text-gray-300 whitespace-pre-wrap leading-relaxed mt-4 font-mono">
                  {typedCode.split('\n').map((line, lineIdx, arr) => {
                    const tokens = line.split(/(class |def |return |self\.|self,|'[^']+'|#.*)/g);
                    return (
                      <div key={lineIdx}>
                        {tokens.map((token, idx) => {
                          if (token === 'class ' || token === 'def ' || token === 'return ') {
                            return <span key={idx} className="text-[#38bdf8]">{token}</span>;
                          }
                          if (token === 'self.' || token === 'self,') {
                            return <span key={idx} className="text-[#f472b6]">{token}</span>;
                          }
                          if (token.startsWith("'") && token.endsWith("'")) {
                            return <span key={idx} className="text-[#fb923c]">{token}</span>;
                          }
                          if (token.startsWith('#')) {
                            return <span key={idx} className="text-gray-500">{token}</span>;
                          }
                          return <span key={idx}>{token}</span>;
                        })}
                        {lineIdx === arr.length - 1 && (
                          <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="inline-block w-2 h-5 bg-[#38bdf8] align-middle ml-1"
                          ></motion.span>
                        )}
                      </div>
                    );
                  })}
                </pre>
              </motion.div>
            </div>

            {/* Capabilities Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-24 border-t border-[#1f2937] pt-12"
            >
              <div className="flex items-center gap-2 text-gray-500 text-sm tracking-widest uppercase mb-8">
                <FiAtSign size={14} />
                TECH_RADAR {" // "} CAPABILITIES
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {portfolioData.home.capabilities.map((cap, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, boxShadow: `0 10px 30px -10px ${cap.color}40` }}
                    transition={{ duration: 0.3 }}
                    className="border border-[#1f2937] p-6 bg-transparent relative group transition-colors duration-300"
                    style={{ '--hover-color': cap.color }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "2rem" }}
                      transition={{ duration: 0.8, delay: 0.8 + (idx * 0.2) }}
                      className="absolute top-0 left-6 h-[2px]"
                      style={{ backgroundColor: cap.color }}
                    ></motion.div>
                    <div className="flex justify-between items-center mb-6 mt-2">
                      <h3 className="text-lg font-sans font-semibold tracking-wide">
                        {cap.title}
                      </h3>
                      <span className="text-xs text-gray-600">{cap.id}</span>
                    </div>
                    <ul className="space-y-3 text-gray-400 text-sm">
                      {cap.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="flex gap-2 items-center">
                          <span className="text-gray-500">&gt;</span> {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
