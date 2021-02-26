import { Feedback } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import StaticPage from "../../../../components/StaticPage";
import headerData from "../../../../constants/navData";

const FeedbackCreateForm = () => {
  const [testimonial, setTestimonial] = useState();

  useEffect(() => {}, []);

  return (
    <StaticPage pageClass="feedbacks_list" headerData={headerData.admin}>
      <div className="container">
        <h3>Edit testimonial</h3>
        <form>
          <input type="text" value={Feedback.first_name} />
          <input type="text" value={Feedback.testimonial} />
        </form>
      </div>
    </StaticPage>
  );
};

export default FeedbackCreateForm;
