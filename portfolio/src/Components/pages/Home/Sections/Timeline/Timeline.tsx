import "./timeline.scss"
import { motion } from "framer-motion"
import SectionHeading from "@/Components/SectionHeading/SectionHeading"

function Cloud({ idx, title, time, description, left }: { idx: number, title: string, time: string, description: string, left?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: idx == 2 ? 0.3 : 0, duration: 0.6, ease: "easeOut" }}
      className={`timeline__cloud ${left ? "timeline__cloud--left" : ""} timeline__cloud--${idx}`}>
      <h2>{title}</h2>
      <span>{time}</span>
      <p>{description}</p>
    </motion.div>
  )
}

function Timeline() {
  return <div className="timeline">
    <SectionHeading text="Career" />
    <div className="timeline__grid">
      <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line">
        <div className="inner"></div>
        <Cloud
          idx={1}
          title="Open-Source Engineer"
          time="2017 - Present"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quod deleniti eos modi aspernatur"
          left
        />
      </div>
      <div className="timeline__grid__item timeline__grid__item--line">
        <div className="inner"></div>
      </div>
      <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line timeline__grid__item--dot-line-up">
        <div className="inner"></div>
      </div>
      <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line">
        <div className="inner"></div>
        <Cloud
          idx={2}
          title="Warsaw&nbsp;University of&nbsp;Technology"
          time="2024 - Present"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quod deleniti eos modi aspernatur"
        />
      </div>
      <div className="timeline__grid__item timeline__grid__item--line">
        <div className="inner"></div>
      </div>
      <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line timeline__grid__item--dot-line-up">
        <div className="inner"></div>
      </div>
      <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line">
        <div className="inner"></div>
        <Cloud
          idx={3}
          title="Cloudsofthouse"
          time="2022 - 2023"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quod deleniti eos modi aspernatur"
        />
      </div>
      <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line timeline__grid__item--dot-line-up">
        <div className="inner"></div>
      </div>
      <div className="timeline__grid__item timeline__grid__item--dot">
        <div className="inner"></div>
        <Cloud
          idx={4}
          title="Beckhoff"
          time="2026"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quod deleniti eos modi aspernatur"
        />
      </div>
    </div>
  </div>
}

export default Timeline
