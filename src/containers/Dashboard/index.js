import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getCoursesAction } from './actions';
import { getCurrentUserAction } from '../Auth/actions';
import StaticPage from '../../components/StaticPage';
import headerData from '../../constants/navData';
import CourseListItem from './CourseListItem';
import CircularProgress from '@material-ui/core/CircularProgress';

class Dashboard extends PureComponent {
  componentDidMount() {
    const { getCourses, getCurrentUser } = this.props;
    getCourses();
    if (getCurrentUser)
      setTimeout(() => getCurrentUser(), 1000);
  }

  render() {
    const { courses, letters, user, inProcess } = this.props;
    return (
      <StaticPage pageClass='profile' headerData={headerData.autorized}>
        <section className="section topics">
          <div className="container-fluid">
            <div className="row justify-content-center list-title">
              <h3>All Courses</h3>
            </div>
            {inProcess ? (
              <div className='progress row justify-center'>
                <CircularProgress />
              </div>
            ) : (
                <div className="row">
                  <div className="container">
                    <div className="list-container">
                      {letters.map(letter =>
                        <div key={letter} className="topic-block">
                          <div className="row">
                            <div className="topic-block-letter">
                              <span>{letter}</span>
                            </div>
                            <div className="same-letter-wrapper">
                              {courses[letter].map(course =>
                                <CourseListItem
                                  key={course.id}
                                  course={course}
                                  user={user}
                                />
                              )
                              }
                            </div>
                          </div>
                        </div>
                      )
                      }
                    </div>
                  </div>
                </div>
              )}
          </div>
        </section>
      </StaticPage>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCourses: () => dispatch(getCoursesAction()),
  getCurrentUser: () => dispatch(getCurrentUserAction())
});

const mapStateToProps = ({ dashboard: { courses, letters, inProcess }, auth: { user } }) => ({
  courses,
  letters,
  user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
