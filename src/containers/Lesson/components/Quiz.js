import React, { PureComponent } from "react";
import RadioButton from "@material-ui/core/Radio";
import RadioButtonGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import config from "../../../config";

class Quiz extends PureComponent {
  state = {
    started: false,
  };

  startQuiz = () => {
    this.setState({ started: true });
    this.props.selectQuiz(0);
  };

  selectQuiz = (index) => {
    this.props.selectQuiz(index);
  };

  renderCompleted = ({ quizResult, completed, id }) => {
    // const token = localStorage.getItem('token');
    const { goToCourse } = this.props;
    return (
      <div className="tab-container">
        <div className="start-quiz-row">
          <div className="col-12 container-body">
            <div className="start-quiz">
              <h2>
                {quizResult >= 8 || completed
                  ? "Congratulations!"
                  : "Better luck next time!"}
              </h2>
              <h3>
                {quizResult >= 8 || completed
                  ? "You have passed the quiz for this lesson."
                  : "You didn’t pass the quiz for this lesson."}
              </h3>
              <h4>
                {quizResult >= 8 || completed
                  ? `You have answered ${quizResult} out of 10 questions correctly.`
                  : "You need to answer at least 8 questions to pass this quiz."}
              </h4>
              {quizResult >= 8 || completed ? (
                // <a
                //   className="btn blue rounded update-btn"
                //   style={{
                //     marginTop: '40px',
                //     backgroundColor: 'white',
                //     border: '1px solid #28b5f4',
                //     color: '#28b5f4'
                //   }}
                //   // href={`https://prescriptionrevision.com/api/v1/pdfs/${id}?token=${token}`}
                //   target='_blank'
                // >
                //   View CPD Cert
                // </a>
                <button onClick={goToCourse} className={`start-quiz-btn`}>
                  <span className="start-quiz-btn-text">
                    {"Go back to course"}
                  </span>
                </button>
              ) : (
                <button className={`start-quiz-btn`} onClick={this.startQuiz}>
                  <span className="start-quiz-btn-text">
                    {"try one more time"}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderQuestions = ({
    answer,
    selectedQuiz,
    quiz,
    onAnswerEdit,
    onNextQuestion,
    submitAnswers,
  }) => {
    const { started } = this.state;

    return !started ? (
      <div className="tab-container">
        <div className="start-quiz-row">
          <div className="col-12 container-body">
            <div className="start-quiz">
              <button onClick={this.startQuiz} className="start-quiz-btn">
                <span className="start-quiz-btn-text">Take the Quiz</span>
              </button>
              <p>You need to answer 8 out of 10 questions to pass the test.</p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="tab-container">
        {quiz.image && quiz.image.url && (
          <div
            className="quiz_image"
            style={{
              backgroundImage:
                "url(" + config.REACT_APP_ROOT + quiz.image.url + ")",
            }}
          ></div>
        )}
        {quiz && (
          <div className="inprogress-quiz-row">
            <div className="col-12 container-body">
              <div className="inprogress-quiz">
                <div className={`progress-bar n${selectedQuiz + 1}`}>
                  <button
                    disabled={selectedQuiz < 0}
                    onClick={() => this.selectQuiz(0)}
                    className="section"
                  ></button>
                  <button
                    disabled={selectedQuiz < 1}
                    onClick={() => this.selectQuiz(1)}
                    className="section"
                  ></button>
                  <button
                    disabled={selectedQuiz < 2}
                    onClick={() => this.selectQuiz(2)}
                    className="section"
                  ></button>
                  <button
                    disabled={selectedQuiz < 3}
                    onClick={() => this.selectQuiz(3)}
                    className="section"
                  ></button>
                  <button
                    disabled={selectedQuiz < 4}
                    onClick={() => this.selectQuiz(4)}
                    className="section"
                  ></button>
                  <button
                    disabled={selectedQuiz < 5}
                    onClick={() => this.selectQuiz(5)}
                    className="section"
                  ></button>
                  <button
                    disabled={selectedQuiz < 6}
                    onClick={() => this.selectQuiz(6)}
                    className="section"
                  ></button>
                  <button
                    disabled={selectedQuiz < 7}
                    onClick={() => this.selectQuiz(7)}
                    className="section"
                  ></button>
                  <button
                    disabled={selectedQuiz < 8}
                    onClick={() => this.selectQuiz(8)}
                    className="section"
                  ></button>
                  <button
                    disabled={selectedQuiz < 9}
                    onClick={() => this.selectQuiz(9)}
                    className="section"
                  ></button>
                </div>
                <p className="question">{quiz.question}</p>
                <div className="row justify-content-center">
                  <RadioButtonGroup
                    name="correct"
                    onChange={onAnswerEdit}
                    value={answer[quiz.id] || ""}
                    className="quiz-answers"
                  >
                    <FormControlLabel
                      value="true"
                      control={<RadioButton id={quiz.id} />}
                      label="TRUE"
                    />
                    <FormControlLabel
                      value="false"
                      control={<RadioButton id={quiz.id} />}
                      label="FALSE"
                    />
                  </RadioButtonGroup>
                </div>
                <div className="row justify-content-center">
                  <button
                    disabled={!answer[quiz.id]}
                    onClick={
                      selectedQuiz === 9 ? submitAnswers : onNextQuestion
                    }
                    className={`start-quiz-btn ${
                      !answer[quiz.id] ? "start-quiz-btn-disabled" : ""
                    }`}
                  >
                    <span className="start-quiz-btn-text">
                      {selectedQuiz === 9 ? "Submit" : "Next question"}
                    </span>
                  </button>
                </div>
                <div className="row justify-content-center">
                  <span className="pass-hint">
                    You need to answer 8 out of 10 questions to pass the test
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  render() {
    return this.props.completed ||
      this.props.quizResult ||
      this.props.quizResult === 0
      ? this.renderCompleted(this.props)
      : this.renderQuestions(this.props);
  }
}

export default Quiz;
