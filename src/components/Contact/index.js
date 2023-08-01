import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const refForm = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_af19r9r',
        'template_6ef5h3i',
        refForm.current,
        'ukqBPcE8joCdgoKwA'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="info-map">
          Joel Ralte,
          <br />
          India,
          <br />
          8WCM+JFJ, Calicut Mukkam Road,
          <br />
          Kattangal, Kerala 673601
          <br />
          <span>joel.lr.ralte@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[11.31063, 75.9347]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[11.31063, 75.9347]}>
              <Popup>Joel lives here, come over for a cup of coffee!</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm interested in full-time software development opportunities that
            would enable the use of my skillset in the industry and take it to
            further heights.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail} id="sendform">
              <ul>
                <li className="half">
                  <input type="text" name="user_name" placeholder="Name" />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
