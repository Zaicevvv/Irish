import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import StaticPage from "../../components/StaticPage";
import headerData from "../../constants/navData";
import RemoteLearningHero from "./components/RemoteLearningHero";
import FloatIcons from "../../components/FloatIcons";
import img1 from "../../assets/images/dest/hl_img1.png";
import img2 from "../../assets/images/dest/hl_img2.png";
import w_img1 from "../../assets/images/windpower/1.jpg";
import w_img2 from "../../assets/images/windpower/2.jpg";
import w_img3 from "../../assets/images/windpower/3.jpg";
import w_img4 from "../../assets/images/windpower/4.jpg";
import w_img5 from "../../assets/images/windpower/5.jpg";
import w_img6 from "../../assets/images/windpower/6.jpg";
import FeaturedLessons from "./components/FeaturedLessons";
import { getCategoriesAction } from "../Landing/actions";
import {
  routeToCreateAccount,
  ROUTE_TO_DASHBOARD
} from "../../constants/routes.js";

const items = [w_img1, w_img2, w_img3, w_img4, w_img5, w_img6];

const RemoteLearning = ({ getCategories, courses, user }) => {
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <StaticPage
      pageClass="profile"
      headerData={user && user.id ? headerData.autorized : headerData.general}
    >
      <RemoteLearningHero />
      <section className="pricing_page hl">
        <section className="row justify-between">
          <div className="hl_img">
            <img src={img1} className="w-full" />
          </div>
          <div className="hl_text">
            <h4 className="hl_section_title">Start your FREE trial now</h4>
            <p>
              Start your free trial now and equip young people with tools needed to develop lasting science and engineering skills.
            </p>
            <ul className='hl_list'>
              <li>Encourage creativity, critical thinking and problem solving</li>
              <li>Identify real world problems and find solutions to global issues</li>
              <li>Use the engineering design process</li>
              <li>Apply the scientific method</li>
              <li>Exploration through inquiry</li>
            </ul>
          </div>
        </section>
        <section className="row justify-between">
          <div className="hl_text">
            <h4 className="hl_section_title">Your free trial is valid for 30 days and includes</h4>
            <ul className='hl_list'>
              <li>Instructional videos to introduce the topic area and help you
get ready to experiment and explore.</li>
              <li>A step by step guide packed with extra information, science
facts and real world application</li>
              <li>An equipment list and digital  lab note book. </li>
            </ul>
          </div>
          <div className="hl_img">
            <img src={img2} className="w-full" />
          </div>
        </section>
      </section>
      <div className="hero_content">
        <div className='container'>
          <h4 className="gradient-text ttu">All about air</h4>
          <h3 className="hero_header" style={{ fontSize: "30px" }}>
            WIND POWER
        </h3>
          <p className="hero_descr hl">
            Fun, interactive and hands-on labs designed to explore the science and engineering behind the power of AIR.
            Use the online instructional videos to learn how to build an air powered car, land safely using air resistance, explore density and put engineering skills to the test to build a wind turbine.
            This series of hands on labs and experiments are designed to use equipment you’ll already have around the house or readily available
        </p>
          <div className="row hero_actions justify-center">
            <Link
              to={routeToCreateAccount('new')}
              className="button fill mr-10"
              style={{ marginBottom: "30px" }}
            >
              START TODAY
          </Link>
          </div>
          <ul className='hl_featured_lesson_gallery'>
            {items.map((el, index) => (
              <li className={ index === 2 || index === 3 ? 'full_item' : null }>
                <img src={el} className="w-full" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <FeaturedLessons courses={courses} />
      <div className="hero_content">
        <p className="hero_descr hl_footer" >
          Explore our modules and get started today.
          Packed with practical and engaging STEM based activities.
        </p>
        <div className="row hero_actions justify-center">
          <Link
            to={ROUTE_TO_DASHBOARD}
            className="button fill mr-10"
            style={{ marginBottom: "100px" }}
          >
            ALL COURSES
          </Link>
        </div>
      </div>
      <FloatIcons />
    </StaticPage>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategoriesAction()),
});

const mapStateToProps = ({ landing: { courses }, auth: { user } }) => ({
  courses,
  user,
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoteLearning);
