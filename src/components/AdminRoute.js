import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { string, elementType, bool, func } from 'prop-types'

import { ROUTE_TO_LOGIN, ROUTE_TO_MY_COURSES, ROUTE_TO_DASHBOARD } from '../constants/routes'
import { getToken } from '../utils/tokenCRUD'
import { getUserRole } from '../utils/currentUserCRUD'
import { connect } from 'react-redux'

function AdminRoute({ component, render, path, exact, user }) {
  const accessAllowed = getToken()
  const role = getUserRole()

  if (!accessAllowed) {
    return <Redirect to={ROUTE_TO_LOGIN} />
  }

  if (accessAllowed && role != 'admin') {
    return <Redirect to={ROUTE_TO_DASHBOARD} />
  }

  return component ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
      <Route exact={exact} path={path} render={render} />
    )
}

const mapStateToProps = ({ auth: { user } }) => ({ user })

AdminRoute.propTypes = {
  component: elementType,
  render: func,
  path: string.isRequired,
  exact: bool
}

export default connect(mapStateToProps, null)(AdminRoute)
