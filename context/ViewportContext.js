"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ViewportContext = createContext();

export function ViewportProvider({ children }) {
  const [viewportSize, setViewportSize] = useState("desktop"); // desktop, tablet, mobile

  return (
    <ViewportContext.Provider value={{ viewportSize, setViewportSize }}>
      {children}
    </ViewportContext.Provider>
  );
}

export function useViewport() {
  return useContext(ViewportContext);
}
