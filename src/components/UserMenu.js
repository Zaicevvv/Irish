import React, { useState } from 'react'
import { arrayOf, object } from 'prop-types'
import { connect } from 'react-redux';
import history from '../history'
import { ROUTE_TO_LOGIN, ROUTE_TO_ROOT, ROUTE_TO_PROFILE, ROUTE_TO_PAYMENTS_INFO, ROUTE_TO_MY_COURSES, ROUTE_TO_DASHBOARD } from '../constants/routes.js';
import { logoutAction } from '../containers/Auth/actions'
import { removeToken } from '../utils/tokenCRUD'
import { removeUser } from '../utils/currentUserCRUD'
import avatarPlaceholder from '../assets/images/dest/ava.png'
import { Link } from 'react-router-dom';
import config from '../config';

const UserMenu = ({ user, onLogout }) => {

    const [showMenu, setShowMenu] = useState(false)

    const onLogoutHandler = () => {
        onLogout()
            .then(() => {
                removeToken()
                removeUser()
                history.push(ROUTE_TO_LOGIN)
            })
            .catch((e) => console.error(e))
    }

    return (

        <div className="user_menu">
            <div className="user_menu_avatar">
                <button type='button' className='user_menu_button' onClick={() => setShowMenu(!showMenu)}>
                    <img src={user.avatar.url ? config.REACT_APP_ROOT + user.avatar.thumb.url : avatarPlaceholder} />
                    <span>{`${user.first_name} ${user.last_name}`}</span>
                </button>
                {showMenu ? (
                    <div className="user_menu_list">
                        <ul>
                            <li>
                                <Link to={ROUTE_TO_PROFILE}>My Profile</Link>
                            </li>
                            <li className='d_hide'>
                                <Link to={ROUTE_TO_DASHBOARD}>All Courses</Link>
                            </li>
                            <li>
                                <Link to={ROUTE_TO_MY_COURSES}>My Courses</Link>
                            </li>
                            <hr />
                            <li>
                                <Link to={ROUTE_TO_PAYMENTS_INFO}>My Payment info</Link>
                            </li>
                            <hr />
                            <li className='logout'>
                                <a href='#' onClick={onLogoutHandler}>Log Out</a>
                            </li>
                        </ul>
                    </div>
                ) : null
                }

            </div>
        </div>

    )
}

UserMenu.propTypes = {
    user: arrayOf(object)
}

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch(logoutAction())
})

export default connect(null, mapDispatchToProps)(UserMenu)