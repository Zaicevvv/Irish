/* eslint-disable no-undef */
export const getToken = () => localStorage.getItem('token') || sessionStorage.getItem('token')

export const setToken = (token) => {
  localStorage.setItem('token', token)
  sessionStorage.setItem('token', token)
}

export const removeToken = () => {
  localStorage.removeItem('token')
  sessionStorage.removeItem('token')
}
