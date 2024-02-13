import "./index.css";

import Header from "../Header";

import Footer from "../Footer";

import { FaArrowRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

import EmptyBlog from "../Images/emptyBox.png";
import { useEffect, useState } from "react";
import axios from "axios";

import BlogEachImage from "../Images/blogEachImage.png";

const categoryButtons = [
  {
    id: 1,
    name: "Crypto",
  },
  {
    id: 2,
    name: "Leadership",
  },
  {
    id: 3,
    name: "Ecosystem",
  },
  { id: 4, name: "Community" },
  {
    id: 5,
    name: "Charity",
  },
  {
    id: 6,
    name: "Earn",
  },
  {
    id: 7,
    name: "Crypto",
  },
  {
    id: 8,
    name: "Press",
  },
];

function BlogListing() {
  const [title, setTitle] = useState("");

  const [description, setDes] = useState("");

  const [category, setCategory] = useState("Crypto");

  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    toGetData();
  }, resultData);

  // const [fileName,setFile] = useState('')

  const toGetData = async () => {
    const url = "http://localhost:3001/getData";

    const response = await axios.get(url);

    
    if (response.data.length !== 0) {
      setResultData((Previous) => [response.data]);
    }
  };
  
  console.log(resultData);
  

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onchangeDes = (event) => {
    setDes(event.target.value);
  };

  const onChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  // const onUploadFile = (event) =>{

  //    console.log(event.target.files[0])
  // }



  const toPostData = async () =>{


    if ((title !== '' && description !== "")) {
      const url = "http://localhost:3001/postData";

      const date = new Date();

      const Year = date.getFullYear();

      const Month = date.getMonth();

      const Day = date.getDate();

      const mainDate = `${Year}/${Month}/${Day}`;

      
      const postData = {
        id: uuidv4(),
        title,
        description,
        category,
        mainDate,
      };

      const postResult = await axios.post(url, postData);
      toGetData();
    }

  }

  const onClickBlogBtn = (event) => {
    event.preventDefault();


    toPostData()

    
  };

  return (
    <div className="main-bloglisting-container">
      <div className="bloglisting-container">
        <Header />
        <div className="bloglisting-content-container">
          <div className="category-container">
            <h1 className="category-heading">Categories</h1>
            <ul className="category-button-ul">
              {categoryButtons.map((EachButton) => (
                <li>
                  <button className="each-button">{EachButton.name}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="user-input-container">
            <div className="user-input-text-container">
              <p className="post-heading">Post Yout Blog</p>
              <p className="post-des">Required fields are marked *</p>
            </div>
            <form className="blog-form">
              {/* <input onChange={onUploadFile} className="fileInput" type='file' name='photo'/> */}
              <input
                onChange={onChangeTitle}
                type="text"
                className="title"
                placeholder="Title*"
              />

              <textarea
                type="text"
                onChange={onchangeDes}
                className="description"
                placeholder="Description*"
              />

              <select onChange={onChangeCategory} className="blog-select">
                {categoryButtons.map((eachOption) => (
                  <option>{eachOption.name}</option>
                ))}
              </select>
              <br />
              <button onClick={onClickBlogBtn} className="post-btn">
                Post Blog
              </button>
            </form>
          </div>

          <div className="bloglisting-items-container">
            {resultData.length === 0 ? (
              <div className="empty-blog-container">
                <img src={EmptyBlog} className="empty-image" />
                <h1 className="no-heading">No Blogs Found</h1>
              </div>
            ) : (
              <div className="fill-blog-container">
                <ul className="fill-blog-ul">
                  {resultData[0] !== undefined
                    ? resultData[0].map((Each) => (
                        <li className="each-blog-li">
                          <img
                            className="blog-each-image"
                            src={BlogEachImage}
                          />
                          <div className="each-blog-text-container">
                            <p className="date">{Each.post_time}</p>

                            <p className="each-title">{Each.title}</p>
                          </div>
                          <a target='_blank' className="Link" href={`/blog/${Each.id}`}>

                          <div className="read-more-container">
                            <p className="read-text">Read More</p>
                            <FaArrowRight className="arrow-icon" />
                          </div>
                          </a>
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogListing;
