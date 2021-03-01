import React from 'react'
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTE_PASSWORD_RECOVERY, routeToCreateAccount } from '../constants/routes.js';

const LoginForm = ({ onFormSubmit, reqErrors }) => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => onFormSubmit(data);

    return (
        <div>
            <h3 className='formName'>LOG IN</h3>
            <p className='formSubname'>to your account</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='field_input w-full'
                    name="email"
                    ref={register({ required: true })}
                    placeholder='Your Email'
                />
                {errors && errors.email && <span className='error'>This field is required</span>}
                {reqErrors && reqErrors.email && reqErrors.email.length > 0 && reqErrors.email.map((error) => <span className='error'>{error}<br /></span>)}

                <input
                    className='field_input w-full'
                    name="password"
                    type="password"
                    ref={register({ required: true })}
                    placeholder='Your Password'
                />
                {errors && errors.password && <span className='error'>This field is required</span>}
                {reqErrors && reqErrors.password && reqErrors.password.length > 0 && reqErrors.password.map((error) => <span className='error'>{error}<br /></span>)}

                {reqErrors && reqErrors.error_message && <span className='error'>{reqErrors.error_message}</span>}
                
                {/* <p className='formTip'>Must be minimum 6 characters long, with at least one capital letter and one number.</p> */}
                
                <button type="submit" className="button fill w-full">LOGIN</button>
                <Link to={routeToCreateAccount('new')} className='create_acc_link'>Don’t have an account?</Link>
                <Link to={ROUTE_PASSWORD_RECOVERY} className='create_acc_link'>Forgot your password?</Link>
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

LoginForm.propTypes = {
}

export default connect(mapStateToProps, null)(LoginForm)