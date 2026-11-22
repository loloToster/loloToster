import "./projects.scss"

import { useCallback, useEffect, useRef, useState } from "react"
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

const DOTS_DURATION = 10000

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
  type,
  className,
  animate = true,
}: PreviewI & {
  type: "wide" | "thin"
  className?: string
  animate?: boolean
}) {
  const { dark } = useTheme()
  const { ref: glitchRef, startGlitch } = useThemedGlitch({
    playMode: type === "wide" ? "hover" : "manual",
  })

  useEffect(() => {
    startGlitch()
  }, [name, startGlitch])

  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 50 } : undefined}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={animate ? { once: true, amount: 0.3 } : undefined}
      transition={animate ? { duration: 0.6, ease: "easeOut" } : undefined}
      className={className}
    >
      <div
        className={`preview preview--${type}` + (dark ? "" : " light")}
        ref={glitchRef}
      >
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
  const { dark } = useTheme()
  const [thinCounter, setThinCounter] = useState(1)
  const intervalRef = useRef<number>(0)

  const startTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      setThinCounter(prev => (prev + 1) % projects.length)
    }, DOTS_DURATION)
  }, [])

  useEffect(() => {
    startTimer()
    return () => clearInterval(intervalRef.current)
  }, [startTimer])

  const slide = (step: number) => {
    setThinCounter(prev => {
      const idx = (prev + step) % projects.length
      return idx < 0 ? projects.length - 1 : idx
    })

    startTimer()
  }

  return (
    <div className="projects">
      <SectionHeading text="Featured projects" />

      <div className="projects__previews projects__previews--wide">
        {projects.map((project, i) => (
          <Preview {...project} type="wide" key={i} />
        ))}
      </div>

      <div className="projects__previews projects__previews--thin">
        <div className="projects__previews__slider-wrapper">
          <button
            onClick={() => slide(-1)}
            className="projects__previews__slider-wrapper__arrow projects__previews__slider-wrapper__arrow--left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8.03,22L6.25,20.23L14.48,12L6.25,3.77L8.03,2l10,10l-10,10Z" />
            </svg>
          </button>
          <button
            onClick={() => slide(1)}
            className="projects__previews__slider-wrapper__arrow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8.03,22L6.25,20.23L14.48,12L6.25,3.77L8.03,2l10,10l-10,10Z" />
            </svg>
          </button>
          <div className="projects__previews__slider">
            <div
              style={
                {
                  "--idx": thinCounter,
                  opacity: dark ? 0 : 1,
                } as React.CSSProperties
              }
              className="projects__previews__slider__inner"
            >
              {projects.map((project, i) => (
                <Preview {...project} type="thin" animate={false} key={i} />
              ))}
            </div>
            {dark && (
              <Preview
                {...projects[thinCounter]}
                type="thin"
                className="preview--glitched"
              />
            )}
          </div>
        </div>
        <div
          className="projects__dots"
          style={{ "--dur": DOTS_DURATION } as React.CSSProperties}
        >
          {projects.map((_, i) => (
            <div
              className={
                "projects__dots__dot" + (i === thinCounter ? " active" : "")
              }
              key={i}
            ></div>
          ))}
        </div>
      </div>

      <div className="projects__more">
        <ActionBtn to="/projects">View all →</ActionBtn>
      </div>
    </div>
  )
}

export default Projects
