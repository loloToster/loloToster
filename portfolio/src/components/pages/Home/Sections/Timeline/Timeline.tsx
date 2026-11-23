import "./timeline.scss"
import { motion } from "framer-motion"
import SectionHeading from "@/components/SectionHeading/SectionHeading"
import ActionBtn from "@/components/ActionBtn/ActionBtn"

const elements = [
  {
    color: "#10b981",
    title: "Open-Source Engineer",
    time: "2017 - Present",
    description:
      "Developing diverse open-source projects, ranging from responsive web applications to complex home automation platforms. This involves designing custom IoT solutions, integrating 3D-printed components with electronics, programming microcontrollers, and managing servers.",
  },
  {
    color: "#f59e0b",
    title: "Warsaw\u00A0University of\u00A0Technology",
    time: "2024 - Present",
    description:
      "Studying Automation and Robotization of Production Processes, focusing on mechanical engineering, practical robotics, and end-to-end mechatronics projects.",
  },
  {
    color: "#0ea5e9",
    title: "Cloudsofthouse",
    time: "2022 - 2023",
    description:
      "Designed, refactored, and improved code for enterprise-level commercial platforms, including sales and order management systems for automotive dealers.",
  },
  {
    color: "#ef4444",
    title: "Beckhoff",
    time: "2026",
    description:
      "Completed a student internship where I programmed and connected PLCs, controlled XPlanar systems, and learned professional industrial automation workflows.",
  },
]

function Cloud({
  idx,
  left,
  floating,
}: {
  idx: number
  left?: boolean
  floating?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`timeline__cloud ${floating ? "timeline__cloud--floating" : ""} ${left ? "timeline__cloud--left" : ""} timeline__cloud--${idx}`}
    >
      <h2>{elements[idx].title}</h2>
      <span>{elements[idx].time}</span>
      <p>{elements[idx].description}</p>
    </motion.div>
  )
}

function Timeline() {
  return (
    <div className="timeline">
      <SectionHeading text="Career" />
      <div className="timeline__grid">
        <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line timeline__grid__item--dot-line-down">
          <div className="inner"></div>
          <Cloud idx={0} floating left />
        </div>
        <div className="timeline__grid__item timeline__grid__item--line">
          <div className="inner"></div>
        </div>
        <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line timeline__grid__item--dot-line-up">
          <div className="inner"></div>
        </div>
        <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line timeline__grid__item--dot-line-down">
          <div className="inner"></div>
          <Cloud idx={1} floating />
        </div>
        <div className="timeline__grid__item timeline__grid__item--line">
          <div className="inner"></div>
        </div>
        <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line timeline__grid__item--dot-line-up">
          <div className="inner"></div>
        </div>
        <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line timeline__grid__item--dot-line-down">
          <div className="inner"></div>
          <Cloud idx={2} floating />
        </div>
        <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line timeline__grid__item--dot-line-up">
          <div className="inner"></div>
        </div>
        <div className="timeline__grid__item timeline__grid__item--dot">
          <div className="inner"></div>
          <Cloud idx={3} floating />
        </div>
        <div className="timeline__cloud-wrapper timeline__cloud-wrapper--0">
          <Cloud idx={0} />
        </div>
        <div className="timeline__cloud-wrapper timeline__cloud-wrapper--2">
          <Cloud idx={2} />
        </div>
        <div className="timeline__cloud-wrapper timeline__cloud-wrapper--1">
          <Cloud idx={1} />
        </div>
        <div className="timeline__cloud-wrapper timeline__cloud-wrapper--3">
          <Cloud idx={3} />
        </div>
      </div>
      <div className="timeline__more">
        <ActionBtn to="/about">More About me →</ActionBtn>
      </div>
    </div>
  )
}

export default Timeline
