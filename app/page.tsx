"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Header_navbar from "@/components/navbar";
import logo from "@/public/logo-dark.png";
import Image from "next/image";

const Page = () => {
  return (
    <div id="wrapper" className="overflow-x-auto">
      <div id="inner" className="relative flex justify-center min-h-screen">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 1.3 }} id="huge" className="flex flex-col gap-5 justify-center items-center">
          <span className="font-extrabold justify-end">Hello There 👋</span>
          <AnimateText text="I'm Sius" className="text-center text-8xl font-extrabold uppercase"/>
          <span className="flex text-sm font-normal items-center text-white text-center animate-bounce rounded-full bg-black/100 w-[80px] h-[80px]">Scroll down</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;

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

export const AnimateText = ({ text, el: Wrapper = "div", className }: props) => {
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
          <div className="inline-block">
            {word.split("").map((char) => (
              <motion.span className="inline-block" variants={defaultvariants}>
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </div>
        ))}
      </motion.span>
    </Wrapper>
  );
};
