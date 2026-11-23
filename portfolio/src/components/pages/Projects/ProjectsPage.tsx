import "./projects-page.scss"

import skills from "@/assets/skills.json"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

interface ProjectsI {
  title?: string
  img?: string
  small?: boolean
  large?: boolean
  skills?: string[]
  description?: React.ReactNode
  DynamicDescription?: () => React.JSX.Element
  link?: {
    text: string
    href: string
    target?: React.HTMLAttributeAnchorTarget
  }
}

const projects: ProjectsI[] = [
  {
    title: "Nexum",
    large: true,
    skills: ["NestJS", "C++", "React Native", "PostgreSQL", "Redis"],
    description: (
      <>
        <div style={{ display: "flex" }}>
          <p style={{ flexGrow: 1, flexBasis: 0 }}>
            Complete IoT automation platform designed to simplify the creation
            and management of custom smart home devices built with the Arduino
            framework. It bridges the gap between software and hardware,
            delivering seamless,{" "}
            <span className="highlight">
              real-time communication across mobile apps, web interfaces, and
              microcontrollers
            </span>{" "}
            - turning electronics tinkering into a cohesive, everyday smart
            ecosystem.
          </p>
        </div>
      </>
    ),
    link: {
      text: "github.com\u00A0➚",
      href: "https://github.com/loloToster/Nexum",
      target: "_blank",
    },
  },
  {
    title: "My SmartHome",
    skills: ["Microcontrollers", "Raspberry Pi", "Fusion360"],
    DynamicDescription() {
      return <div>Collection of my custom-made devices:</div>
    },
  },
  {
    title: "openweather.js",
    skills: ["TypeScript", "Node.js", "REST"],
    DynamicDescription() {
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
        <p>
          Node.js wrapper that simplifies integrating the OpenWeather API into
          custom applications. Widely trusted by the developer community, this
          accessible library boasts an impressive number of{" "}
          <span className="highlight">
            {data?.downloads?.toLocaleString("en-US") || "500,000+"}
            &nbsp;downloads
          </span>
          .
        </p>
      )
    },
    link: {
      text: "npmjs.com\u00A0➚",
      href: "https://www.npmjs.com/package/openweather-api-node",
      target: "_blank",
    },
  },
  {
    title: "Cards Against Morality",
    large: true,
    skills: ["Express", "Vue", "PostgreSQL"],
    DynamicDescription() {
      const { data } = useQuery({
        queryKey: ["cam", "meta"],
        queryFn: () =>
          fetch("https://cam.lolotoster.com/api/meta").then(res =>
            res.ok ? res.json() : Promise.reject(new Error("Fetch failed"))
          ),
      })

      return (
        <p>
          Responsive, web-based adaptation of a popular party card game tailored
          for dark humor and effortless multiplayer sessions. Built with a
          strong focus on smooth, real-time gameplay and accessibility across
          devices, it requires zero downloads to jump in. What started as a fun
          side project now entertains a thriving community of{" "}
          <span className="highlight">
            {data?.users?.toLocaleString("en-US") || "over 12,000"}&nbsp;users
          </span>
        </p>
      )
    },
    link: {
      text: "cam.lolotoster.com\u00A0➚",
      href: "https://cam.lolotoster.com/",
      target: "_blank",
    },
  },
  {
    title: "Gorąca 20 x Spotify",
    small: true,
    skills: ["TypeScript", "Node.js", "REST"],
    description: (
      <p>
        Automated tool that keeps your Spotify playlist effortlessly synced with
        the live ESKA Gorąca 20-tka charts. Designed for hands-free updates, it
        brings trending Polish radio hits straight to your library.
      </p>
    ),
    link: {
      text: "github.com\u00A0➚",
      href: "https://github.com/loloToster/Goraca-20-Spotify-playlist",
      target: "_blank",
    },
  },
  {
    title: "Cloudia",
    small: true,
    skills: ["React", "Express", "SQLite"],
    description: (
      <p>
        Self-hosted personal cloud built to replace messaging yourself links,
        snippets, and files across devices. Featuring instant previews, pinned
        items, folder compression, and a companion CLI for fast, clutter-free
        organization.
      </p>
    ),
    link: {
      text: "github.com\u00A0➚",
      href: "https://github.com/loloToster/Cloudia",
      target: "_blank",
    },
  },
  {
    title: "Kaseciak",
    small: true,
    skills: ["TypeScript", "SQLite"],
    description: (
      <p>
        Feature-rich Discord music bot supporting YouTube, Spotify, and live
        Polish radio stations like RMF FM and Eska. Offers seamless playback
        with interactive button controls, slash commands, and lyrics search.
      </p>
    ),
    link: {
      text: "github.com\u00A0➚",
      href: "https://github.com/loloToster/Kaseciak",
      target: "_blank",
    },
  },
  {
    title: "Magnetic Robot",
    large: true,
    skills: ["Mechatronics Design", "3d Printing", "C++"],
    description: <p>Work in progress...</p>,
  },
  {
    title: "Tileio",
    skills: ["EJS", "Node.js", "HTML", "SCSS"],
    description: (
      <p>
        Highly customizable control panel platform for building personal
        dashboards in a few clicks. Tailor colors, sizes, and links
        effortlessly, or use the developer-friendly API to create dynamic custom
        widgets with standard web technologies.
      </p>
    ),
    link: {
      text: "github.com\u00A0➚",
      href: "https://github.com/loloToster/Tileio",
      target: "_blank",
    },
  },
  {
    title: "Hangman Dc Bot",
    skills: ["Python"],
    description: (
      <p>
        Custom Discord bot that brings classic Hangman straight to your server.
        Powered by dynamic image generation for visual gameplay and easily
        expandable with custom word lists for endless group fun.
      </p>
    ),
    link: {
      text: "github.com\u00A0➚",
      href: "https://github.com/loloToster/discord.py-Hangman",
      target: "_blank",
    },
  },
  {
    title: "Radiowęzeł63",
    large: true,
    skills: ["EJS", "JavaScript", "Node.js", "MongoDB"],
    description: (
      <p>
        Mobile-first web application built for my high school's student council
        to modernize their campus broadcasting center. It streamlines the entire
        music request process with role-based authentication, allowing students
        to suggest and vote on tracks while giving admins full moderation
        control. The platform also features a dedicated playback interface for
        seamlessly airing approved songs.
      </p>
    ),
    link: {
      text: "github.com\u00A0➚",
      href: "https://github.com/loloToster/RadioWezel63",
      target: "_blank",
    },
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
            (project.large ? " projects-page__item--large" : "") +
            (project.small ? " projects-page__item--small" : "")
          }
          key={i}
        >
          <h1>
            {project.img && <img src={project.img} />} {project.title}
          </h1>
          {project.description && (
            <div className="projects-page__item__desc">
              {project.description}
            </div>
          )}
          {project.DynamicDescription && (
            <div className="projects-page__item__desc">
              <project.DynamicDescription />
            </div>
          )}
          <div className="projects-page__item__bottom">
            <div className="projects-page__item__skills">
              {project.skills &&
                project.skills.map((s, i) => (
                  <div
                    className="projects-page__item__skill"
                    key={i}
                    style={
                      { "--color": getSkillColor(s) } as React.CSSProperties
                    }
                  >
                    {s}
                  </div>
                ))}
            </div>
            {project.link && (
              <Link to={project.link.href} target={project.link.target}>
                {project.link.text}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsPage
