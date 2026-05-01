"use client";

import React from "react";
import { motion } from "framer-motion";
import { useViewport } from "../context/ViewportContext";

export default function GlobalViewportWrapper({ children }) {
  const { viewportSize } = useViewport();

  const getWidth = () => {
    switch (viewportSize) {
      case "mobile": return "375px";
      case "tablet": return "768px";
      default: return "100%";
    }
  };

  const getScale = () => {
    if (typeof window === "undefined" || viewportSize === "desktop") return 1;
    const width = parseInt(getWidth());
    if (window.innerWidth < width + 40) {
      return (window.innerWidth - 40) / width;
    }
    return 1;
  };

  return (
    <div className="min-h-screen w-full bg-[#0B0F19] flex items-center justify-center overflow-hidden transition-all duration-500 p-4 lg:p-0">
      <motion.div
        animate={{ 
          width: getWidth(),
          height: viewportSize === "desktop" ? "100vh" : "85vh",
          borderRadius: viewportSize === "desktop" ? "0" : "32px",
          borderWidth: viewportSize === "desktop" ? "0" : "12px",
          scale: getScale()
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`bg-[#0d1117] relative shadow-2xl overflow-hidden border-[#1f2937] flex flex-col`}
      >
        {/* Device Notch Simulation */}
        {viewportSize === "mobile" && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1f2937] rounded-b-2xl z-[100]"></div>
        )}
        
        <div className="flex-1 flex flex-col overflow-hidden h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
