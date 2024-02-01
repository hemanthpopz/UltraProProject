import {useState} from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import {IoMdMenu} from 'react-icons/io'
import Logo from '../Images/LogoImage.svg'

function Header(){


  const [smNav,onClick] = useState(false)
   

  const onClickMenu = () => {
    onClick(!smNav)
  }

    return (
      <>
        {' '}
        <nav>
          <div className="logo-container">
            <img src={Logo} />
            <h1 className="logo-heading">UPRO</h1>
          </div>

          <ul className="nav-ul lg-nav">
            <Link className='Link' to='/'>
            <li>Home</li>
            </Link>
            <li>UPRO</li>
            <li>Blog</li>
            <li>Canopus Wallet</li>
            <li>Trade</li>
            <li>Asset</li>
            <li>White paper</li>
            <li>
              <button className="build-btn">Connect Us</button>
            </li>
          </ul>

          <button
            aria-label="Mute-Volume"
            className="menu-icon"
            onClick={onClickMenu}
          >
            <IoMdMenu />
          </button>
        </nav>
        {smNav === true ? (
          <ul className="nav-ul sm-nav">
            <Link className='Link' to='/'>
            <li>Home</li>
            </Link>
            <li>UPRO</li>
            <li>Blog</li>
            <li>Canopus Wallet</li>
            <li>Trade</li>
            <li>Asset</li>
            <li>White paper</li>
            <li>
              <button className="build-btn">Connect Us</button>
            </li>
          </ul>
        ) : null}
      </>
    )
  
}

export default Header