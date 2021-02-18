import React, { useState } from 'react'
import { connect } from 'react-redux'
import StaticPage from '../../../components/StaticPage'
import headerData from '../../../constants/navData'
import ProfileFormWrapper from '../../../components/ProfileFormWrapper'
import ForgotPasswordForm from '../../../components/ForgotPasswordForm'
import FloatIcons from '../../../components/FloatIcons'
import { forgotPasswordAction } from '../actions'

const ForgotPassword = ({ onSubmit }) => {
  const [showSuccess, setShowSuccess] = useState(false)

  const onFormSubmit = async (values) => {
    const response = await onSubmit(values).then(() => { setShowSuccess(true) })
  }
  return (
    <StaticPage pageClass='login' headerData={headerData.general}>
      <ProfileFormWrapper additionaClassname='login-form'>
        {showSuccess ? (
          <div className='recovery_ok'>
            <p>We have sent further instructions to your email address</p>
          </div>
        ) : (
            <ForgotPasswordForm onFormSubmit={onFormSubmit} />
          )}
        <FloatIcons />
      </ProfileFormWrapper>
    </StaticPage>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(forgotPasswordAction(data)),
})

ForgotPassword.propTypes = {
}

export default connect(null, mapDispatchToProps)(ForgotPassword)
