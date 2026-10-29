import { Link } from "react-router-dom"
import "./projects.scss"

function Projects() {
  return <div className="projects">
    <div className="projects__title">
      <div></div>
      <h1>My projects</h1>
      <div></div>
    </div>

    <div className="projects__previews">
      <div className="preview">
        <img src="https://dummyimage.com/400x400/6038cf/000" alt="" />
        <h2>Lorem</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, beatae et. Fugiat sapiente, recusandae asperiores quaerat voluptate minus ut nulla molestiae autem consequatur esse quasi adipisci debitis quo maiores deserunt!</p>
      </div>
      <div className="preview">
        <img src="https://dummyimage.com/400x400/6038cf/000" alt="" />
        <h2>Lorem</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, beatae et. Fugiat sapiente, recusandae asperiores quaerat voluptate minus ut nulla molestiae autem consequatur esse quasi adipisci debitis quo maiores deserunt!</p>
      </div>
      <div className="preview">
        <img src="https://dummyimage.com/400x400/6038cf/000" alt="" />
        <h2>Lorem</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, beatae et. Fugiat sapiente, recusandae asperiores quaerat voluptate minus ut nulla molestiae autem consequatur esse quasi adipisci debitis quo maiores deserunt!</p>
      </div>
    </div>

    <div className="projects__more">
      <Link to="/projects">More projects →</Link>
    </div>
  </div>
}

export default Projects
