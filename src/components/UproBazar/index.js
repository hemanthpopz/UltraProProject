import Header from "../Header";
import UproBazarImage from "../Images/UproBazar.png";
import Footer from "../Footer";
import Voucher1 from '../Images/Voucher1.png'
import Voucher2 from '../Images/Voucher2.png'
import Voucher3 from '../Images/Voucher3.png'

import "./index.css";

function UproBazar() {
  return (
    <div className="main-uprobazar-container">
      <div className="uprobazar-container">
        <Header />
        <div className="uprobazar-content-container">
          <div className="probinar-first-container uprobazar-first-container ">
          <div className="universel-text-container">
            <div className="probinar-first-text-container">
              <h1 className="probinar-container-heading">
                Your Shopping Voucher Paradise
              </h1>
              <button className="contact-btn">Contact Us</button>
            </div>
            <div className="probinar-image-container">
              <img
                className="model-image upro-bazar-model-image"
                src={UproBazarImage}
              />
            </div>
            </div>
          </div>

          <div className="probinar-second-container">
            <h1 className="probinar-second-heading">
              Your Shopping Voucher Paradise
            </h1>
            <p className="probinar-second-des">
              Unlock limitless shopping possibilities with Uprobazaar.com, your
              ultimate online shopping voucher platform. Seamlessly convert
              UPRO, connect your wallet, deposit UPRO, and receive a voucher for
              a shopping spree like never before. Convenience and rewards, all
              in one place!
            </p>
          </div>

          <div className="probinar-fourth-container">
            <ul className="probinar-ul">
              <li className="uprobazar-li1">
                <h1>Features That Redefine Shopping:</h1>
              </li>
              <li className="uprobazar-li">
                <h1>Effortless Conversion:</h1>
                <p>
                  Effortless Conversion: Convert UPRO seamlessly for a
                  voucher-rich experience.
                </p>
                <h1>Wide Brand Selection:</h1>
                <p>
                  Avail vouchers for top brands like Amazon, Flipkart, Dominos
                  Pizza, Puma, Zomato, and many more.
                </p>
              </li>
            </ul>

            <div className="single-probinar-ul-item single-uprobazar-ul-item">
              <div className="single-probinar-text-container">
                <h1>Wallet Integration</h1>
                <p className="single-probinar-text-container-p">
                  Connect your wallet for swift and secure transactions.
                </p>
              </div>
              <button className="contact-btn">Connect</button>
            </div>
          </div>

          <div className="uprobazar-brand-container">
            <div className="barnd-text-container">

              <h1 className="brand-heading">Now Avail Vouchers for Brands Including:</h1>
              <p className="brand-text-container-des">Stake UPRO with Ultrapro Blockchain - Where trust, security, and a efficiency converge for a prosperous financial journey
             

             <div className="vouchers-container">


              <img alt='Voucher1' className="voucher" src={Voucher1}/>
              <img alt='Voucher2' className="voucher" src={Voucher2}/>
              <img alt='Voucher3' className="voucher" src={Voucher3}/>

             </div>
             
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default UproBazar;
