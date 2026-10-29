import "./section-heading.scss"

function SectionHeading({ text }: { text: string }) {
  return (
    <div className="section-heading">
      <div></div>
      <h1>{text}</h1>
      <div></div>
    </div>
  )
}

export default SectionHeading
