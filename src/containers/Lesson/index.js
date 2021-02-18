import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs } from '@material-ui/core';
import headerData from '../../constants/navData';
import { getLessonAction, submitAnswersAction } from './actions'
import StaticPage from '../../components/StaticPage';
import Topic from './components/Topic';
import Quiz from './components/Quiz';
import Video from './components/Video';
import { TABS } from './constants'
import CircularProgress from '@material-ui/core/CircularProgress';

class Lesson extends Component {
  state = {
    selectedTab: TABS.TOPIC,
    answers: [{}],
    selectedQuiz: 0,
    quizResult: null,
  };

  componentDidMount() {
    const { match: { params }, lesson, getLesson } = this.props;
    if (lesson.id !== params.id) {
      getLesson(params.id);
    }
  }

  componentDidUpdate(prevProps) {
    const { quizResult } = this.props;
    console.log(quizResult, prevProps.quizResult)
    if (prevProps.quizResult !== quizResult) {
      this.setState({ quizResult, answers: [{}], selectedQuiz: 0 });
    }
  }

  goToCourse = () => {
    const { history } = this.props;
    history.goBack();
  }

  handleChange = (event, selectedTab) => {
    this.setState({ selectedTab });
  };

  selectQuiz = selectedQuiz => {
    this.setState({ selectedQuiz, quizResult: null });
  }

  onAnswerEdit = (e, value) => {
    const { answers, selectedQuiz } = this.state;
    const newAnswers = [...answers];
    const newAnswerObject = newAnswers[selectedQuiz];
    newAnswerObject[e.target.id] = value;
    this.setState({
      answers: newAnswers
    });
  }

  onNextQuestion = () => {
    const { lesson } = this.props;
    const { selectedQuiz, answers } = this.state;
    const newAnswers = [...answers];
    newAnswers.push({ [lesson.spd_quizzes_attributes[selectedQuiz + 1].id]: '' });
    this.setState({ selectedQuiz: selectedQuiz + 1, answers: newAnswers });
  }

  submitAnswers = event => {
    event.preventDefault();
    const { lesson, handleSubmitAnswers } = this.props;
    const { answers } = this.state;
    const answersObject = {};
    answers.forEach(answer => {
      const key = Object.keys(answer)[0];
      answersObject[key] = answer[key] === 'true';
    });
    handleSubmitAnswers({ answers: answersObject, id: lesson.id });
  }

  renderTab = selectedTab => {
    const { lesson } = this.props;
    const { answers, selectedQuiz, quizResult } = this.state;
    switch (selectedTab) {
      case TABS.TOPIC:
        return <Topic lesson={lesson} />
      case TABS.QUIZ:
        return (
          <Quiz
            id={lesson.id}
            completed={lesson.completed}
            answer={answers[selectedQuiz]}
            selectedQuiz={selectedQuiz}
            quiz={lesson.spd_quizzes_attributes[selectedQuiz]}
            onAnswerEdit={this.onAnswerEdit}
            onNextQuestion={this.onNextQuestion}
            submitAnswers={this.submitAnswers}
            quizResult={quizResult}
            disabled={answers[selectedQuiz][lesson.spd_quizzes_attributes[selectedQuiz].id]}
            selectQuiz={this.selectQuiz}
            goToCourse={this.goToCourse}
          />
        );
      case TABS.VIDEO:
        return <Video lesson={lesson} />
      default:
        return null;
    }
  }

  render() {
    const { lesson } = this.props;
    const { selectedTab } = this.state;
    return (
      <StaticPage pageClass='edit_lesson' headerData={headerData.autorized}>
        <section className="section lesson-details">
          <div>
            <div className="lesson-header-container">
              <div className="lesson-details-header-wrapper">
                <h3 className='lesson-details-lesson-title'>Lesson</h3>
                <p className='lesson-details-lesson-description'>{lesson.title}</p>
              </div>
            </div>
            <div className="row">
              <div className="container justify-content-center">
                <div className="lesson-details-row">
                  <Tabs
                    value={selectedTab}
                    onChange={this.handleChange}
                    classes={{
                      root: 'lesson-details-tabs',
                      indicator: 'no-indicator',
                    }}
                  >
                    {
                      lesson && lesson.topic ? (
                        <Tab label="Topic" value={TABS.TOPIC} />
                      ) : (
                          <div className='progress row justify-center'>
                            <CircularProgress />
                          </div>
                        )
                    }

                    {lesson && lesson.tutorial_videos_attributes && lesson.tutorial_videos_attributes.length > 0 && <Tab label="Video" value={TABS.VIDEO} />}

                    {lesson && lesson.spd_quizzes_attributes && lesson.spd_quizzes_attributes.length > 0 && <Tab label="Quiz" value={TABS.QUIZ} />}

                  </Tabs>
                  {this.renderTab(selectedTab)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </StaticPage>
    );
  }
}

const mapStateToProps = ({ course: { course }, lesson: { lesson, quizResult } }) => ({
  course,
  lesson,
  quizResult,
});

const mapDispatchToProps = dispatch => ({
  getLesson: id => dispatch(getLessonAction(id)),
  handleSubmitAnswers: data => dispatch(submitAnswersAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);