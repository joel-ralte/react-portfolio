import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAdd,
  faChess,
  faGift,
  faHome,
  faRadiation,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  FaReact,
  FaJava,
  FaFigma,
  FaAndroid,
  FaHtml5,
  FaCss3,
  FaJsSquare,
} from 'react-icons/fa'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm Joel and I'm currently pursuing my final year of MCA at NIT
            Calicut, Kerala.
          </p>
          <br />
          <p>
            My strongest fronts are at core programming using Java and
            development using React.js. Figma is my platform for UI/UX design.
            During the course of my Master's programme I've been a part of the
            creation and documentation of projects in Android Studio, Ruby on
            Rails, Python and Java Swing.
          </p>
          <br />
          <p>
            English is my primary language and my favoured activities beyond the
            code include playing table tennis and illustrating traditional art.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FaReact color="#61dbfb" />
            </div>
            <div className="face2">
              <FaJava color="#ed1d25" />
            </div>
            <div className="face3">
              <FaFigma color="#444444" />
            </div>
            <div className="face4">
              <FaJsSquare color="#f0db4f" />
            </div>
            <div className="face5">
              <FaHtml5 color="#e34c26" />
            </div>
            <div className="face6">
              <FaCss3 color="#2965f1" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
