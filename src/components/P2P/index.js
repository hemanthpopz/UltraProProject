import './index.css'

import Header from "../Header";

import Footer from "../Footer";

import WhiteBird from "../Images/WhiteBird.png";

import CrossImage from "../Images/CrossImage.png";

import MainP2P from "../Images/MainP2P.png";

function P2P(){
    return <div className="gtx-wallet-main-container">
    <div className="gtx-container">
      <Header />

      <div className="gtx-content-container ">
        <div className="probinar-first-container gtx-first-container about-first-container p2p-first-container">
          <div className='universel-text-container'>

          
          <div className="probinar-first-text-container">
            <h1 className="gtx-heading">
              P2P Platform
            </h1>
            <h2 className="h2-des">EenaP2Ptrade</h2>
            <p className='marketplace-p'>Your Crypto Marketplace</p>
          </div>
          <div className="probinar-image-container">
            <img
              alt="model-img"
              className="model-image"
              src={MainP2P}
              />
          </div>
          </div>
        </div>

        <div className="probinar-second-container">
          <h1 className="probinar-second-heading">
            Buy and Sell Securely,Faster,and Simpler
          </h1>
          <p className="probinar-second-des">
            Explore uninterrupted transactions at EenaP2P.trade, Your got-to platform for a variety of cryptos
          </p>
        </div>

        <div className="container2 gtx-container2">
          <div className="container2-image-container">
            <img
              alt="second-img"
              className="second-image"
              src={WhiteBird}
            />
          </div>
          <div className="container2-text-container">
            <h1 className="container2-heading">Why Choose EenaP2P.trade</h1>
            <p className="primary">Security First</p>
            <p className="secondary">
              Trade with confidence i a secure environment
            </p>
            <p className="primary">Speedy Transactions</p>
            <p className="secondary">

                Experience faster and simpler transactions.makign crypto trading a breeze
              
            </p>
          </div>

          <img alt="cross-img" src={CrossImage} className="cross-image" />
        </div>

        <hr className='hr-line'/>
        <div className="probinar-second-container gtx-fourth-container  p2p-fourth-container">
          <h1 className="probinar-second-heading gtx-fourth-text">
            Explore the Crypto Marketplace:
          </h1>
          <p className="probinar-second-des gtx-second-des p2p-second-des">
            Feel the freedom of buying and selling various cryptos seamlessly at EenaP2P.trade, Your gateway to a smoother trading experience
          </p>

          <button className="contact-btn">Explore</button>

          
        </div>

        <hr className='hr-line'/>
      </div>
    </div>

    <Footer />
  </div>
}


export default P2P