import {
  ROUTE_TO_ROOT,
  ROUTE_TO_DASHBOARD,
  ROUTE_TO_ADMIN_USERS,
  ROUTE_TO_ADMIN_COURSES,
  ROUTE_TO_SPONSORSHIP,
  ROUTE_TO_CONTACT,
  ROUTE_TO_ABOUT_US,
  ROUTE_TO_EDUCATORS,
  ROUTE_TO_PRICING
} from './routes'

export default {
  general: [
    {
      title: 'HOME',
      route: ROUTE_TO_ROOT
    },
    {
      title: 'sponsorship',
      route: ROUTE_TO_SPONSORSHIP
    },
    {
      title: 'About us',
      route: ROUTE_TO_ABOUT_US
    },
    {
      title: 'Educators',
      route: ROUTE_TO_EDUCATORS
    },
    {
      title: 'Pricing',
      route: ROUTE_TO_PRICING
    },
    {
      title: 'Contact us',
      route: ROUTE_TO_CONTACT
    }
  ],
  autorized: [
    {
      title: 'Courses',
      route: ROUTE_TO_DASHBOARD,
    },
    {
      title: 'sponsorship',
      route: ROUTE_TO_SPONSORSHIP
    },
    {
      title: 'About us',
      route: ROUTE_TO_ABOUT_US
    },
    {
      title: 'Educators',
      route: ROUTE_TO_EDUCATORS
    },
    {
      title: 'Pricing',
      route: ROUTE_TO_PRICING
    },
    {
      title: 'Contact us',
      route: ROUTE_TO_CONTACT
    }
  ],
  admin: [
    {
      title: 'Users',
      route: ROUTE_TO_ADMIN_USERS,
    },
    {
      title: 'All courses',
      route: ROUTE_TO_ADMIN_COURSES
    }
  ]
}
