import React, { useEffect, useState } from 'react'
import "./CourseSection.css"
import star from "../../img/star.png"

const CourseSection = (probs) => {
  
  const [list,setlist]=useState([])
  let courseName=probs.courseName;

console.log(courseName);


  useEffect(()=>{
    fetch(`http://localhost:3004/courseList`)
    .then(res=>res.json())
    .then(data=>setlist(data))
  },[])
  

  // useEffect(()=>{
  //   if(courseName!=="test")
  //   {
  //     fetch(`http://localhost:3004/courseList?_type=${courseName}`)
  //     .then(res=>res.json())
  //     .then(data=>setlist(data))
  //     console.log(courseName);  
  //   }
  // },[courseName])
  


  return (
    <div className='CourseSection'>
        <div>
            <h1>Expand your career opportunities with Python </h1>
            <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to</p>
            <button className='explore'> Explore Python</button>
        </div>

        <div className='grid_CourseSection'>
        {
          list.map((item)=>{
            return(  
          <div >
            <div className='card'>
                <img src={item.image_url} alt=""  className='courseImage'/>
            </div>
            <div>
              <h4>{item.title}</h4>
                <div className='flex'>
                  <p>{item.teacher}</p>
                  <p>{item.academy}</p>
                </div>

                <div className='flex'>
                  <p>{item.rate}</p>
                   <div className='stardiv'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                   </div>
                   <p>{item.review}</p>
                </div>

                <div className='flex pricesection'>
                   <h3>{item.price}</h3>
                   <p>{item.oldprice}</p>
                </div>
            </div>
          </div>)
          })
        
        }
          
        </div>


    </div>
  )
}

export default CourseSection