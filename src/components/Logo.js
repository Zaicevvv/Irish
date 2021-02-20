import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_TO_DASHBOARD, ROUTE_TO_ROOT } from "../constants/routes";
import logo from "../assets/images/dest/logo_blue.svg";

const Logo = ({ user }) => {
  return (
    <Link
      to={user && user.id ? ROUTE_TO_DASHBOARD : ROUTE_TO_ROOT}
      className="header_logo gradient-text"
    >
      <img src={logo} className="logo_img" />
    </Link>
  );
};

export default Logo;
