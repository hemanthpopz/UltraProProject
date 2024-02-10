import './index.css'

import Header from '../Header'

import Footer from '../Footer'

import AnnounceTextImage from '../Images/AnnounceTextImage.png'


function Announcements(){
    return <div className='main-announce-container'>

        <div className='announce-container'>

            <Header/>
            <div className='announce-content-container' >

            <div className="probinar-first-container gtx-first-container about-first-container announce-first-container">
            
            <div className="probinar-image-container">

                <div className='announce-image-container'>
                    <h1 className='announce-heading'>Announcements</h1>
                </div>
            </div>
          </div>

          <div className='announce-second-container'>

            <ul className='annoounce-text-ul'>

              <li>
                <img src={AnnounceTextImage} className='announce-text'/>
              </li>

              <li>
                <img src={AnnounceTextImage} className='announce-text'/>
              </li>
              

              <li>
                <img src={AnnounceTextImage} className='announce-text'/>
              </li>


              <li>
                <img src={AnnounceTextImage} className='announce-text'/>
              </li>


              <li>
                <img src={AnnounceTextImage} className='announce-text'/>
              </li>


              <li>
                <img src={AnnounceTextImage} className='announce-text'/>
              </li>


              <li>
                <img src={AnnounceTextImage} className='announce-text'/>
              </li>


              <li>
                <img src={AnnounceTextImage} className='announce-text'/>
              </li>


              <li>
                <img src={AnnounceTextImage} className='announce-text'/>
              </li>
            </ul>

          </div>

            </div>
        </div>
        <Footer/>

    </div>
}


export default Announcements