import {Link} from 'react-router-dom'
import {
  FaTwitter,
  FaTelegramPlane,
  FaDiscord,
  FaRedditAlien,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube 
} from "react-icons/fa";
import Logo from "../Images/LogoImage.svg";
import './index.css'

function Footer(){
  
    return <footer>
      <div className="first-footer-container">
        <div className="logo-container">
          <img className="footer-logo" src={Logo} />
          <h1 className="logo-heading footer-logo-heading">UPRO</h1>
        </div>
        <p className="footer-one-p">
          The Ultrapro is all about community.It's made up of people from all
          different backgrounds and interests.
        </p>
        <p className="address">Address : <span className="address-span">IFZA Dubai Silicon Oasis, Dubai, United Arab Emirates</span></p>

      </div>

      <div className="footer">
        <ul className="second-footer-container">
          <li id="first-li">UPRO</li>
          <Link className="Link" to='/'>
          <li>Home</li>
          </Link>
          <Link className="Link" to='/about'>
          <li>About Us</li>
          </Link>
          <li>Press</li>
          <li>Career</li>
          <li>Blog</li>
        </ul>

        <ul className="second-footer-container">
          <li id="first-li">Media</li>
          <li>Terms</li>
          <li>Announcement</li>
          <li>News</li>
          <li>Notice</li>
          <li>Sitemap</li>
        </ul>

        <ul className="second-footer-container">
          <li id="first-li">Service</li>
          <li>UPRO</li>
          <li>Swap</li>
          <li>P2P</li>
          <li>Bridge</li>
          <li>Utility</li>
        </ul>

        <div className="icons-div-container">

        
        
        <ul className="icons-container">
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaTelegramPlane />
          </li>
          <li>
            <FaDiscord/>
          </li>
          <li>
            <FaGithub/>
          </li>
          <li>
            <FaInstagram/>
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaYoutube/>
          </li>
        </ul>
        <p className="news">Newsletter</p>
        <p className="news-des">Subscribe to Our Newsletter to get Important News, Amazing Offers & Inside Scoops.</p>
        <input type='text'/>
        </div>
      </div>
      <div className="last-text-container">
        <p>© Ultrapro, All Right Reserved.</p>
        <p>Designed By ULTRAPRO</p>
      </div>
    </footer>
  
}

export default Footer;
