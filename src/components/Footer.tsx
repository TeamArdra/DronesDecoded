"use client";

import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

export default function Footer() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <footer
      id="contact"
      className="relative pt-32 pb-12 px-6 lg:px-20 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">

        {/* MAIN GRID */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid md:grid-cols-3 gap-16"
        >

          {/* LOGO + DESCRIPTION */}

          <div>

            <div className="flex items-center gap-5 mb-6">

              <Image
                src={logo}
                alt="Team Ardra"
                width={70}
                height={70}
              />

              <h3 className="text-2xl font-bold tracking-wide">
                Team Ardra
              </h3>

            </div>

            <p className="text-gray-400 text-[17px] leading-[1.8] max-w-sm">

              Team Ardra is a student innovation group at VIT dedicated
              to advancing UAV technology, autonomous systems, and
              aerospace engineering through research, design,
              experimentation, and collaborative innovation.

            </p>

          </div>


          {/* NAVIGATION */}

          <div>

            <h4 className="text-lg font-semibold mb-6 text-cyan-400 tracking-wide">
              Navigation
            </h4>

            <ul className="space-y-4 text-gray-400 text-[16px]">

              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#problems" className="hover:text-white transition">
                  Problem Statements
                </a>
              </li>

              <li>
                <a href="#registration" className="hover:text-white transition">
                  Registrations
                </a>
              </li>

              <li>
                <a href="#submission" className="hover:text-white transition">
                  Submissions
                </a>
              </li>

            </ul>

          </div>


          {/* SOCIALS */}

          <div>

            <h4 className="text-lg font-semibold mb-6 text-blue-400 tracking-wide">
              Connect With Us
            </h4>

            <p className="text-gray-400 mb-8 text-[16px] leading-relaxed max-w-xs">
              Follow Team Ardra for updates on drone innovation,
              aerospace research, and upcoming technical events.
            </p>


            {/* ICONS */}

            <div className="flex gap-5">

              <a
                href="#"
                className="p-3 bg-white/[0.04] backdrop-blur border border-white/10 rounded-xl hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.35)] transition"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                className="p-3 bg-white/[0.04] backdrop-blur border border-white/10 rounded-xl hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition"
              >
                <Linkedin size={20} />
              </a>

            </div>

          </div>

        </motion.div>


        {/* DIVIDER */}

        <div className="mt-20 border-t border-white/10" />


        {/* COPYRIGHT */}

        <div className="mt-8 text-center text-gray-500 text-sm tracking-wide">

          © {new Date().getFullYear()} Team Ardra — Drones Decoded Ideathon

        </div>

      </div>
    </footer>
  );
}