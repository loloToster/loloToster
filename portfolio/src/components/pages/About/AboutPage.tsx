import "./about-page.scss"

import loloTosterImage from "@/assets/lolotoster.png"
import leonImage from "@/assets/leon.jpg"

import { useTheme } from "@/contexts/theme/useTheme"
import PageBase from "@/components/PageBase/PageBase"
import SectionHeading from "@/components/SectionHeading/SectionHeading"

function AboutPage() {
  const { dark } = useTheme()

  return (
    <PageBase
      accentText="~/about - [QUICK OVERVIEW]"
      headerText="About Me"
      descText="I am a young fellow who builds versatile software and custom automated systems. From developing robust web platforms and open-source tools to tinkering with electronics, robotics, and custom IoT, I love exploring all sorts of IT and engineering stuff."
      imgSrc={dark ? loloTosterImage : leonImage}
    >
      <div className="about-page">
        <SectionHeading text="Experience" />
        <div className="exp">
          <div className="exp__title">
            <h2 className="exp__title__name">
              Open-Source
              <br /> Engineer
            </h2>
            <div className="exp__title__time">2017 - Present</div>
          </div>
          <div className="exp__desc">
            Since 2017, I have been building and maintaining a wide variety of
            open-source projects, sharing my work with the developer community.
            My projects span the entire tech stack—from responsive web
            applications and mobile apps to practical Python scripts and Node.js
            libraries. Beyond pure software, I specialize in designing
            full-scale custom automation systems from the ground up. This
            involves programming microcontrollers like ESPs and Arduinos, wiring
            electronics, and designing custom 3D-printed mechanical parts to
            bring hardware and software together. Alongside development, I
            manage my own servers and infrastructure to keep my public tools and
            home automation platforms running reliably. Whether it is a quick
            utility or a complete IoT ecosystem, I enjoy solving real-world
            problems through open, accessible engineering.
          </div>
          <div className="exp__title">
            <h2 className="exp__title__name">Cloudsofthouse</h2>
            <div className="exp__title__time">2022 - 2023</div>
          </div>
          <div className="exp__desc">
            As a Fullstack Developer at Cloudsofthouse, I worked on
            enterprise-level commercial platforms for major automotive brands,
            including a sales offers system for Isuzu and a parts order
            management platform for SsangYong dealers. My day-to-day
            responsibilities involved designing new features, troubleshooting
            complex bugs, and refactoring existing codebases to improve
            performance and maintainability. Working in an international
            environment with colleagues abroad taught me how to communicate
            clearly across teams and directly with clients to turn business
            requirements into reliable software. At the same time, the role
            demanded a high level of autonomy—I frequently had to take ownership
            of tasks, solve technical roadblocks independently, and deliver
            production-ready code on my own. It was a formative experience that
            sharpened both my collaborative and self-directed engineering
            skills.
          </div>
          <div className="exp__title">
            <h2 className="exp__title__name">
              Warsaw University
              <br /> of Technology
            </h2>
            <div className="exp__title__time">2024 - Present</div>
          </div>
          <div className="exp__desc">
            I am currently studying Automation and Robotization of Production
            Processes (AiRPP) at the Faculty of Mechanical and Industrial
            Engineering. My coursework bridges the gap between mechanics and
            intelligent control—focusing on industrial robotics, programming
            PLCs and controllers, and designing end-to-end mechatronics systems.
            Beyond the theory, I am learning how to integrate mechanical
            hardware, sensors, and control software into cohesive, automated
            production lines, building a solid engineering foundation that
            complements my software background.
          </div>
          <div className="exp__title">
            <h2 className="exp__title__name">Beckhoff</h2>
            <div className="exp__title__time">2026</div>
          </div>
          <div className="exp__desc">
            During my student internship at Beckhoff, I gained hands-on
            experience inside a leading industrial automation company and saw
            firsthand how professional engineering workflows operate at scale. I
            completed three specialized trainings covering PLC programming,
            industrial safety, and motion control, spending most of my time
            working within the TwinCAT environment to tackle practical technical
            tasks. One of the highlights was getting to connect to and write
            simple control programs for an XPlanar system—Beckhoff's
            magnetically levitating planar motor platform. Overall, I learned a
            tremendous amount about real-world industrial control and modern
            automation standards, and my coordinator recognized me as a highly
            capable and skilled intern able to pick up complex engineering tools
            quickly.
          </div>
        </div>
      </div>
    </PageBase>
  )
}

export default AboutPage
