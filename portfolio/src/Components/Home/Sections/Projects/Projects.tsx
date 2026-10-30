import SectionHeading from "@/Components/SectionHeading/SectionHeading"
import nexumImage from "@/assets/nexum.png"
import camImage from "@/assets/cam.png"
import owjsImage from "@/assets/owjs.png"
import "./projects.scss"
import ActionBtn from "@/Components/ActionBtn/ActionBtn"

function Projects() {
  return <div className="projects">
    <SectionHeading text="Featured projects" />

    <div className="projects__previews">
      <div className="preview">
        <img src={camImage} alt="CardsAgainstMorality Logo" />
        <h2>CardsAgainstMorality</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, beatae et. Fugiat sapiente, recusandae asperiores quaerat voluptate minus ut nulla molestiae autem consequatur esse quasi adipisci debitis quo maiores deserunt!</p>
      </div>
      <div className="preview">
        <img src={nexumImage} alt="Nexum Logo" />
        <h2>Nexum</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, beatae et. Fugiat sapiente, recusandae asperiores quaerat voluptate minus ut nulla molestiae autem consequatur esse quasi adipisci debitis quo maiores deserunt!</p>
      </div>
      <div className="preview">
        <img src={owjsImage} alt="openweather.js Logo" />
        <h2>openweather.js</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, beatae et. Fugiat sapiente, recusandae asperiores quaerat voluptate minus ut nulla molestiae autem consequatur esse quasi adipisci debitis quo maiores deserunt!</p>
      </div>
    </div>

    <div className="projects__more">
      <ActionBtn to="/projects">View all →</ActionBtn>
    </div>
  </div>
}

export default Projects
