"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Header_navbar from "@/components/navbar";
import logo from "@/public/logo-dark.png";
import Image from "next/image";

const NotFound = () => {
  return (
    <div id="loader-wrapper" className="overflow-x-auto">
      <div
        id="loader-inner"
        className="relative flex justify-center min-h-screen"
      >
        <div id="loader-text-container" className="flex gap-5 items-center">
          <AnimateText
            text="What are you looking for? :)"
            className="text-center text-8xl font-extrabold uppercase"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;

type props = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
};

const defaultvariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease:[0.1, 0.01 ,0.05, 0.95],
      duration: 0.7,
    },

  },
};

export const AnimateText = ({ text, el: Wrapper = "p", className }: props) => {
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {text.split(" ").map((word) => (
          <span className="inline-block">
            {word.split("").map((char) => (
              <motion.span className="inline-block" variants={defaultvariants}>
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
