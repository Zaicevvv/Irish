import React from 'react'

import img from '../../../assets/images/dest/1.png'
import img2x from '../../../assets/images/dest/1@2x.png'
import img3x from '../../../assets/images/dest/1@3x.png'
const StudyInSystem = () => {
  return (
    <section className="study_in_system row justify-center align-center">
      <div className="row align-center justify-center">
        <img srcSet={`${img} 1x, ${img2x} 2x, ${img3x} 3x`}
          src={img} className='study_in_system-section_image' alt='alt' />
      </div>
      <div className="study_in_system_descr">
        {/* <h3 className="section_name gradient-text">studying in stem</h3> */}
        <h4 className="section_header">Creative STEM Challenges:</h4>
        <p className="descr_text">
          Inquiry based STEM education ensures the highest quality experience for both learners and educators. This not only ensures young people acquire relevant information about the natural sciences but also enhances their ability to solve complex problems and tackle global issues such as climate change and energy transition. Through guided inquiry students are supported in hands on exploration, problem solving and innovation.
            </p>
      </div>
    </section>
  )
}


export default StudyInSystem