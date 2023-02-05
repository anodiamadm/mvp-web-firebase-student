import React from 'react'
import { useUserAuth } from '../../context/UserAuthContext'
import CourseList from '../uiLegos/CourseList'
import MultiAccordionCourseList from '../uiLegos/MultiAccordionCourseList'

function Home() {
  const {user} = useUserAuth()
  return (
    <div>
      <h1>HOME</h1>
      <h1><i className="fa-brands fa-youtube"></i></h1>
      <p>This is Student Profile page...{user && user.email}</p>
      <CourseList/>
      <MultiAccordionCourseList/>
    </div>

  )
}

export default Home