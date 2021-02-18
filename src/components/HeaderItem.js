import React from 'react'
import { string, shape } from 'prop-types'
import { Link } from 'react-router-dom'
import history from '../history'

const HeaderItem = ({ item }) => {
  const { route, title } = item
  return (
    <li>
      <Link
        className={`header_link ${history.location.pathname === route ? 'active' : ''}`}
        to={route}>
        {title}
      </Link>
    </li>
  )
}

HeaderItem.propTypes = {
  item: shape({
    route: string,
    title: string,
  })
}

export default HeaderItem
