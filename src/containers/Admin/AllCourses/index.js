import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import StaticPage from '../../../components/StaticPage'
import headerData from '../../../constants/navData'
import { getCategoriesAction, deleteCategoryAction } from '../actions'
import CourseListItem from './components/CourseListItem'

const AllCourses = ({ getCategories, onDelete, courses, letters }) => {

    const [sortedCategories, setSortedCategories] = useState([]);

    useEffect(() => {
        getCategories()
    }, [])

    const handlerDelete = async (id) => {
        await onDelete(id).then(() => {
            getCategories()
        })
    }

    return (
        <StaticPage pageClass='all_courses topics' headerData={headerData.admin}>
            <div className='container'>
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
                                            handlerDelete={handlerDelete}
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
        </StaticPage>
    )
}

const mapDispatchToProps = (dispatch) => ({
    getCategories: () => dispatch(getCategoriesAction()),
    onDelete: (id) => dispatch(deleteCategoryAction(id)),
    //successNotification: (message) => dispatch(successNotificationAction(message))
})

const mapStateToProps = ({ admin: { courses, letters } }) => ({
    courses,
    letters
});

AllCourses.propTypes = {
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCourses)
