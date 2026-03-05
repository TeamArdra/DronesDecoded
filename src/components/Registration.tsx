"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Registration() {

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
      id="registrations"
      className="relative py-36 px-6 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-24"
        >
          <h2 className="text-[56px] md:text-[70px] font-bold tracking-[0.15em]">

            EVENT

            <span className="block text-cyan-400 mt-3 drop-shadow-[0_0_15px_rgba(0,255,255,0.35)]">
              REGISTRATION
            </span>

          </h2>

          <p className="text-gray-400 mt-8 text-xl max-w-2xl mx-auto">
            Secure your spot in the Drones Decoded ideathon and start
            building the future of drone-powered sustainability.
          </p>
        </motion.div>


        {/* QR CARD */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto max-w-xl"
        >

          <div className="relative p-14 rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 text-center hover:border-cyan-400/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,255,255,0.18)]">

            {/* glow background */}
            <div className="absolute inset-0 rounded-3xl bg-cyan-500/5 blur-2xl opacity-30 pointer-events-none" />

            <h3 className="text-2xl font-semibold text-cyan-400 mb-10">
              Scan to Register
            </h3>


            {/* QR */}

            <div className="flex justify-center mb-10">

              <div className="p-6 rounded-xl bg-white shadow-xl">

                <Image
                  src="/qr-registrations.png"
                  alt="Registration QR"
                  width={240}
                  height={240}
                />

              </div>

            </div>


            {/* CTA */}

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdGhK840jlRRuoSSHn8XW64RNu_NevHMQ-KW70pz5ngCvcGtA/viewform"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] transition-all duration-300"
            >
              Open Registration Form
              <ArrowUpRight size={18} />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}