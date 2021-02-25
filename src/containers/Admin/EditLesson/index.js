import React, { useEffect, Component } from 'react'
import { connect } from 'react-redux'
import StaticPage from '../../../components/StaticPage'
import headerData from '../../../constants/navData'
import { getLessonAction, addLessonAction, editLessonAction } from '../actions'
import { errorNotificationAction, successNotificationAction } from '../../Notifications/actions'
import history from '../../../history'
import { Link } from 'react-router-dom'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { routeToCourseEdit } from '../../../constants/routes'
import InputWithEditor from './components/InputWithEditor'
import VideoForm from './components/VideoForm'
import QuizForm from './components/QuizForm'
import _ from 'lodash'
import config from '../../../config';


class EditLesson extends Component {
    state = {
        lesson: {
            title: '',
            description: '',
            topic: '',
            category_id: null,
            tutorial_videos_attributes: [
                {
                    title: '',
                    description: '',
                    video_url: ''
                }
            ],
            spd_quizzes_attributes: [
                {
                    question: '',
                    correct: true
                },
                {
                    question: '',
                    correct: true
                },
                {
                    question: '',
                    correct: true
                },
                {
                    question: '',
                    correct: true
                },
                {
                    question: '',
                    correct: true
                },
                {
                    question: '',
                    correct: true
                },
                {
                    question: '',
                    correct: true
                },
                {
                    question: '',
                    correct: true
                },
                {
                    question: '',
                    correct: true
                },
                {
                    question: '',
                    correct: true
                }
            ],
            attachments_attributes: [
            ],
            attachments_files: []
        },
        errors: null,
        quillRef: null
    };

    setQuillRef = (el) => {
        this.setState({
            quillRef: el
        })
    }

