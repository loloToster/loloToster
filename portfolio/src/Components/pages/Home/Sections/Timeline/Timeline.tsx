import SectionHeading from "@/Components/SectionHeading/SectionHeading"
import "./timeline.scss"

function Timeline() {
  return <div className="timeline">
    <SectionHeading text="Career" />
    <div className="timeline__grid">
      <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line">
        <div className="inner"></div>
        <div className="timeline__cloud timeline__cloud--left timeline__cloud--1">
          <h2>Open&nbsp;Source Engineer</h2>
          <span>2017 - Present</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quod deleniti eos modi aspernatur</p>
        </div>
      </div>
      <div className="timeline__grid__item timeline__grid__item--line">
        <div className="inner"></div>
      </div>
      <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line timeline__grid__item--dot-line-up">
        <div className="inner"></div>
      </div>
      <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line">
        <div className="inner"></div>
        <div className="timeline__cloud timeline__cloud--2">
          <h2>Warsaw&nbsp;University of&nbsp;Technology</h2>
          <span>2024 - Present</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quod deleniti eos modi aspernatur</p>
        </div>
      </div>
      <div className="timeline__grid__item timeline__grid__item--line">
        <div className="inner"></div>
      </div>
      <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line timeline__grid__item--dot-line-up">
        <div className="inner"></div>
      </div>
      <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line">
        <div className="inner"></div>
        <div className="timeline__cloud timeline__cloud--3">
          <h2>Cloudsofthouse</h2>
          <span>2022 - 2023</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quod deleniti eos modi aspernatur</p>
        </div>
      </div>
      <div className="timeline__grid__item timeline__grid__item--dot timeline__grid__item--dot-line timeline__grid__item--dot-line-up">
        <div className="inner"></div>
      </div>
      <div className="timeline__grid__item timeline__grid__item--dot">
        <div className="inner"></div>
        <div className="timeline__cloud timeline__cloud--4">
          <h2>Beckhoff</h2>
          <span>2026</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quod deleniti eos modi aspernatur</p>
        </div>
      </div>
    </div>
  </div>
}

export default Timeline
