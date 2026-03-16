import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-[60px]">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="px-8 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-[0.72rem] tracking-[0.08em] text-muted">
        <span>Peter Hille</span>
        <span>Columbus, OH · Wine &amp; Hospitality</span>
      </footer>
    </>
  );
}
