import {Link} from 'react-router-dom'
import {
  FaTwitter,
  FaTelegramPlane,
  FaDiscord,
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
        <div className="footer-logo-container">
          <img alt='Logo' className="footer-logo" src={Logo} />
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
          <a className="Link" href='/' target="_blank">
          <li>Home</li>
          </a>
          <a target="_blank" className="Link" href='/about'>
          <li>About Us</li>
          </a>
          <li>Press</li>
          <li>Career</li>
          <li>Blog</li>
        </ul>

        <ul className="second-footer-container">
          <li id="first-li">Media</li>
          <li>Terms</li>
          <a target="_blank" className='Link' href='/announcements'>
          <li>Announcement</li>
          </a>
          <li>News</li>
          <li>Notice</li>
          <a target="_blank" className='Link' href='/sitemap'>
          <li>Sitemap</li>
          </a>
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
