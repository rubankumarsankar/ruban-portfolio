"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMonitor, FiTablet, FiSmartphone, FiCode, FiActivity, FiSearch } from "react-icons/fi";
import Link from "next/link";
import { useViewport } from "../context/ViewportContext";

export default function Header({ title = "ROOT // RUBAN_SYS" }) {
  const { viewportSize, setViewportSize } = useViewport();

  return (
    <header className="flex justify-between items-center p-4 pl-16 md:pl-6 lg:p-6 border-b border-[#1f2937] relative z-20 bg-[#0B0F19]/80 backdrop-blur-md">
      <h2 className="text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase text-[#38bdf8]">
        {title}
      </h2>
      
      <div className="flex gap-4 md:gap-6 text-gray-500 items-center">
        <div className="flex items-center gap-3 border-r border-[#1f2937] pr-6 mr-2 hidden lg:flex">
          <motion.button 
            whileHover={{ color: "#fff" }}
            onClick={() => setViewportSize("desktop")}
            className={`transition-colors ${viewportSize === "desktop" ? "text-[#38bdf8]" : ""}`}
          >
            <FiMonitor size={18} />
          </motion.button>
          <motion.button 
            whileHover={{ color: "#fff" }}
            onClick={() => setViewportSize("tablet")}
            className={`transition-colors ${viewportSize === "tablet" ? "text-[#38bdf8]" : ""}`}
          >
            <FiTablet size={18} />
          </motion.button>
          <motion.button 
            whileHover={{ color: "#fff" }}
            onClick={() => setViewportSize("mobile")}
            className={`transition-colors ${viewportSize === "mobile" ? "text-[#38bdf8]" : ""}`}
          >
            <FiSmartphone size={18} />
          </motion.button>
        </div>
        
        <Link href="/comms">
          <motion.button 
            whileHover={{ 
              backgroundColor: "#38bdf8", 
              color: "#0B0F19",
              boxShadow: "0 0 20px rgba(56, 189, 248, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#38bdf8] text-[#38bdf8] px-4 py-1.5 text-[10px] tracking-[0.2em] font-bold uppercase transition-all duration-300"
          >
            CONNECT
          </motion.button>
        </Link>
      </div>
    </header>
  );
}
