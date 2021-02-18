import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import StaticPage from '../../../components/StaticPage'
import headerData from '../../../constants/navData'
import {
    getCategoryAction,
    deleteCategoryAction,
    editCategoryAction,
    deleteLessonAction
} from '../actions'
import { ROUTE_TO_ADMIN_COURSES } from '../../../constants/routes'
import history from '../../../history'
import EditCourseForm from './components/EditCourseForm'


const EditCourse = ({ match, getCategory, onDelete, onEdit, onLessonDelete }) => {

    const { id } = match.params
    const [category, setCategory] = useState({})

    useEffect(() => {
        if (id) {
            getCategory(id)
                .then((res) => {
                    if (res.value && res.value.data.data.category) {
                        setCategory(res.value.data.data.category)
                    }
                })
        }
    }, [id])

    const handlerDelete = async (id) => {
        await onDelete(id).then(() => {
            history.push(ROUTE_TO_ADMIN_COURSES)
        })
    }

    const handlerLessonDelete = async (id) => {
        await onLessonDelete(id).then((res) => {
            if (res.value && res.value.status == 200) {
                if (match.params.id) {
                    getCategory(match.params.id)
                        .then((res) => {
                            if (res.value && res.value.data.data.category) {
                                setCategory(res.value.data.data.category)
                            }
                        })
                }

            }
        })
    }

    const onFormSubmit = async (values) => {
        await onEdit(id, values)
            .then((res) => {
                history.push(ROUTE_TO_ADMIN_COURSES)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <StaticPage pageClass='edit_course' headerData={headerData.admin}>
            <div className='container'>
                {category && category.id && <EditCourseForm handlerLessonDelete={handlerLessonDelete} onFormSubmit={onFormSubmit} handlerDelete={handlerDelete} category={category} />}
            </div>
        </StaticPage>
    )
}

const mapDispatchToProps = (dispatch) => ({
    getCategory: (id) => dispatch(getCategoryAction(id)),
    onDelete: (id) => dispatch(deleteCategoryAction(id)),
    onEdit: (id, data) => dispatch(editCategoryAction(id, data)),
    onLessonDelete: (id) => dispatch(deleteLessonAction(id)),
})

// const mapStateToProps = ({ admin }) => {
//     const data = {
//         category: admin.category
//     }
//     return data
// }

export default connect(null, mapDispatchToProps)(EditCourse)
