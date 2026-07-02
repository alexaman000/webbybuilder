import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import SmartForm from "@/components/SmartForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero />
      <FeaturedProjects />
      <Services />
      <WhyChooseMe />
      <SmartForm />
      <About />
    </main>
  );
}
