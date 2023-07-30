import './index.scss'
import photo from '../../../assets/images/frame_1.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={photo} alt="S" />
    </div>
  )
}

export default Logo
