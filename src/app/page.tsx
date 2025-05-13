import AboutMe from './components/AboutMe';
import Shortcuts from './components/Shortcuts';
import Skills from './components/Skills';
import Experience from './components/Experience';
/*
import Projects from './components/Projects';
import Contact from './components/Contact';
*/

export default function Home() {
  return (
    <main className="min-h-screen">
      <AboutMe />
      <Shortcuts />
      <Skills />
      <Experience />
      {/*
      <Projects />
      <Contact />
      */}
    </main>
  );
}
