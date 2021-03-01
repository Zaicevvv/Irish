import React from 'react'
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AvatarUpload from './AvatarUpload'

const ProfileForm = ({ onFormSubmit, reqErrors, user }) => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        onFormSubmit(data);
    }
    const onAvaSubmit = (img = {}) => {
        let body = new FormData();
        if (img && typeof img === 'object') {
            body.append('[user][avatar]', img[0]);
        }
        onFormSubmit(body)
    }

    return (
        <div>
            <h3 className='formName'>My Profile</h3>
            <AvatarUpload onAvaSubmit={onAvaSubmit} avatar={user && user.avatar.thumb.url} />

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='field_input w-full'
                    name="first_name"
                    defaultValue={user && user.first_name}
                    ref={register({ required: true })}
                    placeholder='First Name'
                />
                {reqErrors.first_name && reqErrors.first_name.length > 0 && reqErrors.first_name.map((error) => <span className='error'>{error}<br /></span>)}

                <input
                    className='field_input w-full'
                    name="last_name"
                    defaultValue={user && user.last_name}
                    ref={register({ required: true })}
                    placeholder='Last Name'
                />
                {reqErrors.last_name && reqErrors.last_name.length > 0 && reqErrors.last_name.map((error) => <span className='error'>{error}<br /></span>)}

                <p className='formSeparator'>Change password</p>
                <input
                    className='field_input w-full'
                    name="old_password"
                    type="password"
                    ref={register({ required: false })}
                    placeholder='Old Password'
                />
                <input
                    className='field_input w-full'
                    name="password"
                    type="password"
                    ref={register({ required: false })}
                    placeholder='New Password'
                />
                {errors.password && <span className='error'>This field is required</span>}
                {reqErrors.password && reqErrors.password.length > 0 && reqErrors.password.map((error) => <span className='error'>{error}<br /></span>)}

                <p className='formTip'>Must be minimum 6 characters long, with at least one capital letter and one number.</p>

                <button type="submit" className="button fill w-full">Save Changes</button>
            </form>
        </div>
    )
}

const mapStateToProps = ({ auth }) => {
    const data = {
        user: auth.user,
        reqErrors: auth.errors
    }
    return data
}

ProfileForm.propTypes = {
}

export default connect(mapStateToProps, null)(ProfileForm)