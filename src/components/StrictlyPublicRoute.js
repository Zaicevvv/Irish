import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { string, elementType, bool, func } from 'prop-types'
import { ROUTE_TO_ROOT, ROUTE_TO_MY_COURSES, ROUTE_TO_ADMIN_COURSES, ROUTE_TO_DASHBOARD } from '../constants/routes'
import { getToken } from '../utils/tokenCRUD'
import { getUserRole } from '../utils/currentUserCRUD'
import { connect } from 'react-redux'

function StrictlyPublicRoute({ component, render, path, exact }) {
  const accessAllowed = getToken()
  const role = getUserRole()

  if (accessAllowed && role === 'admin') {
    return <Redirect to={ROUTE_TO_ADMIN_COURSES} />
  }

  if (accessAllowed) {
    return <Redirect to={ROUTE_TO_DASHBOARD} />
  }

  return component ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
    <Route exact={exact} path={path} render={render} />
  )
}


StrictlyPublicRoute.propTypes = {
  component: elementType,
  render: func,
  path: string.isRequired,
  exact: bool
}

export default StrictlyPublicRoute