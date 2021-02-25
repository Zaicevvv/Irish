export const ROUTE_TO_ROOT = "/";
export const ROUTE_TO_REMOTE_LEARNING = "/remote-learning";
export const ROUTE_TO_CREATE_ACCOUNT = "/signup";
export const ROUTE_TO_LOGIN = "/login";
export const ROUTE_TO_SPONSORSHIP = "/sponsorship";
export const ROUTE_TO_CONTACT = "/contact_us";
export const ROUTE_TO_PRICING = "/pricing";
export const ROUTE_TO_ABOUT_US = "/about-us";
export const ROUTE_TO_EDUCATORS = "/educators";
export const ROUTE_PASSWORD_RECOVERY = "/password-recovery";
export const ROUTE_PASSWORD_CHANGE = "/update_password:token?";
//LOGGED USERS AND !ADMIN
export const ROUTE_TO_PROFILE = "/profile";
export const ROUTE_TO_DASHBOARD = "/dashboard";
export const ROUTE_TO_COURSES = "/courses/:id";
export const routeToCourses = (id) => `/courses/${id}`;
export const ROUTE_TO_COURSE = "/course/:id";
export const routeToCourse = (id) => `/course/${id}`;
export const ROUTE_TO_LESSON = "/course/lesson/:id";
export const ROUTE_TO_PAYMENTS_INFO = "/payments-info";
export const ROUTE_TO_MY_COURSES = "/my-courses";
//ADMIN ROUTES
export const ROUTE_TO_ADMIN_COURSES = "/admin/courses";
export const ROUTE_TO_ADMIN_USERS = "/users";
export const ROUTE_TO_CREATE_COURSE = "/admin/course_new";
export const ROUTE_TO_COURSE_EDIT = "/admin/course/:id";
export const routeToCourseEdit = (id) => `/admin/course/${id}`;
export const ROUTE_TO_LESSON_EDIT = "/admin/:course_id/lesson/:id?";
export const routeToLessonEdit = (course_id, id) =>
  id ? `/admin/${course_id}/lesson/${id}` : `/admin/${course_id}/lesson/new`;
export const ROUTE_TO_TESTIMONIALS = "/admin/testimonials";
