import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import StaticPage from "../../components/StaticPage";
import headerData from "../../constants/navData";

const RemoteLearning = ({ user }) => {
  return (
    <StaticPage
      pageClass="profile"
      headerData={user && user.id ? headerData.autorized : headerData.general}
    ></StaticPage>
  );
};

const mapStateToProps = ({ auth: { user } }) => ({
  user,
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoteLearning);
