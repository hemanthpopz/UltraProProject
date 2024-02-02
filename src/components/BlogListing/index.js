import './index.css'

import Header from '../Header'

import Footer from '../Footer'

import BlogListingFirstImage from '../Images/BlogListingFirstImage.png'

import BlogListingSecondImage from '../Images/CATEGORY.png'

const categoryButtons = [
    {
        id:1,
        name:'Crypto'
    },
    {
        id:2,
        name:'Leadership'
    },
    {
        id:3,
        name:'Ecosystem'
    },
    {   id:4, 
        name:'Community'
    },
    {
        id:5,
        name:'Charity'
    },
    {
        id:6,
        name:'Earn'
    },
    {
        id:7,
        name:'Crypto'
    },
    {
        id:8,
        name:'Press'
    },

]

function BlogListing(){
    return <div className='main-bloglisting-container'>

        <div className='bloglisting-container'>
            <Header/>
            <div className='bloglisting-content-container'>

                <div className='category-container'>
                    <h1 className='category-heading'>Categories</h1>
                    <ul className='category-button-ul'>
                        {
                            categoryButtons.map((EachButton) =>(
                                <li>
                                    <button className='each-button'>{EachButton.name}</button>
                                </li>
                            ))
                        }
                    </ul>

                </div>


                <div className='bloglisting-items-container'>

                    <div className='bloglisting-first-container'>

                    <img src={BlogListingFirstImage} className='blog-first-image'/>
                    </div>

                    <div className='bloglisting-second-container'>

                    <h1 className='popular-text'>Trending News</h1>
                        <img className='blog-second-image' src={BlogListingSecondImage}/>
                        <h1 className='popular-text'>Popular News</h1>
                        <img className='blog-second-image' src={BlogListingSecondImage}/>
                    </div>


                </div>
            </div>
        </div>
        <Footer/>

    </div>
}

export default BlogListing