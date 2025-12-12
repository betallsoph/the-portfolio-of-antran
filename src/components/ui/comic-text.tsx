"use client";

import { motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";

interface ComicTextProps {
  children: React.ReactNode;
  fontSize?: number;
  backgroundColor?: string;
  dotColor?: string;
  className?: string;
}

export const ComicText = ({
  children,
  fontSize = 5,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  backgroundColor = "white",
  dotColor = "#93C5FD",
  className,
}: ComicTextProps) => {
  return (
    <motion.div
      className={cn("font-black relative inline-block select-none", className)}
      style={{
        fontSize: `${fontSize}rem`,
        lineHeight: 1,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        WebkitTextStroke: `${fontSize * 0.35}px #000000`,
        color: "transparent",
        transform: "skewX(-10deg)",
        filter: "drop-shadow(5px 5px 0px #000000) drop-shadow(3px 3px 0px #2563EB)",
      }}
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: -2 }}
      whileHover={{ scale: 1.1, rotate: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, ${dotColor} 1.5px, transparent 0)`,
          backgroundSize: "8px 8px",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          zIndex: 1,
        }}
      >
        {children}
      </div>
      {children}
    </motion.div>
  );
};
