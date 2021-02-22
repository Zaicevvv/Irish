import React from "react";
import FloatIcons from "../../../components/FloatIcons";
import { Link } from "react-router-dom";
import {
  ROUTE_TO_LOGIN,
  ROUTE_TO_CREATE_ACCOUNT,
} from "../../../constants/routes.js";

import heroLogo from "../../../assets/images/dest/logo.svg";
const RemoteLearningHero = () => {
  return (
    <section className="hero row justify-center align-center">
      <div className="container">
        <div className="hero_content">
          <h1 className="hero_header">Remote Learning</h1>
          <p className="hero_descr">
            STEM (science,technology,engineering and math) education is the
            gateway to 21st century success, forming foundations for critical
            thinking, creativity, innovation and curiosity. More than ever it is
            essential for young people  to possess the ability and skills to
            solve complex problems, analyse information, and know how to gather
            and evaluate evidence to make decisions.
          </p>
          <div className="row hero_actions justify-center">
            <Link
              to={ROUTE_TO_LOGIN}
              className="button fill mr-10"
              style={{ marginBottom: "10px" }}
            >
              START TODAY
            </Link>
          </div>
          <p className="hero_descr" style={{ marginBottom: "10px" }}>
            Start Youre Free Trial Today
          </p>
          <p className="hero_descr">Get free access to sample lessons now</p>
        </div>
      </div>
      <FloatIcons />
    </section>
  );
};

export default RemoteLearningHero;
