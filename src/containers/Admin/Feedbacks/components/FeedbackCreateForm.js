import React, { useState } from "react";
import StaticPage from "../../../../components/StaticPage";
import headerData from "../../../../constants/navData";

const FeedbackCreateForm = () => {
  const [testimonial, setTestimonial] = useState();

  return (
    <StaticPage pageClass="feedbacks_list" headerData={headerData.admin}>
      <div className="container">
        <h3>Create testimonial</h3>
        <form>
          <input type="text" />
          <input type="text" />
        </form>
      </div>
    </StaticPage>
  );
};

export default FeedbackCreateForm;
