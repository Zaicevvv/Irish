import React from 'react'
import FloatIcons from '../../../components/FloatIcons'
import { Link } from 'react-router-dom'
import { ROUTE_TO_LOGIN, routeToCreateAccount } from '../../../constants/routes.js';

import heroLogo from '../../../assets/images/dest/logo.svg'
const Hero = () => {
    return (
        <section className="hero row justify-center align-center">
            <div className="container">
                <div className="hero_content">
                    <h3 className="hero_subheader gradient-text">
                        STEMBook
                </h3>
                    <h1 className="hero_header">
                        Guiding you through
                    <img src={heroLogo} className='img_responsive hero_logo' alt='STEM' />
                    </h1>
                    <p className="hero_descr">
                        STEM (science,technology,engineering and math) education is the gateway to 21st century success, forming foundations for critical thinking, creativity, innovation and curiosity. More than ever it is essential for young people  to possess the ability and skills to solve complex problems, analyse information, and know how to gather and evaluate evidence to make decisions.
                </p>
                    <div className="row hero_actions justify-center">
                        <Link to={ROUTE_TO_LOGIN} className="button fill mr-10">SIGN IN</Link>
                        <Link to={routeToCreateAccount('new')} className="button empty">SIGN UP</Link>
                    </div>
                </div>
            </div>
            <FloatIcons />
        </section>
    )
}


export default Hero