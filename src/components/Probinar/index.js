import Header from "../Header";
import Footer from "../Footer";
import Arrow from "../Images/Arrow.svg";
import ProbinarImage from "../Images/ProbinarImage.png";
import MoneyImage from "../Images/MoneyPhoto.png";
import "./index.css";
import Cone from '../Images/Cone.png'
import CrossImage from '../Images/CrossImage.png'

function Probinar() {

  return (
    <div className="main-probinar-container">
      <div className="probinar-container">
        <Header />
        <div className="probinar-content-container">
        
          <div className="probinar-first-container">
            <div className="probinar-first-text-container">
              <h1 className="probinar-container-heading">
                Your Gateway to Blockchain Excellence
              </h1>
              <button className="contact-btn">Contact Us</button>
            </div>
            <div className="probinar-image-container">
              <img
              alt="model-img"
                className="model-image"
                src="https://www.touchdown.co/wp-content/uploads/2020/09/Untitled-2-2.png"
              />
            </div>
          </div>

          <div className="probinar-second-container">
            <h1 className="probinar-second-heading">
              Welcome to the Future at Probinar
            </h1>
            <p className="probinar-second-des">
              Embark on a journey where technology and finance converge. At
              Probinar, we lead the way in the ever-evolving landscape of
              blockchain technology. Pioneering education is our pride, offering
              cutting-edge learning in blockchain, cryptocurrencies, and
              decentralized applications.
            </p>

            <img alt="cone" className="cone" src={Cone}/>
          </div>

          <div className="probinar-third-container">
            <div className="probinar3-image-container">
              <img alt="probinar3-img" className="probinar3-image" src={ProbinarImage} />
            </div>
            <div className="probiar3-text-contaienr">
              <h1 className="probinar3-heading">
                Join "Probinar" Online Webinar Classes by Ultrapro Academy:
              </h1>
              <p className="probinar3-des">
                Enroll with $25, receivable in UPRO coins post-classes. Gain
                knowledge to start earning in the crypto industry.
              </p>

              <button className="contact-btn">Join Now</button>
            </div>
          </div>

          <div className="probinar-fourth-container">
            <ul className="probinar-ul">
              <li>
                <h1>Exclusive Learning Opportunities:</h1>
                <p>
                  In-depth Blockchain Education: Dive into comprehensive
                  learning designed by Ultrapro Academy. Crypto Industry
                  Insights: Acquire knowledge to kickstart your journey in the
                  crypto world.
                </p>
                <div className="explore-container">
                  <p className="explore">EXPLORE MORE</p>
                  <img alt="Arrow" src={Arrow} />
                </div>
              </li>
              <li>
                <h1>Seize the Opportunity to Learn and Earn:</h1>
                <p>
                  Probinar" Online Webinar Classes by Ultrapro Academy offer an
                  unparalleled chance to enrich your knowledge, share valuable
                  insights, and earn simultaneously.
                </p>
                <div className="explore-container">
                  <p className="explore">EXPLORE MORE</p>
                  <img alt="Arrow" src={Arrow} />
                </div>
              </li>
            </ul>

            <div className="single-probinar-ul-item">
              <div className="single-probinar-text-container">
                <h1>Learn & Earn with "Probinar" Webinar Classes:</h1>
                <p className="single-probinar-text-container-p">
                  Introduction Incentives: Earn 60% from odd-numbered and 100%
                  from even-numbered direct introductions. Unlimited Referrals:
                  Introduce an unlimited number of allies and benefit from a
                  100% distribution across 10 levels
                </p>
                <div className="explore-container">
                  <p className="explore">EXPLORE MORE</p>
                  <img alt="Arrow" src={Arrow} />
                </div>
              </div>

              <div className="single-probinar-image-container">
                <img alt="money-img" className="money-image" src={MoneyImage} />
              </div>
            </div>

            <img alt="CrossImg" src={CrossImage} className="cross-image"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Probinar;
