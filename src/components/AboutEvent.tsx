"use client";

import { motion } from "framer-motion";

export default function AboutEvent() {

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
      id="about"
      className="relative py-36 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-28"
        >
          <h2 className="text-[58px] md:text-[72px] font-bold tracking-[0.15em]">
            ABOUT
            <span className="block text-cyan-400 mt-3 drop-shadow-[0_0_15px_rgba(0,255,255,0.35)]">
              THE EVENT
            </span>
          </h2>

          <p className="text-gray-400 mt-8 text-xl max-w-2xl mx-auto">
            Innovation meets sustainability through autonomous aerial systems.
          </p>
        </motion.div>

        {/* MAIN EVENT CARD */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-14 mb-14 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-500"
        >

          <h3 className="text-3xl font-semibold mb-8 text-cyan-400">
            What is Drones Decoded?
          </h3>

          <div className="space-y-6 text-[18px] text-gray-300 leading-[1.8]">

            <p>
              Drones Decoded is a high-energy innovation challenge where
              technology meets sustainability. Participants explore how
              autonomous aerial systems can solve real-world environmental
              problems and reshape the future of intelligent infrastructure.
            </p>

            <p>
              Teams brainstorm, design, and pitch impactful drone-driven
              solutions for challenges including disaster response,
              environmental monitoring, smart agriculture, and urban
              sustainability.
            </p>

            <p>
              From concept to execution strategy, participants develop
              solutions that are practical, scalable, and future-ready —
              combining technical creativity with real-world impact.
            </p>

          </div>

        </motion.div>


        {/* LOWER GRID */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* TEAM ARDRA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-12 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-500"
          >

            <h3 className="text-3xl font-semibold mb-8 text-cyan-400">
              Team Ardra
            </h3>

            <div className="space-y-6 text-[18px] text-gray-300 leading-[1.8]">

              <p>
                Team Ardra was founded to foster technical innovation in
                aviation at VIT. The team brings together passionate
                students dedicated to designing and developing advanced
                UAV systems.
              </p>

              <p>
                Through hands-on experimentation and research, members
                explore autonomous navigation, aerial robotics, and
                intelligent flight systems while building strong
                aerospace engineering expertise.
              </p>

              <p>
                By combining creativity with engineering rigor,
                Team Ardra aims to contribute to the future of
                autonomous aviation and inspire the next generation
                of innovators.
              </p>

            </div>

          </motion.div>


          {/* EVENT DETAILS */}
        {/* EVENT DETAILS */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="p-12 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 hover:border-blue-400/40 transition-all duration-500"
>

  <h3 className="text-3xl font-semibold mb-10 text-blue-400">
    Event Details
  </h3>

  <div className="space-y-8">

    <div>
      <p className="text-xs tracking-[0.18em] uppercase text-gray-500 mb-2">
        Date
      </p>
      <p className="text-[20px] font-semibold text-white">
        5 March 2026
      </p>
    </div>

    <div className="h-[1px] bg-white/10"></div>

    <div>
      <p className="text-xs tracking-[0.18em] uppercase text-gray-500 mb-2">
        Time
      </p>
      <p className="text-[20px] font-semibold text-white">
        2PM – 5PM
      </p>
    </div>

    <div className="h-[1px] bg-white/10"></div>

    <div>
      <p className="text-xs tracking-[0.18em] uppercase text-gray-500 mb-2">
        Venue
      </p>
      <p className="text-[20px] font-semibold text-white">
        MGR 305
      </p>
    </div>

    <div className="h-[1px] bg-white/10"></div>

    <div>
      <p className="text-xs tracking-[0.18em] uppercase text-gray-500 mb-2">
        Submission Deadline
      </p>
      <p className="text-[20px] font-semibold text-white">
        4:15 PM
      </p>
    </div>

    <div className="h-[1px] bg-white/10"></div>

    <div>
      <p className="text-xs tracking-[0.18em] uppercase text-gray-500 mb-2">
        Results
      </p>
      <p className="text-[20px] font-semibold text-white">
        4:50 PM
      </p>
    </div>

  </div>

</motion.div>
        </div>

      </div>
    </section>
  );
}