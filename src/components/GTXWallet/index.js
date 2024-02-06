import "./index.css";

import Header from "../Header";

import Footer from "../Footer";

import CrossImage from "../Images/CrossImage.png";


const GtxButtons = [
  {
    id: 1,
    name: "Explore",
  },
  {
    id: 2,
    name: "Terms",
  },
  {
    id: 3,
    name: "Privacy",
  },
  { id: 4, name: "Playstore" },
  {
    id: 5,
    name: "IOS",
  },
  {
    id: 6,
    name: "Amazon",
  },
];

function GTXWallet() {
  return (
    <div className="gtx-wallet-main-container">
      <div className="gtx-container">
        <Header />

        <div className="gtx-content-container">
          <div className="probinar-first-container gtx-first-container about-first-container">
            <div className="probinar-first-text-container">
              <h1 className="gtx-heading">
                Canopus <span className="gtx-span-heading">GTX</span> Wallet
              </h1>
              <h2 className="h2-des">Secure Your Digital Assets</h2>
            </div>
            <div className="probinar-image-container">
              <img
                alt="model-img"
                className="model-image"
                
                src='https://cloud.blockin.ai/static/api_login.ab5f47fa.png'
              />
            </div>
          </div>

          <div className="probinar-second-container">
            <h1 className="probinar-second-heading">
              Safeguard Your Crypto with confidence
            </h1>
            <p className="probinar-second-des">
              Canopus GTX Wallet is your exclusive solution for securely storing
              digital assets, including bitcoins,Unlice traditional wallets,it
              focuse solely on Safeguarding the private keys to you
              crptocurrency.
            </p>
          </div>

          <div className="container2 gtx-container2">
            <div className="container2-image-container">
              <img
                alt="second-img"
                className="second-image"
                src='https://miro.medium.com/v2/resize:fit:591/0*dXOZsfiisD_xsLGA.png'
              />
            </div>
            <div className="container2-text-container">
              <h1 className="container2-heading">Why Canopus GTX</h1>
              <p className="primary">Enhanced Security</p>
              <p className="secondary">
                Elevate your peace of mind with advanced security features.
              </p>
              <p className="primary">Private Key Protection</p>
              <p className="secondary">
                Your crypto's private keys are the sole focus,ensuring
                unparalleled protection.
              </p>
            </div>

            <img alt="cross-img" src={CrossImage} className="cross-image" />
          </div>
          <hr className='hr-line'/>
          <div className="probinar-second-container gtx-fourth-container">
            <h1 className="probinar-second-heading gtx-fourth-text">
              Explore Secure Crypto Storage
            </h1>
            <p className="probinar-second-des gtx-second-des">
              Visit CanopusGTX.com to experience a new level of secure crypto
              storage.Canopus GTX Wallet-Where protection meets innovation
            </p>

            <ul className="gtx-buttoons-container">
              {GtxButtons.map((EachButton) => (
                <li>
                  <button className="learn-btn">{EachButton.name}</button>
                  
                </li>
              ))}
            </ul>
          </div>
          <hr className='hr-line'/>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default GTXWallet;
