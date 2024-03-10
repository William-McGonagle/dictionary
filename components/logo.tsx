"use client";

import { useState } from "react";

export default function Logo() {
  const [g, setG] = useState(false);
  const [u, setU] = useState(false);
  const [s, setS] = useState(false);
  const [d, setD] = useState(false);

  return (
    <span className="relative self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
      <span
        onMouseEnter={() => {
          setG(true);
        }}
        onMouseLeave={() => {
          setG(false);
        }}
      >
        G
      </span>
      <span
        className="relative"
        onMouseEnter={() => {
          setU(true);
        }}
        onMouseLeave={() => {
          setU(false);
        }}
      >
        U
      </span>
      <span
        className="relative"
        onMouseEnter={() => {
          setS(true);
        }}
        onMouseLeave={() => {
          setS(false);
        }}
      >
        S
      </span>
      <span
        className="relative"
        onMouseEnter={() => {
          setD(true);
        }}
        onMouseLeave={() => {
          setD(false);
        }}
      >
        D
      </span>
      .
      <span
        className={`${
          g ? `opacity-100` : `opacity-0 hidden`
        } absolute left-0 top-[32px] transition-opacity text-sm`}
      >
        Georgetown
      </span>
      <span
        className={`${
          u ? `opacity-100` : `opacity-0 hidden`
        } absolute left-0 top-[32px] transition-opacity text-sm`}
      >
        University
      </span>
      <span
        className={`${
          s ? `opacity-100` : `opacity-0 hidden`
        } absolute left-0 top-[32px] transition-opacity text-sm`}
      >
        Student
      </span>
      <span
        className={`${
          d ? `opacity-100` : `opacity-0 hidden`
        } absolute left-0 top-[32px] transition-opacity text-sm`}
      >
        Dictionary
      </span>
    </span>
  );
}
