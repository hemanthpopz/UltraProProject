import Footer from "../Footer";
import Header from "../Header";
import StakeProImage from "../Images/StakeUproNewImage.png";
import ColorfulLogo from "../Images/ColorfulLogo.png";
import Cone from '../Images/Cone.png'
import "./index.css";
import Triangle from '../Images/Triangle.png'
import CubeImage from '../Images/CudeImage.png'

function StakePro() {
  return (
    <div className="main-stakepro-container">
      <div className="stakepro-container">
        <Header />
        <div className="stake-content-container">
          <div className="probinar-first-container">
          <div className="universel-text-container">
            <div className="probinar-first-text-container">
              <h1 className="probinar-container-heading">
                Building Your Financial Future
              </h1>
              <a href="#stakepro-id">
                <button className="contact-btn">Explore More</button>
              </a>
            </div>
            <div className="probinar-image-container">
            <img src={CubeImage} className="cude-image"/>
              <img alt="model-img" className="model-image" src={StakeProImage} />
            </div>
            </div>
          </div>

          <div id="stakepro-id" className="probinar-second-container">
            <h1 className="probinar-second-heading">
              Ultrapro - The Best Crypto Community
            </h1>
            <p className="probinar-second-des">
              In our digital world, trust, security, and efficiency are vital.
              Enter Ultrapro Blockchain, the game-changer.
            </p>
          </div>

          <div className="stakepro-third-container">
            <div className="stakepro-third-container-primary">
              <div className="logo-and-heading-container">
                <h1>Staking Plans:</h1>
                <img alt="ColorfulLogo" src={ColorfulLogo} className="colorful-logo" />
              </div>
              <p>
                In our digital world, trust, security, and efficiency are vital.
                Enter Ultrapro Blockchain, the game-changer.
              </p>
              <button className="contact-btn">Join Now</button>
            </div>
            <div className="stakepro-third-container-secondary">
              <div className="stakepro-secondary1">
                <div className="stakepro1">
                  <h1>Stake for 3 months: Earn 1.5% per month.</h1>
                </div>

                <div className="stakepro2">
                  <h1>
                    Commit to a 12-month stake: Enjoy a 2% monthly return.
                  </h1>
                </div>
              </div>

              <div className="stakepro-secondary2">
                <div className="stakepro-secondary2-one">
                  <h1>
                    Opt for a 24-month stake: Receive an impressive 3% per
                    month.
                  </h1>
                </div>
              </div>
            </div>

            <img alt="Cone" className="cone" src={Cone}/>
          </div>

          <div className="stakepro-third-container">
            <div className="stakepro-third-container-secondary">
              <div className="stakepro-secondary1">
                <div className="stakepro1">
                  <h1>Register: Join Stake UPRO here.</h1>
                </div>

                <div className="stakepro2">
                  <h1>Deposit: Minimum of 50 UPRO.</h1>
                </div>
              </div>

              <div className="stakepro-secondary2 stakepro-fourth-secondary2">
                <div className="stakepro-secondary2-one stakepro-secondary2-two">
                  <h1>Choose: Select your preferred staking plan.</h1>
                </div>
                <div className="stakepro-secondary2-one stakepro-secondary2-two">
                  <h1>Earn: Start building your financial future.</h1>
                </div>
              </div>
            </div>

            <div className="stakepro-third-container-primary">
              <h1 className="stakepro-fourth-h1">Getting Started is Simple</h1>

              <div className="logo-and-heading-container">
                <button className="contact-btn">Start Now</button>
                <img alt="ColorfulLogo" src={ColorfulLogo} className="colorful-logo" />
              </div>
            </div>
          </div>

          <div className="probinar-second-container">
          <img alt="triangle" className="triangle" src={Triangle}/>
            <h1 className="probinar-second-heading">
              Join the Ultrapro Revolution:
            </h1>
            <p className="probinar-second-des">
              Stake UPRO with Ultrapro Blockchain - where trust, security, and
              efficiency converge for a prosperous financial journey.
            </p>
          
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StakePro;
