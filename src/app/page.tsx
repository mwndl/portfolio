import AboutMe from './components/AboutMe';
import Shortcuts from './components/Shortcuts';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="min-h-screen">
      <AboutMe />
      <Shortcuts />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
