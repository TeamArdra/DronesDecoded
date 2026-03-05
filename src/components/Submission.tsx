"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Submission() {

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
      id="submissions"
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

            FINAL

            <span className="block text-blue-400 mt-3 drop-shadow-[0_0_15px_rgba(59,130,246,0.35)]">
              SUBMISSION
            </span>

          </h2>

          <p className="text-gray-400 mt-8 text-xl max-w-2xl mx-auto">
            Upload your final concept and present your drone powered
            sustainability solution before the submission deadline.
          </p>
        </motion.div>


        {/* GRID */}

        <div className="grid lg:grid-cols-2 gap-14 items-stretch">


          {/* INSTRUCTIONS CARD */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-12 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.18)] transition-all duration-500 flex flex-col justify-between"
          >

            <div>

              <h3 className="text-3xl font-semibold text-blue-400 mb-8">
                Submission Guidelines
              </h3>

              <p className="text-gray-300 text-[18px] leading-[1.85] mb-8">

                Upload your final solution including the presentation,
                concept explanation, and implementation strategy to
                the shared submission folder.

                Your submission should clearly demonstrate the problem
                addressed, the drone-based approach, and the impact
                your solution can create for sustainability.

              </p>


              {/* STRUCTURED LIST */}

              <ul className="space-y-4 text-gray-300 text-[17px]">

                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  Problem description and motivation
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  Drone based solution architecture
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  Implementation strategy and feasibility
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  Sustainability impact of your solution
                </li>

              </ul>

            </div>


            {/* DEADLINE */}

            <div className="mt-12 p-6 rounded-xl bg-blue-500/10 border border-blue-400/30">

              <p className="text-gray-400 text-sm uppercase tracking-wider">
                Submission Deadline
              </p>

              <p className="text-2xl font-semibold text-white mt-1">
                4:15 PM
              </p>

            </div>

          </motion.div>



          {/* QR CARD */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative p-12 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 text-center hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(0,255,255,0.18)] transition-all duration-500 flex flex-col justify-center"
          >

            {/* glow background */}

            <div className="absolute inset-0 bg-cyan-500/5 blur-2xl opacity-30 pointer-events-none rounded-2xl" />

            <h3 className="text-2xl font-semibold text-cyan-400 mb-10">
              Scan to Upload
            </h3>


            {/* QR */}

            <div className="flex justify-center mb-10">

              <div className="p-6 bg-white rounded-xl shadow-xl">

                <Image
                  src="/qr-submissions.png"
                  alt="Submission QR"
                  width={240}
                  height={240}
                />

              </div>

            </div>


            {/* CTA */}

            <a
              href="https://forms.gle/MCgigCrWtpTkm5Kj6"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-500 text-white font-semibold hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300"
            >
              Open Submission Folder
              <ArrowUpRight size={18} />
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}