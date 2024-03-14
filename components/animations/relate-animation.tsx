"use client";
// UploadAnimation.js

import React from "react";
import { motion } from "framer-motion";
import { ArrowBigUpDash, Cloud, File, MoveVerticalIcon } from "lucide-react";

const RelateAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative flex flex-col items-center">
        <span className="text-4xl">Dog</span>
        <MoveVerticalIcon
          className="relative animate-bounce mb-4 mt-8"
          size={40}
        />
        <span className="text-4xl">Cat</span>
      </div>
    </div>
  );
};

export default RelateAnimation;
