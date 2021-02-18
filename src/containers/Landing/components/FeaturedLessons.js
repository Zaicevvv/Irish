import React from 'react'
import lessonDummy from '../../../assets/images/dest/lesson_preview.jpg'
import Slider from "react-slick"
import { Link } from 'react-router-dom'
import { ROUTE_TO_LOGIN } from '../../../constants/routes.js';
import config from '../../../config';


const FeaturedLessons = ({ courses }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }

  const lastCourses = () => {
    let size = 3;
    // used courses[i] to choose courses what clients want to see at the fromt page
    let items = [courses[0], courses[2], courses[3]].slice(0, size).map(item => {
      let bg_image = item.icon && item.icon.url ? config.REACT_APP_ROOT + item.icon.url : lessonDummy
      return (
        <div className='lessonSlideWrapper'>
          <div className="lesson_item" style={{ backgroundImage: 'url(' + bg_image + ')' }}>
            <p className="lesson_info">
              {/* <span className="lesson_count"> {`${item.tutorials_count} ${item.tutorials_count === 1 ? 'lesson' : 'lessons'}`}</span>
              <span className="lesson_author">by Lesly Shay</span> */}
            </p>
            <p className="lesson_name">
              {item.title}
            </p>
          </div>
        </div>
      )
    })
    return items
  }

  return (
    <section className="lessons">
      <div className="container">
        {/* <h3 className="section_name gradient-text">studying in stem</h3> */}
        <div className='row justify-between align-center'>
          <h4 className="section_header">Featured STEM challenges</h4>
          <Link to={ROUTE_TO_LOGIN} className='all_topic_link'>All topics</Link>
        </div>
      </div>
      <div className="container featured_carousel">
        {courses ? (
          <Slider {...settings}>
            {lastCourses()}
          </Slider>
        ) : null}
      </div>
    </section>
  )
}


export default FeaturedLessons