import React, { PureComponent } from "react";
import StaticPage from "../../components/StaticPage";
import headerData from "../../constants/navData";
import LetterCoursesBox from "./LetterCoursesBox";
import MobileContainer from "./MobileContainer";
import PaymentModal from "./PaymentModal";
import history from "../../history";
import { routeToCourse, ROUTE_TO_LOGIN } from "../../constants/routes";

class Courses extends PureComponent {
  state = {
    showModal: false,
  };

  onCourseClick = (course) => {
    const { getCourse } = this.props;
    getCourse(course.id);
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };
  goToCourse = (course) => {
    const { user } = this.props;
    if (!user) {
      history.push(ROUTE_TO_LOGIN);
      return;
    }
    const user_subscriptions = user.subscription_ids;
    const subscribed = user.subscription;
    const isSubscribedCategory = user_subscriptions.includes(
      parseInt(course.id, 10)
    );
    const isPayed = subscribed || isSubscribedCategory;
    if (!isPayed) {
      this.showModal();
    } else {
      const { addToMyCourse } = this.props;
      if (addToMyCourse) {
        addToMyCourse(course);
        setTimeout(() => {
          history.push(routeToCourse(course.id));
        }, 500);
      } else {
        history.push(routeToCourse(course.id));
      }
    }
  };

  render() {
    const {
      courses,
      letters,
      user,
      course,
      onToken,
      onTokenSingle,
      inProcess,
    } = this.props;
    return (
      <StaticPage pageClass="profile" headerData={headerData.autorized}>
        <section className="sec-category-content">
          <div className="container">
            <div className="results-wrapper-large">
              <div className="results-container">
                <div className="panel-categories">
                  {letters.map((letter) => (
                    <LetterCoursesBox
                      key={letter}
                      letter={letter}
                      courses={courses[letter]}
                      onCourseClick={this.onCourseClick}
                      course={course}
                    />
                  ))}
                </div>
                {course && course.id && (
                  <div className="panel-catresults">
                    <p className="cat-title">{course.title}</p>
                    <p className="cat-section">Description of this course</p>
                    <p className="cat-description">{course.description}</p>
                    <p className="cat-section">Modules include:</p>
                    {/* { user && user.role === 'admin' &&
                        <div style={{ float: 'right' }}>
                          <button className='btn btn-remove-cat' onClick={ onDeleteCategory }>
                            <img src={ DeletedIcon } alt="icon" />
                          </button>
                          <button className='btn btn-remove-cat' onClick={ onEditCategory }>
                            <img src={ EditIcon } alt="icon" />
                          </button>
                        </div>
                      } */}
                    {course.tutorials &&
                      course.tutorials.map((tutorial, index) => (
                        <div
                          key={index}
                          className="admin-consultation-action-container"
                        >
                          <span className="cat-result">
                            {`Lesson ${index + 1}: ${tutorial}`}
                          </span>
                          {/* {subcategory.pdf_url ?
                            <a className='btn btn-remove-cat' style={{flex: 1, justifyContent: 'flex-start', marginTop: '0', marginLeft: '7px'}} href={`${IMAGE_URL}/${subcategory.pdf_url}`} target='_blank'>
                              <img src={ PDFIcon } alt="icon" />
                            </a> : null
                          }
                          { user && user.role === 'admin' &&
                            <button className='btn btn-remove-cat' onClick={ () => onDeleteConsultation(subcategory.id, selectedCategory.id) }>
                              <img src={ DeletedIcon } alt="icon" />
                            </button>
                          } */}
                        </div>
                      ))}
                    <span
                      //to={`/course/${course.id}`}
                      className="cat-btn-details"
                      onClick={() => this.goToCourse(course)}
                    >
                      <span className="cat-btn-details-text">GO TO COURSE</span>
                    </span>
                    <PaymentModal
                      hideModal={this.hideModal}
                      open={this.state.showModal}
                      onToken={onToken}
                      onTokenSingle={onTokenSingle}
                      user={user}
                      id={course.id}
                      courseName={course.title}
                    />
                  </div>
                )}
              </div>
            </div>
            <MobileContainer
              course={course}
              user={user}
              goToCourse={this.goToCourse}
            />
          </div>
        </section>
      </StaticPage>
    );
  }
}

export default Courses;
