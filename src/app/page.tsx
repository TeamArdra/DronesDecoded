import Hero from "@/components/Hero";
import AboutEvent from "@/components/AboutEvent";
import ProblemStatements from "@/components/ProblemStatements";
import Registration from "@/components/Registration";
import Submission from "@/components/Submission";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden pt-24">

      <Hero />

      <AboutEvent />

      <ProblemStatements />

      <Registration />

      <Submission />

      <Footer />

    </main>
  );
}