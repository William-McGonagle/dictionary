"use client";
// UploadAnimation.js

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowBigUpDash,
  Cloud,
  CornerLeftDown,
  CornerRightDown,
  File,
  Loader,
  LoaderCircle,
  MoveDown,
  RefreshCcwDot,
  RefreshCw,
} from "lucide-react";

const ProcessAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative flex flex-col items-center">
        <RefreshCw className="animate-spin " size={140} />
        <div className="flex flex-row text-3xl gap-4 mt-4">
          <span className="flex flex-col items-center">
            <CornerLeftDown size={40} />
            Dog
          </span>
          <span className="flex flex-col items-center">
            <MoveDown size={60} />
            Cat
          </span>
          <span className="flex flex-col items-center">
            <CornerRightDown size={40} />
            Bird
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProcessAnimation;
