"use client";

import { motion, AnimatePresence, color } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Navbar = ({}) => {
    return (
        <header className="sticky top-0 overflow-hidden items-center bg-neutral-800/50 backdrop-blur gap-14 z-50">
        <nav className="relative flex flex-nowrap contain-layout w-full overflow-hidden">
            <div className="inline-flex m-3 p-2 items-center gap-2 outline-none hover:opacity-45 transition-all cursor-pointer">
                <Image src={"/ovis.png"} alt="Ovistype" width={17} height={17}/>
            </div>
            <div id="devforum" className="flex justify-end ml-auto items-center pr-5 gap-3">
                <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} href="https://github.com/sl-ius/Ovis" className="flex h-[30px] border-none rounded-[7px] text-white/60 items-center justify-center text-[14px] p-3 font-medium hover:bg-neutral-600/30 hover:text-white hover:scale-105 transition-all cursor-pointer">GitHub</motion.a>
                <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} href="https://github.com/sl-ius/Ovis" className="flex h-[30px] border-none rounded-[7px] text-white/60 items-center justify-center text-[14px] p-3 font-medium hover:bg-neutral-600/30 hover:text-white hover:scale-105 transition-all cursor-pointer">Community</motion.a>
            </div>
        </nav>
    </header>
    );
};

export default Navbar