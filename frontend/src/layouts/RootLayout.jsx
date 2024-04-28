import { NavLink, Outlet } from "react-router-dom"
import { useState } from "react"
import './RootLayout.scss'

const RootLayout = () => {

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleNavLinkClick = () => {
    setIsActive(false);
  };

    return (
        <div className="root-layout">
          <header>
            <nav className="navbar">   
              <div className="brand-title">RSW</div>
              <span className="material-icons toggle-button" onClick={handleToggle} >{isActive ? 'close' : 'menu'}</span>
              <div className={`navbar-links ${isActive ? 'active' : ''}`} >
                <ul>
                  <li><NavLink to='/' onClick={handleNavLinkClick} >Quiz</NavLink></li>
                  <li><NavLink to='citylist' onClick={handleNavLinkClick} >City List</NavLink></li>
                  <li><NavLink to='aboutus' onClick={handleNavLinkClick} >About Us</NavLink></li>
                </ul>
              </div>
            </nav>
          </header>

          <main>
            <Outlet />
          </main>
        </div>
    )
}

export default RootLayout