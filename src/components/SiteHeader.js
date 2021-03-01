import React, { useState } from 'react'
import { string, any, arrayOf } from 'prop-types'
import Logo from './Logo'
import history from '../history'
import { connect } from 'react-redux'
import { removeToken } from '../utils/tokenCRUD'
import { removeUser } from '../utils/currentUserCRUD'
import UserMenu from './UserMenu'
import { Link } from 'react-router-dom'
import { ROUTE_TO_CREATE_COURSE, ROUTE_TO_LOGIN, routeToTestimonial } from '../constants/routes'
import { logoutAction } from '../containers/Auth/actions'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const SiteHeader = ({ children, additionaClassname, user, onLogout }) => {

  const [active, setActive] = useState(false)

  const onLogoutHandler = () => {
    onLogout()
      .then(() => {
        removeToken()
        removeUser()
        history.push(ROUTE_TO_LOGIN)
      })
      .catch((e) => console.error(e))
  }

  const isFeedbackPage = window.location.href.includes('testimonial');

  return (
    <header className={`header ${additionaClassname || ''}`}>
      <div className='container'>
        <div className={`row flex-start align-center header_content ${active ? 'active' : 'disable'}`} id='header_content'>
          <Logo user={user} />
          <ul className='header_nav_list row flex-start align-center'>
            {children}
          </ul>
          {user && user.id && user.role != 'admin' && <UserMenu user={user} />}
          {user && user.id && user.role === 'admin' && !isFeedbackPage && <Link to={ROUTE_TO_CREATE_COURSE} className='add_course_btn'> Add new courses</Link>}
          {user && user.id && user.role === 'admin' && isFeedbackPage && <Link to={routeToTestimonial()} className='add_course_btn'> Add testimonial</Link>}
          {user && user.id && user.role === 'admin' && <a className='admin_logout' href='#' onClick={onLogoutHandler}><ExitToAppIcon /></a>}
          <div className="header_actions row justify-between align-center">
            <button type="button" className="button fill mr-10">SIGN IN </button>
            <button type="button" className="button empty">SIGN UP </button>
          </div>
          <div className="hamburger" onClick={() => setActive(!active)}>
            <svg id="open" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10 12.5h11m-18-6h18m-18 12h18" stroke="#8A0F88" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" /></svg>
            <svg id="close" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path fill="#8A0F88" fillRule="nonzero" d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" /></g></svg>
          </div>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = ({ auth: { user } }) => ({ user })

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logoutAction())
})

SiteHeader.propTypes = {
  children: arrayOf(any),
  additionaClassname: string
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteHeader)
