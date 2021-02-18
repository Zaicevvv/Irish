/* eslint-disable */
export const getUser = () => localStorage.getItem('user') || sessionStorage.getItem('user')

export const getUserRole = () => localStorage.getItem('role') || sessionStorage.getItem('role')

export const setUser = (id, role) => {
  localStorage.setItem('user', id)
  sessionStorage.setItem('user', id)
  localStorage.setItem('role', role)
  sessionStorage.setItem('role', role)
}

export const removeUser = () => {
  localStorage.removeItem('user')
  sessionStorage.removeItem('user')
  localStorage.removeItem('role')
  sessionStorage.removeItem('role')
}
