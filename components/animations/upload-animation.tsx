"use client";
// UploadAnimation.js

import React from "react";
import { motion } from "framer-motion";
import { ArrowBigUpDash, Cloud, File } from "lucide-react";

const UploadAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative flex flex-col items-center">
        <Cloud className="" size={140} />
        <ArrowBigUpDash className="relative animate-bounce mb-4" size={40} />
        <File className="relative animate-bounce" size={50} />
      </div>
    </div>
  );
};

export default UploadAnimation;
