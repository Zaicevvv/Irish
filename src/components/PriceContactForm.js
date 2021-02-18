import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTE_TO_LOGIN } from '../constants/routes.js';

const PriceContactForm = ({ onFormSubmit, reqErrors }) => {


    const { register, handleSubmit, getValues, errors } = useForm();

    const onSubmit = data => onFormSubmit(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    className='field_input w-full'
                    name="full_name"
                    ref={register({ required: true })
                    }
                    placeholder='Your name'
                />
                {errors.full_name && <span className='error'>Please enter your name</span>}

                <input
                    className='field_input w-full'
                    name="email"
                    ref={register({
                        required: true,
                        pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    })
                    }
                    placeholder='Your email'
                />
                {errors.email && <span className='error'>Please enter a valid email address</span>}
                <textarea
                    className='field_input w-full'
                    name="message"
                    ref={register({ required: true })
                    }
                    placeholder='Comments' />

                {reqErrors.error_message ? (<span className='error'>{reqErrors.error_message}</span>) : null}

                <button type="submit" className="button fill">SUBMIT</button>
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

PriceContactForm.propTypes = {
}

export default connect(mapStateToProps, null)(PriceContactForm)