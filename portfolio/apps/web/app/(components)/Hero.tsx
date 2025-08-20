"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container py-20 md:py-28">
        <motion.p initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/70">
          Software Engineer · TS/React · FastAPI · AI
        </motion.p>

        <motion.h1
          initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.05}}
          className="mt-3 text-4xl/tight md:text-6xl/tight font-semibold"
        >
          I build fast, modern <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">web apps</span> that scale.
        </motion.h1>

        <motion.p
          initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.1}}
          className="mt-5 max-w-2xl text-base md:text-lg text-white/80"
        >
          Frontend with Next.js, backend with FastAPI on AWS. View projects or get in touch.
        </motion.p>

        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.15}}
          className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact">
            <Button size="lg">
              Contact me <ArrowRight className="ml-2 h-4 w-4"/>
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="border-white/20 bg-white/5 backdrop-blur">
              About
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* soft glow accent */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-500/30 blur-3xl" />
    </section>
  );
}
