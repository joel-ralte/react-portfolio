import { Outlet } from 'react-router-dom'
import SideBar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <SideBar />
      <div className="page">
        <span className="tags top-tags"></span>
        <Outlet />
        <span className="tags" bottpm-tags>
          <br />
          <span className="bottom-tag-html"></span>
        </span>
      </div>
    </div>
  )
}
export default Layout
