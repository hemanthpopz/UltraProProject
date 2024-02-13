
import { useEffect, useState } from 'react'
import { SlCalender } from "react-icons/sl";


import axios from 'axios'

import { useParams } from 'react-router-dom'

import './index.css'

import Header from '../Header'

import Footer from '../Footer'


import SecondBlogImage from '../Images/SecondBlogImage.png'


function EachBlog(){


    const [mainData,ToSetData] = useState('')


    const ToGetID = () =>{

        const param = useParams()

        const {id} = param
        toGetData(id)

    }




    const toGetData = async (Id) =>{

        const url = `http://localhost:3001/getData/${Id}`
        const result = await axios.get(url)

        ToSetData(result.data)

    }


    ToGetID()

    return <div className='main-each-blog-container'>

        <div className='each-blog-container'>
            <Header/>


            <div className='each-blog-content-container'>


                <div className='blog-container'>


                    <h1 className='each-blog-title'>{mainData.title}</h1>
                    <div className='date-container'>

                        <SlCalender className='calender'/>
                        <p className='date-text'>{mainData.post_time}</p>

                    </div>

                    <img src={SecondBlogImage} className='second-blog-image'/>


                    <p className='blog-des'>{mainData.description}</p>

                </div>

            </div>

        </div>
        <Footer/>

    </div>
}


export default EachBlog