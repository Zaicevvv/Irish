import React from 'react'

const HowItWorks = () => {
  return (
    <section className="how_it_works">
      <div className="container how_it_works_content">
        <div className="row align-start justify-between">
          <div className="about_item">
            <p className="about_item_header"> <i className="icon icon-book"></i> Video guide</p>
            <p>Pick a module or subject area. Enjoy access for a year to our video guides, lesson plans and supporting material.</p>
          </div>
          <div className="about_item">
            <p className="about_item_header"> <i className="icon icon-quiz"></i> Quiz</p>
            <p>After completing a lesson or subject area, take a short quiz to test your own understanding.</p>
          </div>
          <div className="about_item">
            <p className="about_item_header"> <i className="icon icon-lamp"></i> Certificate</p>
            <p>Use towards professional development hours. Download STEM certificate.</p>
          </div>
          <div className="about_item">
            <p className="about_item_header"> <i className="icon icon-glass"></i> STEM Kit</p>
            <p>We supply a range of optional STEM kits to accompany each module.</p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default HowItWorks