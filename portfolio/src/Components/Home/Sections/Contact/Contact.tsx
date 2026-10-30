import SectionHeading from "@/Components/SectionHeading/SectionHeading"
import ActionBtn from "@/Components/ActionBtn/ActionBtn"
import "./contact.scss"

function Contact() {
  return <div className="contact">
    <SectionHeading text="Get In Touch" />
    <h2>Let's build something awesome.</h2>
    <div className="contact__buttons">
      <ActionBtn to="mailto:leon.mazurowski@gmail.com">Email me</ActionBtn>
      <ActionBtn to="https://github.com/loloToster">Github</ActionBtn>
    </div>
  </div>
}

export default Contact
