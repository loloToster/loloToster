import SectionHeading from "@/Components/SectionHeading/SectionHeading"
import skillsData from "./skills.json"
import "./skills.scss"

function SkillsMarquee({ skills, right }: { skills: ({ name: string, themeColor: string })[], right?: boolean }) {
  return (
    <div className="skills__marquee" style={{ "--n-chars": skills.map(s => s.name).join(" ").length } as React.CSSProperties}>
      <div className={"skills__marquee__inner" + (right ? " right" : "")}>
        {[skills, skills].map((skills, i) => (
          <div key={i}>
            {skills.map((skill, j) => (
              <div style={{ color: skill.themeColor }} key={j}>{skill.name}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  return <div className="skills">
    <SectionHeading text="Skills" />
    <SkillsMarquee skills={skillsData.cat1} />
    <SkillsMarquee skills={skillsData.cat2} right />
    <SkillsMarquee skills={skillsData.cat3} />
    <SkillsMarquee skills={skillsData.cat4} right />
  </div>
}

export default Skills
