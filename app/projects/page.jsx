"use client";
import React from "react";
import { projects } from "@/utils/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="p-6 min-h-screen bg-gray-100 flex justify-center items-center text-4xl font-bold">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="flex flex-col"
      >
        <h2 className="text-center">Hey!</h2>
        <p className="text-lg text-gray-600">
          This page is going some improvements and will be available soon!
        </p>
      </motion.div>
    </div>
  );
}
