import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import StaticPage from '../../../components/StaticPage'
import headerData from '../../../constants/navData'
import ProfileFormWrapper from '../../../components/ProfileFormWrapper'
import ChangePasswordForm from '../../../components/ChangePasswordForm'
import FloatIcons from '../../../components/FloatIcons'
import { ROUTE_TO_ROOT, ROUTE_TO_LOGIN } from '../../../constants/routes'
import { forgotPasswordAction } from '../actions'
import { setToken } from '../../../utils/tokenCRUD'
import { setUser } from '../../../utils/currentUserCRUD'
import history from '../../../history'

const ChangePassword = ({ onSubmit, match }) => {
  const [token, setToken] = useState()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      setToken(token)
    }
  }, []);

  const onFormSubmit = async (values) => {
    const data = {
      ...values,
      token: token
    }
    const response = await onSubmit(values).then(() => { history.push(ROUTE_TO_LOGIN) })
  }

  return (
    <StaticPage pageClass='login' headerData={headerData.general}>
      <ProfileFormWrapper additionaClassname='login-form'>
        <ChangePasswordForm onFormSubmit={onFormSubmit} />
        <FloatIcons />
      </ProfileFormWrapper>
    </StaticPage>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(forgotPasswordAction(data)),
  //successNotification: (message) => dispatch(successNotificationAction(message))
})

ChangePassword.propTypes = {
}

export default connect(null, mapDispatchToProps)(ChangePassword)
