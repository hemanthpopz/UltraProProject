import './index.css'


import Header from '../Header'

import Footer from '../Footer'


import CommingsoonImage from '../Images/CommingsoonImage.png'



function Commingsoon(){
    return <div className  = 'main-commingsoon-container'>

        <div className='commingsoon-container'>
            <Header/>

            <div className='commingsoon-content-container'>


            <div className="probinar-first-container gtx-first-container about-first-container">
            <div className='universel-text-container'>
            <div className="probinar-first-text-container">
              <h1 className="gtx-heading">
                Coming Soon ! 
              </h1>
              <h2 className="h2-des">Stay Tuned For More Updates.</h2>
            </div>
            <div className="probinar-image-container">
              <img
                alt="model-img"
                className="model-image"
                
                src={CommingsoonImage}
              />
            </div>
            </div>
          </div>

            </div>

        </div>

        <Footer/>

    </div>
}

export default Commingsoon