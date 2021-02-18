import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ROUTE_TO_SPONSORSHIP, ROUTE_TO_PRICING, ROUTE_TO_ABOUT_US, ROUTE_TO_CONTACT } from '../../constants/routes';
import Hero from './components/Hero'
import StudyInSystem from './components/StudyInSystem'
import HowItWorks from './components/HowItWorks'
import FeaturedLessons from './components/FeaturedLessons'
import footerImg from '../../assets/images/dest/2@3x.png'
import { connect } from 'react-redux';
import { getCategoriesAction } from './actions'
import StaticPage from '../../components/StaticPage';
import headerData from '../../constants/navData';


const Landing = ({ getCategories, courses, user }) => {

	useEffect(() => {
		getCategories()
	}, [])

	return (
		<StaticPage pageClass='profile' headerData={user && user.id ? headerData.autorized : headerData.general}>
			<Hero />
			<StudyInSystem />
			<div className='how_it_works'>
				<div className="container">
					<h3 className="section_name gradient-text">how it works ?</h3>
					<h4 className="section_header">An online platform designed to equip you with the necessary skills, <br /> knowledge and resources to implement a premium STEM learning experience</h4>
				</div>
			</div>
			<FeaturedLessons courses={courses} />
			<HowItWorks />

			<section className="contact row justify-center align-center">
				<div className="contac_descr">
					<h3 className="section_name gradient-text">keep in touch</h3>
					<h4 className="section_header">Сontact us if you have <br /> any questions</h4>
					<div className="row justify-between">
						<div className="contact_col">
							<p className="contact_label">
								Email us
							</p>
							<a href="mailto:hello@stembook.co" className="contact_val">hello@stembook.co</a>
							<p className="contact_label">
								Phone Numbers
							</p>
							<a href="tel:+353879741227" className="contact_val">Michelle +353879741227</a>
							<a href="tel:+353863179000" className="contact_val">Brendan +353863179000</a>
						</div>

						<div className="contact_col">
							<p className="contact_label">
								Address Details
							</p>
							<p className="contact_val">
								Garrynamann, Kells, Kilkenny, Ireland
							</p>
							<p className="contact_label">
								Our social media
							</p>
							<div className="row flex-start">
								<a href="#" className="soc-icon linked">
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
										<path d="M16 0c1.105 0 2 .895 2 2v14c0 1.105-.895 2-2 2H2c-1.105 0-2-.895-2-2V2C0 .895.895 0 2 0h14m-.5 15.5v-5.3c0-1.8-1.46-3.26-3.26-3.26-.85 0-1.84.52-2.32 1.3V7.13H7.13v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4.773 0 1.4.627 1.4 1.4v4.93h2.79M3.88 5.56c.928 0 1.68-.752 1.68-1.68 0-.93-.75-1.69-1.68-1.69-.933 0-1.69.757-1.69 1.69 0 .93.76 1.68 1.69 1.68m1.39 9.94V7.13H2.5v8.37h2.77z" opacity=".64" />
									</svg>
								</a>
								<a href="#" className="soc-icon facebook">
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
										<path fill="#5C5C5C" d="M15.566 0H2.424C1.086 0 0 1.085 0 2.424v13.142c0 1.34 1.085 2.425 2.424 2.425h6.482l.011-6.43h-1.67c-.217 0-.393-.175-.394-.392l-.008-2.072c-.001-.218.176-.396.394-.396h1.667V6.7c0-2.324 1.42-3.59 3.492-3.59h1.701c.218 0 .394.177.394.395v1.747c0 .218-.176.394-.394.394l-1.044.001c-1.127 0-1.345.536-1.345 1.322V8.7h2.477c.236 0 .419.206.391.44l-.245 2.073c-.024.198-.192.348-.392.348h-2.22l-.011 6.429h3.856c1.34 0 2.425-1.086 2.425-2.425V2.424C17.99 1.085 16.905 0 15.566 0z" />
									</svg>
								</a>
								<a href="#" className="soc-icon instagram">
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
										<g fill="#5C5C5C">
											<path d="M12.616 0H5.353C2.4 0 0 2.401 0 5.353v7.263c0 2.951 2.401 5.352 5.353 5.352h7.263c2.951 0 5.352-2.4 5.352-5.352V5.353C17.968 2.4 15.568 0 12.616 0zm3.545 12.616c0 1.958-1.587 3.545-3.545 3.545H5.353c-1.958 0-3.545-1.587-3.545-3.545V5.353c0-1.958 1.587-3.545 3.545-3.545h7.263c1.958 0 3.545 1.587 3.545 3.545v7.263z" />
											<path d="M8.984 4.337c-2.562 0-4.647 2.085-4.647 4.647 0 2.563 2.085 4.648 4.647 4.648 2.563 0 4.648-2.085 4.648-4.648 0-2.562-2.085-4.647-4.648-4.647zm0 7.487c-1.568 0-2.84-1.271-2.84-2.84 0-1.568 1.272-2.84 2.84-2.84 1.569 0 2.84 1.272 2.84 2.84 0 1.569-1.271 2.84-2.84 2.84z" />
											<circle cx="13.641" cy="4.372" r="1.114" />
										</g>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row align-center justify-center">
					<img src={footerImg} className='contact-section_image' alt='alt' />
				</div>
			</section>
		</StaticPage>
	)
}

const mapDispatchToProps = (dispatch) => ({
	getCategories: () => dispatch(getCategoriesAction()),
})

const mapStateToProps = ({ landing: { courses }, auth: { user } }) => ({
	courses,
	user
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing)

