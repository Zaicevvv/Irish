import React from 'react'
import { connect } from 'react-redux'
import Notifications from 'react-notification-system-redux'
import { arrayOf, object } from 'prop-types'

const Notification = ({ notifications }) => {
  const style = {
    // NotificationItem: {
    //   DefaultStyle: {},
    //   success: {}
    // }
  }

  return <Notifications notifications={notifications} style={style} />
}

const mapStateToProps = ({ notifications }) => ({ notifications })

Notification.propTypes = {
  notifications: arrayOf(object)
}

export default connect(mapStateToProps)(Notification)
