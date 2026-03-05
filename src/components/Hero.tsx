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

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >

          {/* TITLE */}
          <h1 className="font-orbitron text-[46px] sm:text-[58px] md:text-[72px] lg:text-[88px] leading-[0.95] tracking-[0.12em] lg:tracking-[0.15em] font-bold">

            <span className="block text-white">
              DRONES
            </span>

            <span className="block text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.35)]">
              DECODED
            </span>

          </h1>

          {/* SUBTITLE */}
          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
            An innovation ideathon exploring how autonomous drones
            can transform sustainability, disaster response,
            and environmental intelligence.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 justify-center lg:justify-start">

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
          className="relative flex justify-center mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* HALO */}
          <div className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full bg-cyan-500 blur-[120px] lg:blur-[140px] opacity-20" />

          {/* ORBIT RING */}
          <div className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] border border-cyan-400/20 rounded-full animate-[spin_20s_linear_infinite]" />

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
              className="w-[220px] md:w-[320px] lg:w-[420px] h-auto relative z-10 drop-shadow-[0_0_30px_rgba(0,255,255,0.3)]"
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}