import React from 'react';
import { connect } from 'react-redux';
import StaticPage from '../../components/StaticPage';
import headerData from '../../constants/navData';
import FloatIcons from '../../components/FloatIcons'
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const ContactUs = ({ user }) => {
  return (
    <StaticPage pageClass='profile' headerData={user && user.id ? headerData.autorized : headerData.general}>
      <section className='contact_wrapper container'>
        <div className='sponsorship-header'>
          <h2> keep in touch</h2>
          <h1>Сontact us if you have any questions</h1>
        </div>

        <div className='contact_items_row row align-start justify-center'>

          <div className='contact_item'>
            <div className='contact_item_icon' >
              <EmailIcon />
            </div>
            <p className='contact_item_label'>Email us</p>
            <a href="mailto:hello@stembook.co" className="contact_item_val">hello@stembook.co</a>
          </div>

          <div className='contact_item'>
            <div className='contact_item_icon' >
              <HomeIcon />
            </div>
            <p className='contact_item_label'>Address Details</p>
            <p className='contact_item_val' >Garrynamann, Kells, Kilkenny, Ireland</p>
          </div>

          <div className='contact_item'>
            <div className='contact_item_icon' >
              <PhoneInTalkIcon />
            </div>
            <p className='contact_item_label'>Phone Numbers</p>
            <a href="tel:+353879741227" className="contact_item_val">Michelle +353879741227</a>
            <a href="tel:+353863179000" className="contact_item_val">Brendan +353863179000</a>
          </div>

        </div>
        <p className='social_header'>Our social media</p>
        <div className='contact_social_row row align-start justify-center'>
          <a href='#' target='_blank' className='social_link'>
            <LinkedInIcon fontSize="inherit" />
          </a>
          <a href='#' target='_blank' className='social_link'>
            <FacebookIcon fontSize="inherit" />
          </a>
          <a href='#' target='_blank' className='social_link'>
            <InstagramIcon fontSize="inherit" />
          </a>
        </div>

      </section>
      <FloatIcons />
    </StaticPage>
  );
}

const mapStateToProps = ({ auth: { user } }) => ({
  user,
});

export default connect(mapStateToProps)(ContactUs);
