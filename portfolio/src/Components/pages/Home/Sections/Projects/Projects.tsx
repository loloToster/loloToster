import "./projects.scss"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import { useTheme } from "@/Contexts/theme"
import { useThemedGlitch } from "@/Hooks/useThemedGlitch"
import SectionHeading from "@/Components/SectionHeading/SectionHeading"
import ActionBtn from "@/Components/ActionBtn/ActionBtn"

import nexumImage from "@/assets/nexum.png"
import camImage from "@/assets/cam.png"
import owjsImage from "@/assets/owjs.png"

interface PreviewI {
  img: string,
  name: string,
  description: string,
  link?: {
    text: string,
    href: string
  }
}

const projects: PreviewI[] = [
  {
    img: camImage,
    name: "Cards Against Morality",
    description: "Responsive, web-based clone of a popular party card game designed for dark humor. With a focus on seamless gameplay, it currently entertains a growing community of over __,___ users.",
    link: {
      text: "cam.lolotoster.com ➚",
      href: "https://cam.lolotoster.com/"
    }
  },
  {
    img: nexumImage,
    name: "Nexum",
    description: "Nexum is a complete custom IoT platform that simplifies building smart devices. It features seamless real-time communication between phone apps, web interfaces, and custom microcontrollers to automate your environment.",
    link: {
      text: "github.com ➚",
      href: "https://github.com/loloToster/Nexum"
    }
  },
  {
    img: owjsImage,
    name: "openweather.js",
    description: "Node.js wrapper that simplifies integrating the OpenWeather API into custom applications. Widely trusted by the developer community, this accessible library boasts an impressive milestone of over ___,___ downloads.",
    link: {
      text: "npmjs.com ➚",
      href: "https://www.npmjs.com/package/openweather-api-node"
    }
  }
]

function Preview({ img, name, description, link }: PreviewI) {
  const { dark } = useTheme()
  const glitch = useThemedGlitch({ playMode: "hover" })

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className={"preview" + (dark ? "" : " light")} ref={glitch.ref}>
        <img src={img} alt={name + " Logo"} />
        <h2>{name}</h2>
        <p>{description}</p>
        {link && <Link to={link.href} target="_blank">{link.text}</Link>}
      </div>
    </motion.div>
  )
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
