import "./home.scss"

import { useEffect, useState } from "react";
import Goo from "@lafleche/gooey-react";

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

  const blobs = [
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
    { pos: [82, 75], size: 6, color: 1 }
  ];

  const BLOB_COLORS = [
    "#1d4ed8",
    "#2563eb",
    "#2862ae",
    "#3073c5",
    "#25759a"
  ];

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
          <Goo composite className="banner bubbles">
            <svg>
              {blobs.map((blob, i) => (
                <circle
                  cx={`${blob.pos[0]}%`}
                  cy={`${blob.pos[1]}%`}
                  r={`${blob.size}%`}
                  fill={BLOB_COLORS[blob.color]}
                  key={i}
                />
              ))}
            </svg>
          </Goo>
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
