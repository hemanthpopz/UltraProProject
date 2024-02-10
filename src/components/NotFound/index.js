import './index.css'

import Header from '../Header'

import Footer from '../Footer'

import ErrorImage from '../Images/ErrorImage.png'

function NotFound(){


    return <div className='main-notfound-container'>

        <div className='notfound-container'>
            <Header/>

            <div className='notfound-content-container'>

            <div className="probinar-first-container gtx-first-container about-first-container">
            <div className="probinar-first-text-container">
              <h1 className="gtx-heading">
                Oops!
              </h1>
              <h2 className="h2-des">Some Error Occured. Try Again</h2>
            </div>
            <div className="probinar-image-container">
              <img
                alt="model-img"
                className="model-image"
                
                src={ErrorImage}
              />
            </div>
          </div>

            </div>

        </div>

        <Footer/>

    </div>
}


export default NotFound