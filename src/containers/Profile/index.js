import React from 'react'
import { connect } from 'react-redux'
import StaticPage from '../../components/StaticPage'
import headerData from '../../constants/navData'
import FloatIcons from '../../components/FloatIcons'
import ProfileFormWrapper from '../../components/ProfileFormWrapper'
import Profileform from '../../components/ProfileForm'
import { updateUserAction } from './actions'
import { errorNotificationAction, successNotificationAction } from '../Notifications/actions'

const Profile = ({ onSubmit, successNotification }) => {

    const onUpdateHandler = (values) => {

        onSubmit({ user: values })
            .then((res) => {
                if (res.value.status == 200) {
                    successNotification('Saved!');
                    //window.location.reload();
                }
            })

    }

    return (
        <StaticPage pageClass='profile' headerData={headerData.autorized}>
            <ProfileFormWrapper additionaClassname='profile-form'>
                <Profileform onFormSubmit={onUpdateHandler} />
            </ProfileFormWrapper>
        </StaticPage>
    )
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (data) => dispatch(updateUserAction(data)),
    successNotification: (message) => dispatch(successNotificationAction(message)),
    errorNotification: (message) => dispatch(errorNotificationAction(message))
})

Profile.propTypes = {
}

export default connect(null, mapDispatchToProps)(Profile)
