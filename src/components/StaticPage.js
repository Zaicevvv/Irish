import React from 'react'
import { arrayOf, any, element, object, func, string } from 'prop-types'

import { connect } from 'react-redux'
import Header from './SiteHeader'
import HeaderItem from './HeaderItem'
import Footer from './Footer'
// import history from '../history'
// import SidebarItem from './SidebarItem'
// import { ROUTE_TO_LOGIN } from '../constants/routes'
// import { removeToken } from '../utils/tokenCRUD'
// import { removeUser } from '../utils/currentUserCRUD'
// import { logoutAction } from '../containers/Auth/actions'

const StaticPage = ({ children, headerData, pageClass }) => {
  // const onLogoutHandler = () => {
  //   onLogout()
  //     .then(() => {
  //       removeToken()
  //       removeUser()
  //       history.push(ROUTE_TO_LOGIN)
  //     })
  //     .catch((e) => console.error(e))
  // }
  return (
    <>
      <div className={`page_wrapp ${pageClass}`}>
        <Header>
          {headerData.map((item) => (
            <HeaderItem item={item} key={item.title} />
          ))}
        </Header>
        <main className="main_content">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

StaticPage.propTypes = {
  children: arrayOf(any),
  sidebarData: arrayOf(object),
  header: element,
  // onLogout: func.isRequired,
  pageClass: string
}

const mapDispatchToProps = (dispatch) => ({
  // onLogout: () => dispatch(logoutAction())
})

export default connect(null, mapDispatchToProps)(StaticPage)
