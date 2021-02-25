import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import StaticPage from '../../../components/StaticPage'
import headerData from '../../../constants/navData'
import FeedbackItem from './components/FeedbackItem'
import {
    getFeedbacksAction,
    deleteFeedbackAction
} from '../actions'
import { errorNotificationAction, successNotificationAction } from '../../Notifications/actions'

const FeedbackList = ({ getFeedbacks, onDelete, feedbacks, errorNotification, successNotification, location }) => {

    const [search, setSearch] = useState()
    const [popupShow, setPopupShow] = useState()

    useEffect(() => {
        getFeedbacks()
    }, [])

    const handlerDelete = async (id) => {
        // await onDelete(id)
        //     .then((res) => {
        //         if (res.value.status == 200) {
        //             successNotification('Testimonial was deleted.')
        //             getFeedbacks()
        //             setPopupShow()
        //         }
        //     })
        //     .catch((error) => {
        //         errorNotification(error)
        //     })
    }

    return (
        <StaticPage pageClass='feedbacks_list' headerData={headerData.admin}>
            <div className='container'>
                <table className='feedbacks_table'>
                    {feedbacks ? (
                        feedbacks.map((item, index) => {
                            return <FeedbackItem popupShow={popupShow} setPopupShow={setPopupShow} item={item} index={index} handlerDelete={handlerDelete} />
                        })
                    ) : null
                    }
                </table>
            </div>
        </StaticPage>
    )
}

const mapDispatchToProps = (dispatch) => ({
    getFeedbacks: (params) => dispatch(getFeedbacksAction(params)),
    // onDelete: (id) => dispatch(deleteFeedbackAction(id)),
    successNotification: (message) => dispatch(successNotificationAction(message)),
    errorNotification: (message) => dispatch(errorNotificationAction(message)),

})

const mapStateToProps = ({ admin }) => {
    const data = {
        feedbacks: admin.feedbacks
    }
    return data
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackList)
