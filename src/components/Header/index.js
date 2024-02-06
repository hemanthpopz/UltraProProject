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
            <Link className='Link' to='/blog'>
            <li>Blog</li>
            </Link>
            <li>Canopus Wallet</li>
            <li>Trade</li>
            <li>Asset</li>
            <li>White paper</li>
            <li>
              <a target='_blank' href='https://docs.ultraproscan.io/'>

              <button className="build-btn">Build On UPRO</button>
              </a>
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
            <Link className='Link' to='/blog'>
            <li>Blog</li>
            </Link>
            <li>Canopus Wallet</li>
            <li>Trade</li>
            <li>Asset</li>
            <li>White paper</li>
            <li>
            <a href='https://docs.ultraproscan.io/' target='_blanck'><button className="build-btn">Build On UPRO</button></a>  
            </li>
          </ul>
        ) : null}
      </>
    )
  
}

export default Header