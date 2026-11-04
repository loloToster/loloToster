import "./home.scss"

import { useIsVisible } from "@/Hooks/useIsVisible";
import Header from "@/Components/Header/Header";

import Landing from "./Sections/Landing/Landing"
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";
import Timeline from "./Sections/Timeline/Timeline";
import Contact from "./Sections/Contact/Contact";


function Home() {
  const [targetRef, isInView] = useIsVisible({ threshold: 0.3 });

  return (
    <div className="home">
      <Header logoVisible={!isInView} />
      <div ref={targetRef}>
        <Landing />
      </div>
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
    </div>
  )
}

export default Home
