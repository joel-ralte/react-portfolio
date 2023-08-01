import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoJR from '../../assets/images/logo-jr.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FaFigma, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoJR} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="joel" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/joel-ralte-9a344b23b/"
        >
          <div className="icon-container">
            <FaLinkedinIn className="icon-item" />
          </div>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/joel-ralte"
        >
          <div className="icon-container">
            <FaGithub className="icon-item" />
          </div>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.figma.com/@joelralte"
        >
          <div className="icon-container">
            <FaFigma className="icon-item" />
          </div>
        </a>
      </li>
      {/* <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/rin.nung/"
        >
          <div className="icon-container">
            <FaInstagram className="icon-item" />
          </div>
        </a>
      </li> */}
    </ul>
  </div>
)

export default Sidebar
