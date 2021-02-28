import React from "react";
import lessonDummy from "../../../assets/images/dest/lesson_preview.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ROUTE_TO_LOGIN, routeToCourses } from "../../../constants/routes.js";
import config from "../../../config";

const FeaturedLessons = ({ courses }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const lastCourses = () => {
    // used requiredIds[i] to choose courses what clients want to see at the front page
    let items = courses.reduce((acc, el) => {
      if (el.remote_learning) {
        acc.push(el);
      }
      return acc;
    }, []).map((item) => {
        let bg_image =
          item.icon && item.icon.url
            ? config.REACT_APP_ROOT + item.icon.url
            : lessonDummy;
        return (
          <Link
            className="lessonSlideWrapper"
            key={item.id}
            to={routeToCourses(item.id)}
          >
            <div
              className="lesson_item"
              style={{ backgroundImage: "url(" + bg_image + ")" }}
            >
              <p className="lesson_info">
                {/* <span className="lesson_count"> {`${item.tutorials_count} ${item.tutorials_count === 1 ? 'lesson' : 'lessons'}`}</span>
              <span className="lesson_author">by Lesly Shay</span> */}
              </p>
              <p className="lesson_name">{item.title}</p>
            </div>
          </Link>
        );
      });
    return items;
  };

  return (
    <section className="lessons">
      <div className="container">
        <h3 className="section_name gradient-text">studying in stem</h3>
        <div className="row justify-between align-center">
          <h4 className="section_header">Launching soon in our remote learning series … </h4>
          <Link to={ROUTE_TO_LOGIN} className="all_topic_link">
            All topics
          </Link>
        </div>
      </div>
      <div className="container featured_carousel">
        {courses ? <Slider {...settings}>{lastCourses()}</Slider> : null}
      </div>
    </section>
  );
};

export default FeaturedLessons;
