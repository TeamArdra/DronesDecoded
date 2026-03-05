"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProblemStatements() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <section
      id="problem_statements"
      className="relative py-36 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-28"
        >
          <h2 className="text-[56px] md:text-[70px] font-bold tracking-[0.15em]">

            PROBLEM

            <span className="block text-cyan-400 mt-3 drop-shadow-[0_0_15px_rgba(0,255,255,0.35)]">
              STATEMENTS
            </span>

          </h2>

          <p className="text-gray-400 mt-8 text-xl max-w-2xl mx-auto">
            Explore the sustainability challenges participants will
            solve using drone technology and innovative thinking.
          </p>

        </motion.div>


        {/* CARDS GRID */}

        <div className="grid md:grid-cols-2 gap-12">


          {/* PROBLEM 1 */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group p-12 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(0,255,255,0.18)] transition-all duration-500 flex flex-col justify-between"
          >

            <div>

              <h3 className="text-3xl font-semibold text-cyan-400 mb-6">
                Environmental Monitoring with Drones
              </h3>

              <p className="text-gray-300 text-[18px] leading-[1.85] tracking-[0.01em] mb-8">

                Design an innovative drone-based solution capable of
                monitoring environmental conditions and collecting
                valuable data for sustainability initiatives.

                Solutions may focus on pollution monitoring, wildlife
                tracking, ecosystem health analysis, or disaster
                assessment using autonomous aerial systems.

              </p>

              <p className="text-gray-500 text-sm tracking-[0.15em] uppercase">
                Focus Area
              </p>

              <p className="text-white font-medium mt-1">
                Environmental Intelligence & Monitoring
              </p>

            </div>

            <a
              href="https://drone-environmental-monitoring-problem-statement.tiiny.site"
              target="_blank"
              className="mt-10 inline-flex items-center gap-3 px-7 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300"
            >
              View Full Problem
              <ArrowUpRight size={18} />
            </a>

          </motion.div>


          {/* PROBLEM 2 */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group p-12 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.18)] transition-all duration-500 flex flex-col justify-between"
          >

            <div>

              <h3 className="text-3xl font-semibold text-blue-400 mb-6">
                Drone Solutions for Sustainable Cities
              </h3>

              <p className="text-gray-300 text-[18px] leading-[1.85] tracking-[0.01em] mb-8">

                Develop a concept demonstrating how drone technology
                can improve urban sustainability through intelligent
                monitoring and aerial automation.

                Ideas may focus on smart infrastructure monitoring,
                resource optimization, traffic intelligence,
                or emergency response systems within modern cities.

              </p>

              <p className="text-gray-500 text-sm tracking-[0.15em] uppercase">
                Focus Area
              </p>

              <p className="text-white font-medium mt-1">
                Smart Cities & Urban Sustainability
              </p>

            </div>

            <a
              href="https://docs.google.com/document/d/1pYFiW51w93wlhZJzv7AQbM8ex9zp5pZtKOLmwRrPzWE/edit"
              target="_blank"
              className="mt-10 inline-flex items-center gap-3 px-7 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300"
            >
              View Full Problem
              <ArrowUpRight size={18} />
            </a>

          </motion.div>


        </div>

      </div>
    </section>
  );
}