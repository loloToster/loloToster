import "./home.scss"

import { useTheme } from "@/contexts/theme/useTheme"
import { useIsVisible } from "@/hooks/useIsVisible"
import Header from "@/components/Header/Header"
import Matrix from "@/components/Matrix/Matrix"
import Blobs, { type BlobI } from "@/components/Blobs/Blobs"

import Landing from "./Sections/Landing/Landing"
import Projects from "./Sections/Projects/Projects"
import Skills from "./Sections/Skills/Skills"
import Timeline from "./Sections/Timeline/Timeline"
import Contact from "./Sections/Contact/Contact"

function Home() {
  const { dark } = useTheme()

  const [targetRef, isInView] = useIsVisible({ threshold: 0.3 })

  const blobs: BlobI[] = [
    { pos: [70, 50], size: 4, color: 3 },
    { pos: [35, 50], size: 8, color: 2 },
    { pos: [25, 80], size: 12, color: 1 },
    { pos: [10, 20], size: 10, color: 4 },
    { pos: [5, 65], size: 5, color: 2 },
    { pos: [49, 30], size: 9, color: 1 },
    { pos: [55, 58], size: 5, color: 4 },
    { pos: [85, 20], size: 14, color: 2 },
    { pos: [92, 45], size: 7, color: 4 },
    { pos: [75, 85], size: 9, color: 3 },
    { pos: [82, 75], size: 6, color: 1 },
  ]

  return (
    <div className="home">
      <div className="banner">
        {dark ? <Matrix /> : <Blobs blobs={blobs} />}
      </div>
      <Header logoVisible={!isInView} stickyBg />
      <div ref={targetRef}>
        <Landing />
      </div>
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
    </div>
  )
}

export default Home
