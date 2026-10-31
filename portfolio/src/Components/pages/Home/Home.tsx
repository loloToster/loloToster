import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Landing from "./Sections/Landing/Landing"
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";
import Timeline from "./Sections/Timeline/Timeline";
import Contact from "./Sections/Contact/Contact";

import "./home.scss"

function Home() {
  return <div className="home">
    <Header />
    <Landing />
    <Projects />
    <Skills />
    <Timeline />
    <Contact />
    <Footer />
  </div>
}

export default Home
