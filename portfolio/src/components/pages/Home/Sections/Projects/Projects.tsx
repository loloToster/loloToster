import "./projects.scss"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

import { useTheme } from "@/contexts/theme/useTheme"
import { useThemedGlitch } from "@/hooks/useThemedGlitch"
import SectionHeading from "@/components/SectionHeading/SectionHeading"
import ActionBtn from "@/components/ActionBtn/ActionBtn"

import nexumImage from "@/assets/logos/nexum.png"
import camImage from "@/assets/logos/cam.png"
import owjsImage from "@/assets/logos/owjs.png"

interface PreviewI {
  img: string
  name: string
  description?: React.ReactNode
  DynamicDescription?: () => React.JSX.Element
  link?: {
    text: string
    href: string
  }
}

const projects: PreviewI[] = [
  {
    img: camImage,
    name: "Cards Against Morality",
    DynamicDescription: () => {
      const { data } = useQuery({
        queryKey: ["cam", "meta"],
        queryFn: () =>
          fetch("https://cam.lolotoster.com/api/meta").then(res =>
            res.ok ? res.json() : Promise.reject(new Error("Fetch failed"))
          ),
      })

      return (
        <>
          Responsive, web-based clone of a popular party card game designed for
          dark humor. With a focus on seamless gameplay, it currently entertains
          a growing community of{" "}
          <span>
            {data?.users?.toLocaleString("en-US") || "12,000+"}&nbsp;users
          </span>
          .
        </>
      )
    },
    link: {
      text: "cam.lolotoster.com ➚",
      href: "https://cam.lolotoster.com/",
    },
  },
  {
    img: nexumImage,
    name: "Nexum",
    description: (
      <>
        Nexum is a complete custom IoT platform that simplifies building smart
        devices. It features seamless real-time{" "}
        <span>
          communication between phone apps, web interfaces, and microcontrollers
        </span>{" "}
        to automate your environment.
      </>
    ),
    link: {
      text: "github.com ➚",
      href: "https://github.com/loloToster/Nexum",
    },
  },
  {
    img: owjsImage,
    name: "openweather.js",
    DynamicDescription: () => {
      const { data } = useQuery({
        queryKey: ["npm", "openweather-api-node"],
        queryFn: () =>
          fetch(
            "https://api.npmjs.org/downloads/point/2000-01-01:3000-01-01/openweather-api-node"
          ).then(res =>
            res.ok ? res.json() : Promise.reject(new Error("Fetch failed"))
          ),
      })

      return (
        <>
          Node.js wrapper that simplifies integrating the OpenWeather API into
          custom applications. Widely trusted by the developer community, this
          accessible library boasts an impressive number of{" "}
          <span>
            {data?.downloads?.toLocaleString("en-US") || "500,000+"}
            &nbsp;downloads
          </span>
          .
        </>
      )
    },
    link: {
      text: "npmjs.com ➚",
      href: "https://www.npmjs.com/package/openweather-api-node",
    },
  },
]

function Preview({
  img,
  name,
  description,
  DynamicDescription,
  link,
}: PreviewI) {
  const { dark } = useTheme()
  const { ref: glitchRef } = useThemedGlitch({ playMode: "hover" })

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={"preview" + (dark ? "" : " light")} ref={glitchRef}>
        <img src={img} alt={name + " Logo"} />
        <h2>{name}</h2>
        {description && <p>{description}</p>}
        {DynamicDescription && (
          <p>
            <DynamicDescription />
          </p>
        )}
        {link && (
          <Link to={link.href} target="_blank">
            {link.text}
          </Link>
        )}
      </div>
    </motion.div>
  )
}

function Projects() {
  return (
    <div className="projects">
      <SectionHeading text="Featured projects" />

      <div className="projects__previews">
        {projects.map((project, i) => (
          <Preview {...project} key={i} />
        ))}
      </div>

      <div className="projects__more">
        <ActionBtn to="/projects">View all →</ActionBtn>
      </div>
    </div>
  )
}

export default Projects
