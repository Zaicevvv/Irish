import React from 'react'
import { string, any, arrayOf } from 'prop-types'

const ProfileFormWrapper = ({ children, additionaClassname }) => {
  return (
    <div className={`container row align-start justify-center form-content ${additionaClassname || ''}`}>
        <div>
            {children}
        </div>
    </div>
  )
}

ProfileFormWrapper.propTypes = {
  children: arrayOf(any),
  additionaClassname: string
}

export default ProfileFormWrapper
