import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTE_TO_LOGIN } from '../constants/routes.js';

const ChangePasswordForm = ({ onFormSubmit, reqErrors }) => {


    const { register, handleSubmit, getValues, errors } = useForm();

    const onSubmit = data => onFormSubmit(data);

    return (
        <div>
            <h3 className='formName'>Change password</h3>
            <p className='formSubname'>Set a new password</p>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    className='field_input w-full'
                    name="password"
                    type="password"
                    ref={register({
                        required: true,
                        validate: (value) => {
                            const passVal = getValues('password_confirmation');
                            return value === passVal;
                        }
                    })}
                    placeholder='Password'
                />
                {errors.password && <span className='error'>This field is required and values must be equal.</span>}
                {reqErrors.password && reqErrors.password.length > 0 && reqErrors.password.map((error) => <span className='error'>{error}<br /></span>)}

                <input
                    className='field_input w-full'
                    name="password_confirmation"
                    type="password"
                    ref={register({
                        required: true,
                        validate: (value) => {
                            const passVal = getValues('password');
                            return value === passVal;
                        }
                    })}
                    placeholder='Password Confirmation'
                />
                {errors.password_confirmation && <span className='error'>This field is required and values must be equal.</span>}
                {reqErrors.error_message ? (<span className='error'>{reqErrors.error_message}</span>) : null}


                <button type="submit" className="button fill w-full">SUBMIT</button>
            </form>
        </div>
    )
}

const mapStateToProps = ({ auth }) => {
    const data = {
        reqErrors: auth.errors
    }
    return data
}

ChangePasswordForm.propTypes = {
}

export default connect(mapStateToProps, null)(ChangePasswordForm)