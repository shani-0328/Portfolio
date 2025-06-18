import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroRetroModernEnhanced from './components/HeroRetroModernEnhanced';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThemeForceDark from './components/ThemeForceDark';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <ThemeForceDark />
      <Navbar />
      <main>
        <HeroRetroModernEnhanced />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