    componentWillMount() {
        const { course_id, id } = this.props.match.params
        const { lesson } = this.state;
        if (id && id != 'new') {
            this.props.getLesson(id)
                .then((res) => {
                    if (res.value.data && _.get(res, 'action.payload.data.data.tutorial')) {
                        const responseData = res.action.payload.data.data.tutorial
                        const data = {
                            ...responseData,
                            attachments_attributes: [],
                            attachments_files: responseData.attachments_attributes,
                            tutorial_videos_attributes: responseData.tutorial_videos_attributes.length == 0 ? [{ title: '', description: '', video_url: '' }] : responseData.tutorial_videos_attributes,
                            spd_quizzes_attributes: responseData.spd_quizzes_attributes.length == 0 ? [
                                {
                                    question: '',
                                    correct: true
                                },
                                {
                                    question: '',
                                    correct: true
                                },
                                {
                                    question: '',
                                    correct: true
                                },
                                {
                                    question: '',
                                    correct: true
                                },
                                {
                                    question: '',
                                    correct: true
                                },
                                {
                                    question: '',
                                    correct: true
                                },
                                {
                                    question: '',
                                    correct: true
                                },
                                {
                                    question: '',
                                    correct: true
                                },
                                {
                                    question: '',
                                    correct: true
                                },
                                {
                                    question: '',
                                    correct: true
                                }
                            ] : responseData.spd_quizzes_attributes

                        }
                        this.setState({
                            lesson: data
                        })
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        this.setState({
            lesson: {
                ...lesson,
                category_id: course_id,
            },
        })
    }

    handleChange = (key, value) => {
        const { lesson } = this.state;

        this.setState({
            lesson: {
                ...lesson,
                [key]: value,
            },
        })

    };

    handleChangeTopic = (value) => {
        const { lesson } = this.state;

        this.setState({
            lesson: {
                ...lesson,
                topic: value,
            },
        })
    }

    handleVideochange = (index, key, val) => {
        const { lesson } = this.state;
        let videos = lesson.tutorial_videos_attributes
        videos[index][key] = val

        this.setState({
            lesson: {
                ...lesson,
                tutorial_videos_attributes: videos,
            },
        })

    }

    handleQuizchange = (index, key, val) => {
        const { lesson } = this.state;
        let quizes = lesson.spd_quizzes_attributes
        quizes[index][key] = val

        this.setState({
            lesson: {
                ...lesson,
                spd_quizzes_attributes: quizes,
            },
        })

    }

    tabSwitch = (element, target) => {
        let activeEl = document.querySelector('.tab_switcher.active')
        activeEl.classList.remove('active')
        element.classList.add('active')

        let activetarget = document.querySelector('.tab.active')
        activetarget.classList.remove('active')
        let targetEl = document.getElementById(target)
        targetEl.classList.add('active')

    }


    pushVideo = () => {
        const { lesson } = this.state;
        let newVideos = [
            ...lesson.tutorial_videos_attributes,
            {
                title: '',
                description: '',
                video_url: ''
            }
        ]
        this.setState({
            lesson: {
                ...lesson,
                tutorial_videos_attributes: newVideos
            }
        })
    }
    changeAttachmentHandler = (file) => {
        //onAvaSubmit(img)
        const { lesson } = this.state
        let files = lesson.attachments_attributes
        files.push(file[0])
        this.setState({
            lesson: {
                ...lesson,
                attachments_attributes: files,
                attachments_files: [
                    ...lesson.attachments_files,
                    { document: { url: '#' } }
                ]
            }
        })
    }

    deleteAttachmentHandler = async (id, index) => {
        const lessonId = this.props.match.params.id
        const { editLesson, successNotification } = this.props


        //Existing doc
        if (id) {
            let formData = new FormData();
            formData.append('attachments_attributes[]id', id)
            formData.append('attachments_attributes[]_destroy', true)

            await editLesson(lessonId, formData).then((res) => {
                const lessonId = _.get(res, 'action.payload.data.data.tutorial.id')
                if (res.value.status == 200 && lessonId) {
                    successNotification('Lesson was saved.')
                    window.location.reload()
                }
            })
        } else {
            //Local state
            const { lesson } = this.state
            let files = lesson.attachments_attributes
            let attachedList = lesson.attachments_files
            files.splice(index, 1);
            attachedList.splice(index, 1);

            this.setState({
                lesson: {
                    ...lesson,
                    attachments_attributes: files,
                    attachments_files: attachedList
                }
            })
        }

    }

    handleSubmit = async () => {
        const { lesson, errors } = this.state;
        const { addLesson, editLesson, successNotification, errorNotification } = this.props
        const { course_id, id } = this.props.match.params
        let errorsArr = []

        let formData = new FormData();

        let filteredVideos = lesson.tutorial_videos_attributes.filter((video) => video.title && video.video_url)

        let isQuizFull = lesson.spd_quizzes_attributes.every((el) => {
            return el.question
        })
        let isVideosIsValid = lesson.tutorial_videos_attributes.every((el) => {
            return el.title && el.video_url
        })
        if (!lesson.title) {
            errorsArr.push('Title is required.')
        }
        if (!lesson.topic) {
            errorsArr.push('Topic is required.')
        }
        let data = {
            ...lesson,
            tutorial_videos_attributes: filteredVideos,
            spd_quizzes_attributes: !isQuizFull ? [] : lesson.spd_quizzes_attributes
        }

        _.mapKeys(data, (value, key) => {
            if (key === 'spd_quizzes_attributes') {
                value.forEach(el => {
                    _.mapKeys(el, (valueQuestion, keyQuestion) => {
                        formData.append('spd_quizzes_attributes[]' + keyQuestion, valueQuestion)
                    })
                })
            }
            else if (key === 'tutorial_videos_attributes') {
                value.forEach(el => {
                    _.mapKeys(el, (value, key) => {
                        formData.append('tutorial_videos_attributes[]' + key, value)
                    })
                })
            }
            else if (key === 'attachments_attributes') {
                value.forEach(el => {
                    formData.append('attachments_attributes[]document', el)
                })
            }
            else {
                formData.append(key, value);
            }
        });


        if (!isQuizFull) {
            errorsArr.push('Please, add 10 quizes.')
        }
        // if (!isVideosIsValid) {
        //     errorsArr.push("Please, add video.")
        // }

        if (errorsArr.length > 0) {
            errorsArr.map((error) => {
                errorNotification(error)
            })
            return false
        } else {
            if (id && id != 'new') {
                await editLesson(id, formData).then((res) => {
                    const lessonId = _.get(res, 'action.payload.data.data.tutorial.id')
                    if (res.value.status == 200 && lessonId) {
                        successNotification('Lesson was saved.')
                        history.push(routeToCourseEdit(course_id))
                    }
                })
            }
            else {
                await addLesson(formData).then((res) => {
                    const lessonId = _.get(res, 'action.payload.data.data.tutorial.id')
                    if (res.value.status == 201 && lessonId) {
                        successNotification('Lesson was created.')
                        history.push(routeToCourseEdit(course_id))
                    }
                })
            }
        }

    };

    render() {
        const { course_id, id } = this.props.match.params
        const { lesson } = this.state;
        const { inProcess } = this.props

        return (
            <StaticPage pageClass='edit_lesson' headerData={headerData.admin}>
                <div className='container'>

                    <div className='lesson_action_buttons row justify-between align-center'>
                        <Link to={routeToCourseEdit(course_id)}>Back</Link>
                        <div>
                            <Link to={routeToCourseEdit(course_id)} className='alertColor'>Cancel</Link>
                            {!inProcess ? (
                                <button disabled={inProcess} onClick={this.handleSubmit}>{id && id !== 'new' ? 'Save' : 'Add'} lesson</button>
                            ) : (
                                    <button disabled >Loading...</button>
                                )}
                        </div>
                    </div>

                    <div className='edit_lesson_name'>
                        <p className='edit_lesson_headline'>{id && id !== 'new' ? 'Edit' : 'Adding'} lesson</p>
                        <div className='edit_lesson_title_wrapper'>
                            <input
                                type='text'
                                className='edit_lesson_title'
                                value={lesson.title}
                                onChange={(e) => this.handleChange('title', e.target.value)}
                                placeholder='Enter lesson title...'
                            />
                        </div>
                    </div>

                    <div className='row justify-center align-center tabs_btns'>
                        <button type='button' className='tab_switcher active' onClick={(e) => { this.tabSwitch(e.target, 'topic') }}> Topic</button>
                        <button type='button' className='tab_switcher' onClick={(e) => { this.tabSwitch(e.target, 'video') }}> Video</button>
                        <button type='button' className='tab_switcher' onClick={(e) => { this.tabSwitch(e.target, 'quiz') }}> Quiz</button>
                    </div>

                    <div className='tab active' id='topic'>
                        <InputWithEditor setQuillRef={this.setQuillRef} value={lesson.topic} handleChange={this.handleChangeTopic} />
                        <div className='attachemnts_wrapper'>
                            <p>Attachments:</p>
                            {lesson.attachments_files ? (
                                <div>
                                    {lesson.attachments_files.map((item, index) => {
                                        return <div className='row align-center' key={index}><a className='attachment_link' href={config.REACT_APP_ROOT + item.document.url} target='_blank'>Document {index + 1}</a> <span className='delete_doc' onClick={() => this.deleteAttachmentHandler(item.id, index)}>X</span></div>
                                    })}
                                </div>
                            ) : null}
                            {
                                lesson.attachments_files && lesson.attachments_files.length < 3 ? (
                                    <div>
                                        <input onChange={(e) => this.changeAttachmentHandler(e.target.files)} id='attachment_add' className='attachment_input' type='file' accept="application/pdf, application/vnd.ms-excel" />
                                        <label className='attachment_label' htmlFor='attachment_add'>
                                            <span className='row align-center'>
                                                <AttachFileIcon />
                                                <span>+ Add file</span>
                                            </span>
                                        </label>
                                    </div>
                                ) : (
                                        <p className='error'>Maximum 3 files.</p>
                                    )
                            }
                        </div>
                    </div>

                    <div className='tab' id='video'>
                        <p className='tab_header'>Add Video Tutorial</p>
                        {lesson.tutorial_videos_attributes && lesson.tutorial_videos_attributes.map((item, index) => {
                            return <div className='video_form_wrapper' key={index}> <VideoForm video={item} index={index} handleChange={this.handleVideochange} /> </div>
                        })}
                        <button onClick={() => this.pushVideo()} type='button' className='add_video_btn row align-center'> <span>+</span> Add one more video</button>
                    </div>

                    <div className='tab' id='quiz'>
                        <p className='tab_header'>Add Quiz</p>
                        {lesson.spd_quizzes_attributes && lesson.spd_quizzes_attributes.map((item, index) => {
                            return <div className='quiz_form_wrapper' key={index}> <QuizForm item={item} index={index} key={index} handleChange={this.handleQuizchange} /> </div>
                        })}
                    </div>
                </div>
            </StaticPage>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getLesson: (id) => dispatch(getLessonAction(id)),
    addLesson: (data) => dispatch(addLessonAction(data)),
    editLesson: (id, data) => dispatch(editLessonAction(id, data)),
    successNotification: (message) => dispatch(successNotificationAction(message)),
    errorNotification: (message) => dispatch(errorNotificationAction(message)),

})

const mapStateToProps = ({ admin }) => {
    const data = {
        lesson: admin.lesson,
        inProcess: admin.inProcess
    }
    return data
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLesson)
