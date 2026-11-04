import "./projects-page.scss"

import nexumLogo from "@/assets/full-logos/nexum-full.png"
import owjsLogo from "@/assets/full-logos/owjs-full.png"
import camLogo from "@/assets/logos/cam.png"
import g20xspoLogo from "@/assets/full-logos/goraca20_x_spotify-full.png"
import cloudiaLogo from "@/assets/full-logos/cloudia-full.png"
import kaseciakLogo from "@/assets/full-logos/kaseciak-full.png"
import tileioLogo from "@/assets/full-logos/tileio-full.png"
import rw63Logo from "@/assets/full-logos/radiowezel63-full.png"

interface ProjectsI {
  title?: string,
  img?: string,
  large?: boolean
}

const projects: ProjectsI[] = [
  { img: nexumLogo, large: true },
  { title: "My SmartHome" },
  { img: owjsLogo },
  { title: "Cards Against Morality", img: camLogo, large: true },
  { img: g20xspoLogo },
  { img: cloudiaLogo },
  { img: kaseciakLogo },
  { title: "Magnetic Robot", large: true },
  { img: tileioLogo },
  { title: "Hangman Dc Bot" },
  { img: rw63Logo, large: true }
]

function ProjectsPage() {
  return (
    <div className="projects-page">
      {projects.map((project, i) => (
        <div className={"projects-page__item" + (project.large ? " projects-page__item--large" : "")} key={i}>
          <h1>{project.img && <img src={project.img} />} {project.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default ProjectsPage
