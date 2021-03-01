import React from "react";
import FloatIcons from "../../../components/FloatIcons";
import { Link } from "react-router-dom";
import {
  routeToCreateAccount
} from "../../../constants/routes.js";

import heroLogo from "../../../assets/images/dest/logo.svg";
const RemoteLearningHero = () => {
  return (
    <section className="hero row justify-center align-center home_learning">
      <div className="container">
        <div className="hero_content">
          <h1 className="hero_header">Remote Learning</h1>
          <p className="hero_descr">
            Home, classroom or club – we’ve got you covered. STEM challenges designed to support children’s scientific thinking through hands on activities,
            science labs and engineering challenges. A fun learning experience with real world application,
            children are engaged and curious – they want to find out more.
          </p>
          <div className="row hero_actions justify-center">
            <Link
              to={routeToCreateAccount('remote')}
              className="button fill mr-10"
              style={{ marginBottom: "16px" }}
            >
              START TODAY
            </Link>
          </div>
          <p className="hero_descr" style={{ marginBottom: "10px" }}>
            Start Youre Free Trial Today
          </p>
          <p className="hero_descr">Get free access to sample lessons now.</p>
        </div>
      </div>
      <FloatIcons />
    </section>
  );
};

export default RemoteLearningHero;
