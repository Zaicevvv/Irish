import React from 'react'
import { connect } from 'react-redux'
import StaticPage from '../../../components/StaticPage'
import headerData from '../../../constants/navData'
import CreateCourseForm from './components/CreateCourseForm'
import { createCategoryAction } from '../actions'
import history from '../../../history'
import _ from 'lodash'
import { routeToCourseEdit } from '../../../constants/routes'


const CreateCourse = ({ onSubmit, category, inProcess }) => {
    
    const onFormSubmit = async (values) => {
        await onSubmit(values).then((res) => {
            const courseId = _.get(res, 'action.payload.data.data.category.id')
            if (res.value.status == 201 && courseId) {
                history.push(routeToCourseEdit(courseId))
            }
        })

    }

    return (
        <StaticPage pageClass='create_course' headerData={headerData.admin}>
            <div className='container'>
                <CreateCourseForm onFormSubmit={onFormSubmit} />
            </div>
        </StaticPage>
    )
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (data) => dispatch(createCategoryAction(data)),
    //successNotification: (message) => dispatch(successNotificationAction(message))
})

const mapStateToProps = ({ admin }) => {
    const data = {
        category: admin.category,
        inProcess: admin.inProcess
    }
    return data
}

CreateCourse.propTypes = {
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCourse)
