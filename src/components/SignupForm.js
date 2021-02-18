import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTE_TO_LOGIN } from '../constants/routes.js';

const SignupForm = ({ onFormSubmit, reqErrors }) => {

    const [submitDisabled, setSubmitDisabled] = useState(true);

    const { register, handleSubmit, getValues, errors } = useForm();

    const onSubmit = data => onFormSubmit(data);

    return (
        <div>
            <h3 className='formName'>Create an account</h3>
            <p className='formSubname'>Get started absolutely free</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='field_input w-full'
                    name="first_name"
                    ref={register({ required: true })}
                    placeholder='Firstname'
                />
                {errors.first_name && <span className='error'>This field is required</span>}
                {reqErrors.first_name && reqErrors.first_name.length > 0 && reqErrors.first_name.map((error) => <span className='error'>{error}<br /></span>)}

                <input
                    className='field_input w-full'
                    name="last_name"
                    ref={register({ required: true })}
                    placeholder='Surname'
                />
                {errors.last_name && <span className='error'>This field is required</span>}
                {reqErrors.last_name && reqErrors.last_name.length > 0 && reqErrors.last_name.map((error) => <span className='error'>{error}<br /></span>)}

                <input
                    className='field_input w-full'
                    name="email"
                    ref={register({
                        required: true,
                        pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                        validate: (value) => {
                            console.log("SignupForm -> value", value)
                            const repeatEmailVal = getValues('email_repeat');
                            return value === repeatEmailVal;
                        }
                    })
                    }
                    placeholder='Email'
                />
                {errors.email && <span className='error'>Please enter a valid email address</span>}
                {reqErrors.email && reqErrors.email.length > 0 && reqErrors.email.map((error) => <span className='error'>{error}<br /></span>)}

                <input
                    className='field_input w-full'
                    name="email_repeat"
                    ref={register({
                        required: true,
                        pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                        validate: (value) => {
                            const emailVal = getValues('email');
                            return value === emailVal;
                        }
                    })}
                    placeholder='Repeat Email'
                />
                {errors.email_repeat && <span className='error'>Please enter a valid email address</span>}

                <input
                    className='field_input w-full'
                    name="password"
                    type="password"
                    ref={register({ required: true })}
                    placeholder='Password'
                />
                {errors.password && <span className='error'>This field is required</span>}
                {reqErrors.password && reqErrors.password.length > 0 && reqErrors.password.map((error) => <span className='error'>{error}<br /></span>)}

                <p className='formTip'>
                    <input type='checkbox' id='agree' onChange={() => setSubmitDisabled(!submitDisabled)} />

                    <label for='agree'>
                        <span className='custom_check'></span>
                        I agree with Terms and Privacy Policy
                    </label>
                </p>

                <button type="submit" disabled={submitDisabled} className="button fill w-full">SIGN UP</button>
                <Link to={ROUTE_TO_LOGIN} className='create_acc_link'>I have already account.</Link>
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

SignupForm.propTypes = {
}

export default connect(mapStateToProps, null)(SignupForm)