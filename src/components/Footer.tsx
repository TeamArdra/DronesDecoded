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
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 px-6 lg:px-20 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">

        {/* MAIN GRID */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid md:grid-cols-3 gap-12 sm:gap-14 lg:gap-16"
        >

          {/* LOGO + DESCRIPTION */}

          <div className="text-center md:text-left">

            <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-5 mb-5 sm:mb-6">

              <Image
                src={logo}
                alt="Team Ardra"
                width={60}
                height={60}
                className="sm:w-[65px] lg:w-[70px] h-auto"
              />

              <h3 className="text-xl sm:text-2xl font-bold tracking-wide">
                Team Ardra
              </h3>

            </div>

            <p className="text-gray-400 text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.8] max-w-sm mx-auto md:mx-0">

              Team Ardra is a student innovation group at VIT dedicated
              to advancing UAV technology, autonomous systems, and
              aerospace engineering through research, design,
              experimentation, and collaborative innovation.

            </p>

          </div>


          {/* NAVIGATION */}

          <div className="text-center md:text-left">

            <h4 className="text-base sm:text-lg font-semibold mb-5 sm:mb-6 text-cyan-400 tracking-wide">
              Navigation
            </h4>

            <ul className="space-y-3 sm:space-y-4 text-gray-400 text-[15px] sm:text-[16px]">

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
                <a href="#problem_statements" className="hover:text-white transition">
                  Problem Statements
                </a>
              </li>

              <li>
                <a href="#registrations" className="hover:text-white transition">
                  Registrations
                </a>
              </li>

              <li>
                <a href="#submissions" className="hover:text-white transition">
                  Submissions
                </a>
              </li>

            </ul>

          </div>


          {/* SOCIALS */}

          <div className="text-center md:text-left">

            <h4 className="text-base sm:text-lg font-semibold mb-5 sm:mb-6 text-blue-400 tracking-wide">
              Connect With Us
            </h4>

            <p className="text-gray-400 mb-6 sm:mb-8 text-[15px] sm:text-[16px] leading-relaxed max-w-xs mx-auto md:mx-0">
              Follow Team Ardra for updates on drone innovation,
              aerospace research, and upcoming technical events.
            </p>


            {/* ICONS */}

            <div className="flex justify-center md:justify-start gap-4 sm:gap-5">

              <a
                href="https://www.instagram.com/teamardra?igsh=MTdvdmt0dXdqNjA0Ng=="
                className="p-3 bg-white/[0.04] backdrop-blur border border-white/10 rounded-xl hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.35)] transition"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.linkedin.com/company/team-ardra/posts/?feedView=all"
                className="p-3 bg-white/[0.04] backdrop-blur border border-white/10 rounded-xl hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition"
              >
                <Linkedin size={20} />
              </a>

            </div>

          </div>

        </motion.div>


        {/* DIVIDER */}

        <div className="mt-16 sm:mt-18 lg:mt-20 border-t border-white/10" />


        {/* COPYRIGHT */}

        <div className="mt-6 sm:mt-8 text-center text-gray-500 text-xs sm:text-sm tracking-wide">

          © {new Date().getFullYear()} Team Ardra — Drones Decoded Ideathon

        </div>

      </div>
    </footer>
  );
}