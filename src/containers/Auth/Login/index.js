import React from 'react'
import { connect } from 'react-redux'
import StaticPage from '../../../components/StaticPage'
import headerData from '../../../constants/navData'
import ProfileFormWrapper from '../../../components/ProfileFormWrapper'
import LoginForm from '../../../components/LoginForm'
import FloatIcons from '../../../components/FloatIcons'
import { setToken } from '../../../utils/tokenCRUD'
import { setUser } from '../../../utils/currentUserCRUD'
import { ROUTE_TO_ROOT, ROUTE_TO_PROFILE, ROUTE_TO_ADMIN_COURSES } from '../../../constants/routes'
import history from '../../../history'


import { loginAction } from '../actions'

const Login = ({ onSubmit }) => {
  const onFormSubmit = async (values) => {
    const response = await onSubmit(values)
    const { token, user } = response.value.data.data

    if (token) setToken(token)
    if (user) {
      setUser(user.id, user.role)
      if (user.role === 'admin') {
        history.push(ROUTE_TO_ADMIN_COURSES)
        return false
      }
      if (user.role === 'user') {
        history.push(ROUTE_TO_ADMIN_COURSES)
        return false
      }
    }
    history.push(ROUTE_TO_PROFILE)
  }
  return (
    <StaticPage pageClass='login' headerData={headerData.general}>
      <ProfileFormWrapper additionaClassname='login-form'>
        <LoginForm onFormSubmit={onFormSubmit} />
        <FloatIcons />
      </ProfileFormWrapper>
    </StaticPage>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(loginAction(data)),
  //successNotification: (message) => dispatch(successNotificationAction(message))
})

Login.propTypes = {
}

export default connect(null, mapDispatchToProps)(Login)
