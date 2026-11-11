import "./home.scss"

import { useEffect, useState } from "react";

import { useTheme } from "@/Contexts/theme";
import { useIsVisible } from "@/Hooks/useIsVisible";
import Header from "@/Components/Header/Header";

import Landing from "./Sections/Landing/Landing"
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";
import Timeline from "./Sections/Timeline/Timeline";
import Contact from "./Sections/Contact/Contact";

interface Col {
  position: number,
  letters: string[],
  currentAnimationPos: number
}

const ANIMATION_LEN = 10

const generateLetters = () => {
  return Array.from({ length: 40 }, () => {
    const randomCharCode = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(randomCharCode);
  })
}

function Home() {
  const { dark } = useTheme()

  const [targetRef, isInView] = useIsVisible({ threshold: 0.3 });

  const [cols, setCols] = useState<Col[]>([])

  const addRandomCol = () => {
    setCols(prev => {
      const usedPositions = prev.map(col => col.position)

      const availablePositions: number[] = [];
      for (let i = 0; i <= 140; i++) {
        if (!usedPositions.includes(i)) {
          availablePositions.push(i);
        }
      }

      if (availablePositions.length === 0) return prev

      const randomIndex = Math.floor(Math.random() * availablePositions.length);

      return [
        ...prev,
        {
          position: availablePositions[randomIndex],
          letters: generateLetters(),
          currentAnimationPos: 0
        }
      ]
    })
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!dark) return

      addRandomCol()

      setCols(prev => {
        return prev.map(col => {
          const newPos = col.currentAnimationPos + 1

          return {
            ...col,
            currentAnimationPos: newPos
          }
        }).filter(col => (col.currentAnimationPos - col.letters.length) < ANIMATION_LEN)
      })
    }, 100);

    return () => clearInterval(intervalId);
  }, [dark]);

  return (
    <div className="home">
      {dark ?
        (
          <div className="banner matrix">
            {cols.map((col, i) => (
              <div key={i} className="matrix__col" style={{ "--pos": col.position } as React.CSSProperties}>
                {col.letters.map((letter, j) => (
                  <div key={j} style={{
                    opacity: (col.currentAnimationPos - j) < 0 ? 0 : (
                      (ANIMATION_LEN - (col.currentAnimationPos - j)) / ANIMATION_LEN
                    )
                  }}>
                    {letter}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="banner bubbles">
          </div>
        )
      }
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
