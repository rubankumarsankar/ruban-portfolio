"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMonitor, FiCode, FiPlay, FiX } from "react-icons/fi";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

export default function Comms() {
  const [bootSequence, setBootSequence] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setBootSequence(1), 400),
      setTimeout(() => setBootSequence(2), 800),
      setTimeout(() => setBootSequence(3), 1200),
      setTimeout(() => setBootSequence(4), 1600),
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex h-screen w-full bg-[#0B0F19] text-white font-mono overflow-hidden">
      {/* SIDEBAR */}
      <Sidebar activeTab="comms" />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header title="ROOT // SECURE_COMMS_LINK" />

        <div className="flex-1 overflow-y-auto p-4 md:p-12 relative z-10 bg-[#0d1117]">
          <div className="min-h-full w-full flex items-center justify-center py-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-4xl border border-[#1f2937] bg-[#090d14] flex flex-col shadow-2xl"
            >
              {/* Terminal Header */}
              <div className="flex justify-between items-center px-4 py-3 border-b border-[#1f2937] text-[10px] sm:text-xs text-gray-500 tracking-widest uppercase bg-[#0B0F19]">
                <div className="flex gap-2 w-20">
                  <div className="w-2.5 h-2.5 rounded-full border border-red-500/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full border border-yellow-500/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]/40 border border-[#38bdf8]"></div>
                </div>

                <div className="flex-1 text-center truncate px-4">TTY1 // ROOT@RUBAN_SYS:~/COMMS</div>

                <div className="w-20 text-right">
                  <span className="text-[#38bdf8]">SEC_04</span> {" // "} 13.0827
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-8 lg:p-12 flex flex-col gap-6">
                <div className="flex flex-col gap-3 text-sm mb-4">
                  <div className={`text-[#38bdf8] transition-opacity duration-300 ${bootSequence >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                    &gt; Initializing secure comms link ...
                  </div>
                  <div className={`text-[#38bdf8] transition-opacity duration-300 ${bootSequence >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                    &gt; Establishing handshake protocol [OK]
                  </div>
                  <div className={`text-[#38bdf8] transition-opacity duration-300 ${bootSequence >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                    &gt; Encrypting packet payload: AES-256 [OK]
                  </div>
                  <div className={`font-bold transition-opacity duration-300 ${bootSequence >= 4 ? 'opacity-100' : 'opacity-0'}`}>
                    &gt; ruban --contact --init
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: bootSequence >= 4 ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-8"
                >
                  <div>
                    <label className="block text-[#38bdf8] text-sm mb-3">
                      [NAME]:
                    </label>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-500">&gt;_</span>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter identifier designation"
                        className="flex-1 bg-transparent border border-[#1f2937] p-3 text-sm text-gray-200 placeholder-gray-700 focus:outline-none focus:border-[#38bdf8] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#38bdf8] text-sm mb-3">
                      [EMAIL]:
                    </label>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-500">&gt;_</span>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter return vector"
                        className="flex-1 bg-transparent border border-[#1f2937] p-3 text-sm text-gray-200 placeholder-gray-700 focus:outline-none focus:border-[#38bdf8] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#38bdf8] text-sm mb-3 flex items-center gap-2">
                      [MESSAGE]: <span className="w-2 h-4 bg-[#38bdf8] animate-pulse block"></span>
                    </label>
                    <div className="flex items-start gap-4">
                      <span className="text-gray-500 pt-3">&gt;_</span>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Input payload data ..."
                        className="flex-1 bg-transparent border border-[#1f2937] p-4 h-32 resize-none text-sm text-gray-200 placeholder-gray-700 focus:outline-none focus:border-[#38bdf8] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <motion.button 
                      whileHover={{ scale: 1.05, backgroundColor: "#38bdf8", color: "#0d1117", boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#38bdf8] text-[#0d1117] px-6 py-3 text-sm font-bold tracking-widest flex items-center justify-center gap-3 transition-all sm:w-auto w-full"
                    >
                      <FiPlay size={14} fill="currentColor" />
                      [SEND_PACKET]
                    </motion.button>
                    <motion.button 
                      type="button"
                      onClick={handleClear}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                      whileTap={{ scale: 0.95 }}
                      className="border border-[#1f2937] text-white px-6 py-3 text-sm font-bold tracking-widest flex items-center justify-center gap-3 transition-colors sm:w-auto w-full"
                    >
                      <FiX size={16} />
                      [ABORT_COMMS]
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
