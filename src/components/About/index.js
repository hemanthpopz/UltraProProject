
import Header from "../Header";

import Footer from "../Footer";

import AboutCheckImage from "../Images/AboutCheckImage.png";

import matrix from '../Images/matrix.svg'

import "./index.css";


import ValuesImage from '../Images/ValuesImage.png'

import MissionImage from '../Images/MissionImage.png'
import SecurityImage from '../Images/SecurityImage.png'

function About(){


    return (
      <div className="main-about-container">
        <div className="about-container">
          <Header />
          <div className="about-content-container">
            <div className="probinar-first-container about-first-container">
              <div className="probinar-first-text-container">
                <h1 className="probinar-container-heading about-primary-heading">
                  What is <span className="span-heading">Ultra Pro?</span>
                </h1>
                <p className="about-first-container-des">
                  Ultrapro Blockchain technology is a decentralized and
                  distributed ledger system that allows multiple parties to
                  maintain a shared database without the need for a central
                  authority. It provides transparency, immutability, and
                  security, making it a powerful tool for various
                  industries.UltraPro is a leading provider of cutting-edge
                  blockchain solutions, revolutionizing industries through
                  transformative technology. We are UK Based, Registered in
                  England, Wales and Dubai (IFZA Dubai Silicon Oasis, Dubai,
                  United Arab Emirates). Be a Proud Member of Ultra Pro
                  Blockchain’s Native Coin.
                </p>
              </div>
              <div className="probinar-image-container">
                <h1 className="about-heading">About Us</h1>
              </div>
            </div>



            <div className="about-second-container">
              <div className="about-second-image-container">
                <img src={AboutCheckImage} className="bitcoin-image" />
              </div>

              <div className="about-second-text-container">
                <h1 className="about-second-heading">We Believe</h1>

                <h2 className="about-second-secondary-heading">
                  The <span className="about-second-span">Most Trusted</span> Crypto Platform
                </h2>

                <p className="about-second-des">
                  At Ultrapro, we believe that everyone should have the freedom
                  to earn, hold, spend, share and give their money - no matter
                  who you are or where you come from.
                </p>
              </div>
            </div>


            <div className="cubes-container">
            <div className="cube1">
              <div className="matrix-image-container">
                <img src={matrix} />
              </div>
              <div className="matrix-text-container">
                <h1>Vision</h1>
                <p>
                  Powering a Prosperous Global Economy. Ultrapro envisions
                  becoming the global currency, fueling a thriving global
                  economy.
                </p>
              </div>
            </div>

            <div className="cube1">
              <div className="matrix-image-container">
                <img src={MissionImage} />
              </div>
              <div className="matrix-text-container">
                <h1>Mission</h1>
                <p>
                  Driving Global Utility through Digital Innovation. Ultrapro is
                  on a mission to be the global digital currency, fostering
                  utility across the globe.
                </p>
              </div>
            </div>

            <div className="cube1">
              <div className="matrix-image-container">
                <img src={ValuesImage} />
              </div>
              <div className="matrix-text-container">
                <h1>Values</h1>
                <p>
                  Sustainability. Involvement. Transparency. Our core values
                  define us—committed to sustainability, active involvement, and
                  unwavering transparency.
                </p>
              </div>
            </div>

            <div className="cube1">
              <div className="matrix-image-container">
                <img src={SecurityImage} />
              </div>
              <div className="matrix-text-container">
                <h1>Security</h1>
                <p>
                  Fortified Protection for Your Peace of Mind. Ultrapro ensures
                  unrivaled security with cutting-edge data encryption, secure
                  access management, and state-of-the-art storage.
                </p>
              </div>
            </div>
          </div>


          <div className="probinar-second-container">
              <h1 className="probinar-second-heading about-last-heading">
              Join the Ultrapro Revolution:
              </h1>
              <p className="probinar-second-des about-last-des">
              Stake UPRO with Ultrapro Blockchain - where trust, security, and efficiency converge for a prosperous financial journey.
              </p>
              <div className="about-button-container">

              <button className="contact-btn">Connect Wallet</button>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    )
  
}

export default About;
