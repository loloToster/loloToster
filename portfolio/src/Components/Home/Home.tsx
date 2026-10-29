import Header from "@/Components/Header/Header";
import Landing from "./Sections/Landing/Landing"
import Projects from "./Sections/Projects/Projects";

import "./home.scss"

function Home() {
  return <div className="home">
    <Header />
    <Landing />
    <Projects />
  </div>
}

export default Home
