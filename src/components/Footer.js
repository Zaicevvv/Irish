import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTE_TO_ROOT} from '../constants/routes'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="row justify-between align-center">
        <p className="footer_copy">© Stem 2020. All rights reserved.</p>
        <div className="footer_nav">
          <Link to={ ROUTE_TO_ROOT }>
            Terms of Service
          </Link>
          <Link to={ ROUTE_TO_ROOT }>
            Privacy Policy
          </Link>
          <Link to={ ROUTE_TO_ROOT }>
          Cookies Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
