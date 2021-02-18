import React from 'react';
import { connect } from 'react-redux';
import StaticPage from '../../components/StaticPage';
import headerData from '../../constants/navData';
import FloatIcons from '../../components/FloatIcons'
import img from '../../assets/images/dest/educators.png'
import { Link } from 'react-router-dom'
import { ROUTE_TO_LOGIN, ROUTE_TO_CREATE_ACCOUNT } from '../../constants/routes.js';


const Educators = ({ user }) => {
  return (
    <StaticPage pageClass='educators' headerData={user && user.id ? headerData.autorized : headerData.general}>
      <section className='educators_wrapper'>
        <div className='sponsorship-header' style={{ textAlign: 'center' }}>
          <h2 className='gradient-text'>Guiding you through STEM – designed by educators for educators. </h2>
          <h1>Educators</h1>
        </div>
        <div >
          <p className='educators_paragraph'>We’ve developed an  online training program designed to equip you with the necessary skills, knowledge and confidence to implement a premium STEM learning experience in the classroom or education setting. We provide top quality lesson plans, step by step video guides, practical activities and suggested STEM teaching kits. Our courses are also equally relevant to informal education settings such as libraries, after school classes and community groups. </p>
          <div className='row justify-between'>
            <div className='educator_item'>
              <h2 className='educators_offer_header'>What we offer:</h2>
              <h5 className='accent'>Training</h5>
              <p>We offer short video guides to train you step by step to effectively implement our STEM modules. </p>
              <h5 className='accent'>Lesson Plans:</h5>
              <p>We include excellent digital resources. After each lesson or video use our online quiz to test your knowledge. </p>
              <h5 className='accent'>STEM kits:</h5>
              <p>We have also designed STEM  teaching kits for each module to support you in delivering a STEM challenge with your students.</p>
              <p>Explore our modules and get started today. Packed with practical and engaging STEM based activities.</p>
            </div>
            <div className='educator_item'>
              <img src={img} className='w-full' />
            </div>
          </div>

        </div>
        <div>
          <p className='educator_footer'>
            Explore our modules and get started today.
            Packed with practical and engaging STEM based activities.
            </p>
          <div className="row hero_actions justify-center mb-30">
            <Link to={ROUTE_TO_CREATE_ACCOUNT} className="button fill mr-10">ALL COURSES</Link>
          </div>
        </div>
      </section >
      <FloatIcons />
    </StaticPage >
  );
}

const mapStateToProps = ({ auth: { user } }) => ({
  user
});

export default connect(mapStateToProps)(Educators);
