"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 lg:px-20 overflow-hidden"
    >
      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#00ffff_1px,transparent_1px),linear-gradient(to_bottom,#00ffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center w-full">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          {/* TITLE */}
          <h1 className="font-orbitron text-[64px] md:text-[88px] leading-[0.95] tracking-[0.15em] font-bold">

            <span className="block text-white">
              DRONES
            </span>

            <span className="block text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.35)]">
              DECODED
            </span>

          </h1>

          {/* SUBTITLE */}
          <p className="mt-6 text-gray-400 text-lg max-w-xl leading-relaxed">
            An innovation ideathon exploring how autonomous drones
            can transform sustainability, disaster response,
            and environmental intelligence.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-6 mt-10">

            <button
              onClick={() =>
                document
                  .getElementById("registrations")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition shadow-[0_0_20px_rgba(0,255,255,0.4)]"
            >
              Register Now
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("problem_statements")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-xl border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition"
            >
              View Problems
            </button>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* HALO */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500 blur-[140px] opacity-20" />

          {/* ORBIT RING */}
          <div className="absolute w-[380px] h-[380px] border border-cyan-400/20 rounded-full animate-[spin_20s_linear_infinite]" />

          {/* FLOATING DRONE */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Image
              src="/drone.png"
              alt="Drone"
              width={420}
              height={420}
              className="relative z-10 drop-shadow-[0_0_30px_rgba(0,255,255,0.3)]"
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}