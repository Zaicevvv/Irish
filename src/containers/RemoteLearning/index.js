import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import StaticPage from "../../components/StaticPage";
import headerData from "../../constants/navData";
import RemoteLearningHero from "./components/RemoteLearningHero";
import FloatIcons from "../../components/FloatIcons";
import img1 from "../../assets/images/dest/price1.png";
import img2 from "../../assets/images/dest/price2.png";
import FeaturedLessons from "../Landing/components/FeaturedLessons";
import { getCategoriesAction } from "../Landing/actions";
import css from "./RemoteLearning.module.css";

const items = [img1, img2, img1, img2, img1, img2];

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
      <section className="pricing_page">
        <section className="row justify-between">
          <div className="pricing_img">
            <img src={img1} className="w-full" />
          </div>
          <div className="pricing_text">
            <h4 className="gradient-text ttu">How it works:</h4>
            <p>
              Effective STEM education is not about conveying just the facts of
              science and engineering, but also an enhanced understanding of the
              way that scientists and engineers acquire the knowledge and skills
              to solve complex global issues. We have designed each module
              around a STEM challenge that involves real world problem solving.
            </p>
            <ul style={{ listStyle: "inside" }}>
              <li>Pick a STEM Challenge Module</li>
              <li>Register and pay</li>
              <li>Enjoy full access for a year</li>
              <li>Complete at your own pace</li>
              <li>Save time planning and researching</li>
            </ul>
          </div>
        </section>
        <section className="row justify-between">
          <div className="pricing_text">
            <h4 className="gradient-text ttu">Overall school license</h4>
            <p>
              The overall school licence is ideal for implementing a premium
              STEM experience across a whole school or education setting. The
              modules are packed full of practical hands-on STEAM based
              activities designed to equip educators  and teachers with the
              essential skills to implement an engaging curriculum. Unlimited
              access to all lessons, video guides and teaching resources.{" "}
            </p>
            <ul style={{ listStyle: "inside" }}>
              <li>Up to 50 educators</li>
              <li>Unlimited access to all content and challenges</li>
              <li>Unlimited students</li>
            </ul>
          </div>
          <div className="pricing_img">
            <img src={img2} className="w-full" />
          </div>
        </section>
      </section>
      <div className="hero_content">
        <h4 className="gradient-text ttu">All about air</h4>
        <h3 className="hero_header" style={{ fontSize: "30px" }}>
          WIND POWER
        </h3>
        <p className="hero_descr">
          STEM (science,technology,engineering and math) education is the
          gateway to 21st century success, forming foundations for critical
          thinking, creativity, innovation and curiosity. More than ever it is
          essential for young people  to possess the ability and skills to solve
          complex problems, analyse information, and know how to gather and
          evaluate evidence to make decisions.
        </p>
        <div className="row hero_actions justify-center">
          <Link
            to="#"
            className="button fill mr-10"
            style={{ marginBottom: "30px" }}
          >
            START TODAY
          </Link>
        </div>
        <ul className={css.list}>
          {items.map((el) => (
            <li className={css.listItem}>
              <img src={el} className="w-full" />
            </li>
          ))}
        </ul>
      </div>
      <FeaturedLessons courses={courses} />
      <div className="hero_content">
        <p className="hero_descr" style={{ marginTop: "100px" }}>
          STEM (science,technology,engineering and math) education is the
          gateway to 21st century success, forming foundations for critical
          thinking, creativity.
        </p>
        <div className="row hero_actions justify-center">
          <Link
            to="#"
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
