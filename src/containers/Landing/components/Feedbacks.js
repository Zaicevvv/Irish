import React from "react";
import Slider from "react-slick";

const Feedbacks = ({ items }) => {
  const settings = {
    dots: false,
    nextArrow: <p>Next</p>,
    prevArrow: <p>Prev</p>,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const feedbacks = () => {
    let result = items.map((item) => {
      return (
        <div className="feedback_item">
          <p>{item.description}</p>
          <p className="feedback_title">{item.title}</p>
        </div>
      );
    });
    return result;
  };

  return (
    <section className="feedbacks">
      <div className="container">
        {/* <h3 className="section_name gradient-text">studying in stem</h3> */}
        <div className="feedback_headers">
          <h4 className="section_name gradient-text">Testimonials</h4>
          <h4 className="section_header">What educators are saying</h4>
        </div>
      </div>
      <div className="container">
        {items ? <Slider {...settings}>{feedbacks()}</Slider> : null}
      </div>
    </section>
  );
};

export default Feedbacks;
