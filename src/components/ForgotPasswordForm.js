import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTE_TO_LOGIN } from '../constants/routes.js';

const ForgotPasswordForm = ({ onFormSubmit, reqErrors }) => {


    const { register, handleSubmit, getValues, errors } = useForm();

    const onSubmit = data => onFormSubmit(data);

    return (
        <div>
            <h3 className='formName'>Password recovery</h3>
            <p className='formSubname'>Paste your email below</p>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    className='field_input w-full'
                    name="email"
                    ref={register({
                        required: true,
                        pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    })
                    }
                    placeholder='Email'
                />
                {errors.email && <span className='error'>Please enter a valid email address</span>}
                {reqErrors.error_message ? (<span className='error'>{reqErrors.error_message}</span>) : null}

                <button type="submit" className="button fill w-full">SUBMIT</button>
                <Link to={ROUTE_TO_LOGIN} className='create_acc_link'> Back to login </Link>
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

ForgotPasswordForm.propTypes = {
}

export default connect(mapStateToProps, null)(ForgotPasswordForm)