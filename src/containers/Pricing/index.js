import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StaticPage from "../../components/StaticPage";
import headerData from "../../constants/navData";
import FloatIcons from "../../components/FloatIcons";
import PriceContactForm from "../../components/PriceContactForm";
import { sendMessageAction } from "./actions";
import img1 from "../../assets/images/dest/price1.png";
import img2 from "../../assets/images/dest/price2.png";

const Pricing = ({ user, onSubmit }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const onFormSubmit = async (values) => {
    const response = await onSubmit(values).then(() => {
      setShowSuccess(true);
    });
  };

  return (
    <StaticPage
      pageClass="pricing"
      headerData={user && user.id ? headerData.autorized : headerData.general}
    >
      <section className="pricing_page">
        <div className="pricing-header" style={{ textAlign: "center" }}>
          <h3 className="gradient-text ttu">
            STEM Challenges Based on Real World Application
          </h3>
          <h2>
            Designed to support educators to <br /> effectively implement STEM
            education
          </h2>
        </div>

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
            <ul>
              <li>
                <span className="number">1</span> Pick a STEM Challenge Module
              </li>
              <li>
                <span className="number">2</span> Register and pay
              </li>
              <li>
                <span className="number">3</span> Enjoy full access for a year
              </li>
              <li>
                <span className="number">4</span>Complete at your own pace
              </li>
              <li>
                <span className="number">5</span> Save time planning and
                researching
              </li>
            </ul>
            <i>Optional STEM Teaching Kit</i>
          </div>
        </section>
        <section className="row justify-between">
          <div className="pricing_text">
            <h2 style={{ textAlign: "center" }}>Pricing Per Educator: </h2>
            <ul className="justify-between">
              <li className="price_page_item">
                <span className="gradient-text ttu mb-30">€49</span> STEM
                Challenge Module
              </li>
              <li className="price_page_item">
                <span className="gradient-text ttu mb-30">€199</span> Buy all 5
                modules{" "}
              </li>
              <li className="price_page_item">
                STEM Challenge Module plus Teaching Kit{" "}
                <span className="gradient-text ttu">
                  (contact us to get the stem kit)
                </span>
              </li>
            </ul>
            <h4 className="gradient-text ttu">Overall school license</h4>
            <p>
              The overall school licence is ideal for implementing a premium
              STEM experience across a whole school or education setting. The
              modules are packed full of practical hands-on STEAM based
              activities designed to equip educators  and teachers with the
              essential skills to implement an engaging curriculum. Unlimited
              access to all lessons, video guides and teaching resources.{" "}
            </p>
            <ul>
              <li>
                <span className="number">1</span> Up to 50 educators
              </li>
              <li>
                <span className="number">2</span> Unlimited access to all
                content and challenges
              </li>
              <li>
                <span className="number">3</span> Unlimited students
              </li>
            </ul>
            <i>Contact us for more information about overall school license</i>
          </div>
          <div className="pricing_img">
            <img src={img2} className="w-full" />
          </div>
        </section>
        <section>
          <h2 style={{ textAlign: "center" }}>
            We are happy to advise on teaching kits suitable for a full <br />{" "}
            school STEM experience. Get in touch.
          </h2>
          <div className="price_page_contact">
            {showSuccess ? (
              <div className="recovery_ok">
                <p>
                  Thank you for your application. We will be in touch with you
                  soon
                </p>
              </div>
            ) : (
              <PriceContactForm onFormSubmit={onFormSubmit} />
            )}
          </div>
        </section>
      </section>
      <FloatIcons />
    </StaticPage>
  );
};

const mapStateToProps = ({ auth: { user } }) => ({
  user,
});
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(sendMessageAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);
