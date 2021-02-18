import React from 'react'
import { connect } from 'react-redux'
import StaticPage from '../../../components/StaticPage'
import headerData from '../../../constants/navData'
import ProfileFormWrapper from '../../../components/ProfileFormWrapper'
import SignupForm from '../../../components/SignupForm'
import FloatIcons from '../../../components/FloatIcons'
import { ROUTE_TO_ROOT, ROUTE_TO_PROFILE } from '../../../constants/routes'
import { createUserAction } from '../actions'
import { setToken } from '../../../utils/tokenCRUD'
import { setUser } from '../../../utils/currentUserCRUD'
import history from '../../../history'

const Signup = ({ onSubmit }) => {
  const onFormSubmit = async (values) => {
    const data = {
      user: {
        ...values
      }
    }
    const response = await onSubmit(data)
    const { token, user } = response.value.data

    if (token) setToken(token)
    if (user) {
      setUser(user.id, user.role)
      // if (!user.name) {
      //   history.push(ROUTE_TO_PROFILE)
      //   return false
      // }
    }
    history.push(ROUTE_TO_PROFILE)
  }
  return (
    <StaticPage pageClass='login' headerData={headerData.general}>
      <ProfileFormWrapper additionaClassname='login-form'>
        <SignupForm onFormSubmit={onFormSubmit} />
        <FloatIcons />
      </ProfileFormWrapper>
    </StaticPage>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(createUserAction(data)),
  //successNotification: (message) => dispatch(successNotificationAction(message))
})

Signup.propTypes = {
}

export default connect(null, mapDispatchToProps)(Signup)
