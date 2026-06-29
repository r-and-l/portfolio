import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import { Section } from "../components/common/Section";

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-50 transition-colors duration-300 dark:bg-zinc-950">
      <Header />
      <Hero />
      <main className="mx-auto max-w-7xl px-6 md:px-8">
        <Section id="about">
          <div className="grid gap-8 lg:grid-cols-12 items-stretch w-full">
            <div className="lg:col-span-5 h-full">
              <About />
            </div>
            <div className="lg:col-span-7 h-full">
              <Skills />
            </div>
          </div>
        </Section>
        <Projects />
        <Section id="contact" flexLayout={true} className="pb-6" bottomPadding={false}>
          <Contact />
          <Footer />
        </Section>
      </main>
    </div>
  );
};

export default Home;
