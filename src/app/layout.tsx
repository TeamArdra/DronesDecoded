import "./globals.css";
import { Orbitron, Inter } from "next/font/google";
import Galaxy from "@/components/Galaxy";
import PillNav from "@/components/Navbar";
import logo from "@/assets/logo.png";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Drones Decoded",
  description: "Ideathon by Team Ardra",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${orbitron.variable} ${inter.variable} bg-[#060B16] text-white overflow-x-hidden`}
      >
        {/* NAVBAR */}
        <PillNav
          logo={logo.src}
          logoAlt=""
          items={[
            { label: "Home", href: "#home" },
            { label: "About Us", href: "#about" },
            { label: "Problem Statements", href: "#problem_statements" },
            { label: "Registrations", href: "#registrations" },
            { label: "Submissions", href: "#submissions" },
            { label: "Contact Us", href: "#contact" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          initialLoadAnimation
        />

        {/* GALAXY BACKGROUND */}
        <div className="fixed inset-0 -z-10 w-full h-full">
          <Galaxy transparent={false} />
        </div>

        {/* PAGE CONTENT */}
        <div className="relative w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}