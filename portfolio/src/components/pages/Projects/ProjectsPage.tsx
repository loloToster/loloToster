import "./projects-page.scss"

import skills from "@/assets/skills.json"

interface ProjectsI {
  title?: string
  img?: string
  large?: boolean
  skills?: string[]
}

const projects: ProjectsI[] = [
  {
    title: "Nexum",
    large: true,
    skills: ["NestJS", "C++", "React Native", "PostgreSQL", "Redis"],
  },
  {
    title: "My SmartHome",
    skills: ["Microcontrollers", "Raspberry Pi", "Fusion360"],
  },
  { title: "openweather.js", skills: ["TypeScript", "Node.js", "REST"] },
  {
    title: "Cards Against Morality",
    large: true,
    skills: ["Express", "Vue", "PostgreSQL"],
  },
  { title: "Gorąca 20 x Spotify", skills: ["TypeScript", "Node.js", "REST"] },
  { title: "Cloudia", skills: ["React", "Express", "SQLite"] },
  { title: "Kaseciak", skills: ["TypeScript", "SQLite"] },
  {
    title: "Magnetic Robot",
    large: true,
    skills: ["Mechatronics Design", "3d Printing"],
  },
  { title: "Tileio", skills: ["EJS", "Node.js", "HTML", "SCSS"] },
  { title: "Hangman Dc Bot", skills: ["Python"] },
  {
    title: "Radiowęzeł63",
    large: true,
    skills: ["EJS", "JavaScript", "Node.js", "MongoDB"],
  },
]

function getSkillColor(skillName: string) {
  for (const key in skills) {
    if (!Object.hasOwn(skills, key)) continue

    const set = skills[key as keyof typeof skills]

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
        <div
          className={
            "projects-page__item" +
            (project.large ? " projects-page__item--large" : "")
          }
          key={i}
        >
          <h1>
            {project.img && <img src={project.img} />} {project.title}
          </h1>
          <p className="projects-page__item__desc"></p>
          <div className="projects-page__item__skills">
            {project.skills &&
              project.skills.map((s, i) => (
                <div
                  className="projects-page__item__skill"
                  key={i}
                  style={{ "--color": getSkillColor(s) } as React.CSSProperties}
                >
                  {s}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsPage
