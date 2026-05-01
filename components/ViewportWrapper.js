"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useViewport } from "../context/ViewportContext";

export default function ViewportWrapper({ children }) {
  const { viewportSize } = useViewport();

  const getWidth = () => {
    switch (viewportSize) {
      case "mobile": return "375px";
      case "tablet": return "768px";
      default: return "100%";
    }
  };

  return (
    <div className="flex-1 flex justify-center bg-[#0B0F19] overflow-hidden transition-all duration-500">
      <motion.div
        animate={{ 
          width: getWidth(),
          height: viewportSize === "desktop" ? "100%" : "90%",
          marginTop: viewportSize === "desktop" ? "0" : "2%"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`bg-[#0d1117] relative shadow-2xl overflow-y-auto custom-scrollbar ${viewportSize !== "desktop" ? "border-[8px] border-[#1f2937] rounded-[32px]" : ""}`}
      >
        {/* Device Notch Simulation for mobile */}
        {viewportSize === "mobile" && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1f2937] rounded-b-2xl z-50"></div>
        )}
        
        <div className="h-full w-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
