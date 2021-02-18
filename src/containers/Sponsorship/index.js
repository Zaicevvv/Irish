import React from 'react';
import { connect } from 'react-redux';
import StaticPage from '../../components/StaticPage';
import headerData from '../../constants/navData';
import FloatIcons from '../../components/FloatIcons'

const Sponsorship = ({ user }) => {
  return (
    <StaticPage pageClass='profile' headerData={user && user.id ? headerData.autorized : headerData.general}>
      <section className='sponsorship' style={{ textAlign: 'center' }}>
        <div className='sponsorship-header'>
          <h1>Sponsorship</h1>
          <h2>Making STEM Education your business</h2>
        </div>
        <p>
          Excellence in STEM education is more than doing science, technology, engineering and math or learning about the scientific method. It provides an opportunity for complex problem solving, critical thinking and working creatively and collaboratively. Not all students will go onto study STEM subjects but all students should have access to hands on inquiry throughout their education.
        </p>
        <p>
          Developing and implementing quality STEM learning  is challenging  but through  quality inter-disciplinary practice and collaborative partnerships we can achieve long term sustainability and measurable impact.
        </p>
        <p>
          Together we can  support our educators with excellent resources and teaching kits, continue learning outside the classroom and encourage parental involvement. Our shared common goal  will ensure our young people  are ready for a 21st century workforce and develop the skillset required for this.
        </p>
        <div className='why-sponsor-wrapper'>
          <div className='sponsorship-header'>
            <h2>Why sponsor a school or community group:</h2>
          </div>
          <div className='why-sponsor-list'>
            <div className='why-sponsor-list-item'>
              <span>•</span>
              <p>Demonstrate your support of a sustainable model in developing STEM skills  and prevent skill shortages in the future.</p>
            </div>
            <div className='why-sponsor-list-item'>
              <span>•</span>
              <p>Fulfil your CSR in the area of community engagement and provide access to a premium STEM learning experience.</p>
            </div>
            <div className='why-sponsor-list-item'>
              <span>•</span>
              <p>Support gender equality by introducing STEM topics to kids at the earliest age possible.</p>
            </div>
            <div className='why-sponsor-list-item'>
              <span>•</span>
              <p>Building strong lasting links with teachers will support growth in STEM subjects and relate the classroom to real world application.</p>
            </div>
          </div>
        </div>
      </section>
      <FloatIcons />
    </StaticPage>
  );
}

const mapStateToProps = ({ auth: { user } }) => ({
  user,
});

export default connect(mapStateToProps)(Sponsorship);
