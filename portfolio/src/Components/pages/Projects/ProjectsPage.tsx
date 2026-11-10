import "./projects-page.scss"

import skills from "@/assets/skills.json"
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
  skills?: string[]
}

const projects: ProjectsI[] = [
  { img: nexumLogo, large: true, skills: ["NestJS", "C++", "React Native", "PostgreSQL", "Redis"] },
  { title: "My SmartHome", skills: ["Custom IoT", "ESP", "Raspberry Pi", "Fusion360"] },
  { img: owjsLogo, skills: ["TypeScript", "Node.js", "REST"] },
  { title: "Cards Against Morality", img: camLogo, large: true, skills: ["Express", "Vue", "PostgreSQL"] },
  { img: g20xspoLogo, skills: ["TypeScript", "Node.js", "REST"] },
  { img: cloudiaLogo, skills: ["React", "Express", "SQLite"] },
  { img: kaseciakLogo, skills: ["TypeScript", "SQLite"] },
  { title: "Magnetic Robot", large: true, skills: ["Mechatronics Design", "3d Printing"] },
  { img: tileioLogo, skills: ["EJS", "Node.js", "HTML", "SCSS"] },
  { title: "Hangman Dc Bot", skills: ["Python"] },
  { img: rw63Logo, large: true, skills: ["EJS", "JavaScript", "Node.js", "MongoDB"] }
]

function getSkillColor(skillName: string) {
  for (const key in skills) {
    if (!Object.hasOwn(skills, key)) continue;

    const set = skills[key as keyof typeof skills];

    for (const s of set) {
      if (s.name === skillName) return s.themeColor
    }
  }

  return "#888"
}

function ProjectsPage() {
  return (
    <div className="projects-page">
      {projects.map((project, i) => (
        <div className={"projects-page__item" + (project.large ? " projects-page__item--large" : "")} key={i}>
          <h1>{project.img && <img src={project.img} />} {project.title}</h1>
          <p className="projects-page__item__desc"></p>
          <div className="projects-page__item__skills">
            {project.skills && project.skills.map((s, i) => (
              <div className="projects-page__item__skill" key={i} style={{ "--color": getSkillColor(s) } as React.CSSProperties}>{s}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsPage
