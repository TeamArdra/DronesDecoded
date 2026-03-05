import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutEvent from "@/components/AboutEvent";
import ProblemStatements from "@/components/ProblemStatements";
import TeamArdra from "@/components/TeamArdra";
import Registration from "@/components/Registration";
import Submission from "@/components/Submission";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative pt-24">

      <Hero />

      <AboutEvent />

      <ProblemStatements />

      <TeamArdra />

      <Registration />

      <Submission />

      <Footer />

    </main>
  );
}