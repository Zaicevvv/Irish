import { success, error } from 'react-notification-system-redux'

const defaultOptions = {
  position: 'tr',
  autoDismiss: 3
}

export const successNotificationAction = (message = 'N/A') =>
  success({
    ...defaultOptions,
    title: 'Success',
    message
  })

export const errorNotificationAction = (message = 'Something went wrong. Try it later.') =>
  error({
    ...defaultOptions,
    title: 'Error',
    message
  })

