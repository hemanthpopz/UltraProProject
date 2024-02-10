import './index.css'

import Header from '../Header'

import Footer from '../Footer'

import MainDEFI from '../Images/MainDEFI.png'

function DEFI(){
    return <div className='defi-main-container'>

        <div className='defi-container'>
            <Header/>
            <div className='defi-content-container'>

            <div className="probinar-first-container gtx-first-container about-first-container defi-first-container ">
            <div className="probinar-first-text-container">
              <h1 className="gtx-heading defi-heading">
              Defining the <span className="gtx-span-heading defi-span-heading">DEFI</span> Revolution 
              </h1>
              <h2 className="h2-des defi-h2-des">Defining the DEFI Revolution</h2>

              <button className="contact-btn">Contact Us</button>
            </div>
            <div className="probinar-image-container">
              <img
                alt="model-img"
                className="model-image"
                
                src={MainDEFI}
              />
            </div>
          </div>

          <div className="probinar-second-container">
            <h1 className="probinar-second-heading">
              Unlock the Future of Decentralized Finance
            </h1>
            <p className="probinar-second-des">
             Discover innovative solutions at Eenaswap for a seamless, and rewarding DEFI experience
            </p>
          </div>

          <hr className='hr-line'/>

          <div className='defi-fourth-container'>

            <div className='defi-primary'>
            <h1>Embrace Digital Asset Management with Ultrapro</h1>
            <p>Bid farewell to slow transactional Ultrapro ensures lighting-speed swaps for a seamless crypto journey</p>  
            </div>


            <div className='defi-secondary'>
            <h1>Supported Swap</h1>
            <p className='defi-secondary-p'>Swap BNB to UPRO</p> 
            <p className='defi-secondary-p'>Swap TRX to UPRO</p> 
            <p className='defi-secondary-p'>Swap BEP20 to UPRO</p>  
            </div>

          </div>

          <hr className='hr-line'/>

          <div className="probinar-second-container gtx-fourth-container  p2p-fourth-container">
          <h1 className="probinar-second-heading gtx-fourth-text">
            Seamless Crypto Journeys Await
          </h1>
          <p className="probinar-second-des gtx-second-des p2p-second-des">
          Experience lighting-speed swaps with Ultrapro,redefining digital asset management
          </p>

          <button className="contact-btn">Explore</button>

          
        </div>

        <hr className='hr-line'/>
                
            </div>

        </div>
        <Footer/>

    </div>
}

export default DEFI