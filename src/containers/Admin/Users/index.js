import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import StaticPage from '../../../components/StaticPage'
import headerData from '../../../constants/navData'
import UserItem from './components/UserItem'
import Pagination from 'react-paginate'
import history from '../../../history'
import HeaderSearch from './components/HeaderSearch'
import {
    getUsersAction,
    deleteUserAction
} from '../actions'
import { errorNotificationAction, successNotificationAction } from '../../Notifications/actions'

const EditCourse = ({ getUsers, onDelete, users, errorNotification, successNotification, pages, location }) => {

    const [search, setSearch] = useState()
    const [popupShow, setPopupShow] = useState()

    const page = location.search.substr(-1) || 1

    useEffect(() => {
        getUsers({ search: search, page: page })
    }, [search, page])

    const handlerDelete = async (id) => {
        await onDelete(id)
            .then((res) => {
                if (res.value.status == 200) {
                    successNotification('User was deleted.')
                    getUsers()
                    setPopupShow()
                }
            })
            .catch((error) => {
                errorNotification(error)
            })
    }

    const onPageChange = ({ selected }) => {

        history.push(`${history.location.pathname}?page=${+selected + 1}`) // value instead index
    }

    return (
        <StaticPage pageClass='users_list' headerData={headerData.admin}>
            <div className='container'>
                <HeaderSearch onSubmit={getUsers} />
                <table className='users_table'>
                    {users ? (
                        users.map((item, index) => {
                            return <UserItem popupShow={popupShow} setPopupShow={setPopupShow} item={item} index={index} handlerDelete={handlerDelete} />
                        })
                    ) : null
                    }
                </table>
                <div className='pagination'>
                    <Pagination
                        pageCount={pages}
                        pageRangeDisplayed={10}
                        marginPagesDisplayed={1}
                        initialPage={page && page - 1}
                        containerClassName='pagination__list'
                        pageClassName='pagination__list--item'
                        pageLinkClassName='pointer'
                        activeClassName='current'
                        previousClassName='p_prev'
                        nextClassName='p_next'
                        breakClassName='ellipsis inline'
                        previousLabel='<'
                        nextLabel='>'
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
        </StaticPage>
    )
}

const mapDispatchToProps = (dispatch) => ({
    getUsers: (params) => dispatch(getUsersAction(params)),
    onDelete: (id) => dispatch(deleteUserAction(id)),
    successNotification: (message) => dispatch(successNotificationAction(message)),
    errorNotification: (message) => dispatch(errorNotificationAction(message)),

})

const mapStateToProps = ({ admin }) => {
    const data = {
        users: admin.users,
        pages: admin.pages
    }
    return data
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCourse)
