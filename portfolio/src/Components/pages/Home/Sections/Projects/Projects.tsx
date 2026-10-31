import "./projects.scss"
import SectionHeading from "@/Components/SectionHeading/SectionHeading"
import nexumImage from "@/assets/nexum.png"
import camImage from "@/assets/cam.png"
import owjsImage from "@/assets/owjs.png"
import ActionBtn from "@/Components/ActionBtn/ActionBtn"
import { useThemedGlitch } from "@/Hooks/useThemedGlitch"

interface PreviewI {
  img: string,
  name: string,
  description: string
}

const projects: PreviewI[] = [
  {
    img: camImage,
    name: "Cards Against Morality",
    description: "Responsive, web-based clone of a popular party card game designed for dark humor. With a focus on seamless gameplay, it currently entertains a growing community of over __,___ users."
  },
  {
    img: nexumImage,
    name: "Nexum",
    description: "Nexum is a complete custom IoT platform that simplifies building smart devices. It features seamless real-time communication between phone apps, web interfaces, and custom microcontrollers to automate your environment."
  },
  {
    img: owjsImage,
    name: "openweather.js",
    description: "Node.js wrapper that simplifies integrating the OpenWeather API into custom applications. Widely trusted by the developer community, this accessible library boasts an impressive milestone of over 250,000 downloads."
  }
]

function Preview({ img, name, description }: PreviewI) {
  // todo: fix card height
  const glitch = useThemedGlitch({ playMode: "hover" })

  return <div ref={glitch.ref} className="preview">
    <img src={img} alt={name + " Logo"} />
    <h2>{name}</h2>
    <p>{description}</p>
  </div>
}

function Projects() {
  return <div className="projects">
    <SectionHeading text="Featured projects" />

    <div className="projects__previews">
      {projects.map((project, i) => <Preview {...project} key={i} />)}
    </div>

    <div className="projects__more">
      <ActionBtn to="/projects">View all →</ActionBtn>
    </div>
  </div>
}

export default Projects
