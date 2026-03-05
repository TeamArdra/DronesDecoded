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

                 Environmental degradation across forests, agricultural regions,
                 and water bodies is accelerating due to deforestation, pollution,
                 crop stress, and biodiversity loss.

                 Traditional monitoring methods rely on manual inspections or
                 satellite imagery which are often expensive, slow, and limited
                 in resolution. Drone technology enables continuous aerial
                 monitoring capable of collecting high-resolution environmental
                 data and detecting ecological threats much earlier.

                 In this challenge, participants must design an intelligent
                 drone-based monitoring system that can survey large geographic
                 areas and convert aerial data into actionable environmental
                 insights.

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
                Drone-Based Anti-Poaching Surveillance System
              </h3>

              <p className="text-gray-300 text-[18px] leading-[1.85] tracking-[0.01em] mb-8">

                Illegal wildlife poaching remains one of the most critical threats to
                biodiversity across protected forest reserves. Traditional ground
                patrols struggle to monitor vast territories and respond quickly to
                suspicious activities occurring in remote areas.

                In this challenge, participants must design a scalable drone-based
                surveillance ecosystem capable of monitoring large forest regions,
                detecting suspicious human activity, and enabling rapid response
                from forest patrol teams using intelligent aerial monitoring.

              </p>

              <p className="text-gray-500 text-sm tracking-[0.15em] uppercase">
                Focus Area
              </p>

              <p className="text-white font-medium mt-1">
                 Wildlife Protection & Anti-Poaching Surveillance
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