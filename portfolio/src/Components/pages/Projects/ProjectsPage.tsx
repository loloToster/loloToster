import "./projects-page.scss"

interface ProjectsI {
  title: string,
  large?: boolean
}

const projects: ProjectsI[] = [
  { title: "Nexum", large: true },
  { title: "My SmartHome" },
  { title: "openweather.js" },
  { title: "Cards Against Morality", large: true },
  { title: "Gorąca 20 x Spotify" },
  { title: "Cloudia" },
  { title: "Kaseciak" },
  { title: "Magnetic Robot", large: true },
  { title: "Tileio" },
  { title: "Hangman Dc Bot" },
  { title: "Radiowęzeł63", large: true }
]

function ProjectsPage() {
  return (
    <div className="projects-page">
      {projects.map((project, i) => (
        <div className={"projects-page__item" + (project.large ? " projects-page__item--large" : "")} key={i}>
          <h1>{project.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default ProjectsPage
