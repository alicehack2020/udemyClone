import React, { useState } from 'react'
import "./BroadSelectionCourse.css"
import CourseSection from './CourseSection'

const BroadSelectionCourse = () => {
  const [cname,setCname]=useState("test")

  return (
    <div>
        <div className='broad_heading'>
            <h1>A broad selection of courses</h1>
            <p>Choose from 183,000 online video courses with new additions published every month</p>
        </div>
    
        <div className='broad_course flex'>
            <p onClick={()=>setCname("Python")}>Python</p>
            <p onClick={()=>setCname("Excel")}>Excel</p>
            <p onClick={()=>setCname("Html")}>web Development</p>
            <p>JavaScript</p>
            <p>Data Science</p>
            <p>AWS Certification</p>
            <p>Drawing</p>
        </div>

        <CourseSection courseName={cname}/>
        <CourseSection courseName={cname}/>
    </div>
  )
}

export default BroadSelectionCourse