import React from 'react'
import Link from 'gatsby-link'
import Quotes from './quotes.json'

class IndexPage extends React.Component {
		constructor() {
				super();
				this.state = {
						quotes: Quotes[Math.floor((Math.random() * Quotes.length))]
				}
		}
		render() {
				return (
						<div>
								<div className="row section section--banner transparent p-b-0">
										<div className="container text-center">
												<div className="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
														<h1 className="heading">May we help you?
														</h1>
														<h6 className="text m-b-2">
																We help companies to build applications, products, and services from design to
																development with solution-by-design and human-centered approach.
														</h6>
														<a href="#" className="btn btn--orange animate--arrow-right hover--swipe-left">
																GET IN TOUCH
																<span className="arrow"></span>
														</a>
												</div>
										</div>
								</div>
								<div className="row section transparent">
										<div className="container">
												<div className="col-xs-12">
														<a href="" className="hunk hunk--small hunk--left">
																<div className="hunk__inner">
																		<img src="/images/aslan.png" className="hunk__img" alt="Application Aslan"/>
																		<div className="hunk__label">
																				<p className="sub">Application
																				</p>
																				<p className="content">Aslan
																				</p>
																		</div>
																</div>
														</a>
														<a href="" className="hunk hunk--medium hunk--v-strecth-2 pull-right">
																<div className="hunk__inner">
																		<img
																				src="images/labanfarma.png"
																				className="hunk__img"
																				alt="Project Laban Farma"/>
																		<div className="hunk__label">
																				<p className="sub">Project
																				</p>
																				<p className="content">Laban Farma
																				</p>
																		</div>
																</div>
														</a>
														<a href="" className="hunk hunk--small">
																<div className="hunk__inner">
																		<img src="/images/nawarin.png" className="hunk__img" alt="Project Nawar.in"/>
																		<div className="hunk__label">
																				<p className="sub">Project
																				</p>
																				<p className="content">Nawar.in
																				</p>
																		</div>
																</div>
														</a>
												</div>
										</div>
								</div>
								<div className="row section section--services text-center border-b-grey">
										<div className="container">
												<div className="col-sm-10 col-sm-offset-1">
														<h4 className="heading">Services
														</h4>
														<h6 className="text m-b-2">
																Deliver great services is our main priority. User experience is our resource and
																design is our way to build user-centered products
														</h6>
												</div>
												<div className="clearfix"></div>
												<div className=" col-sm-12 m-t-2 m-b-2">
														<div className="col-sm-6 col-md-3 text-center m-b-2 items">
																<div className="item__img-wrapper circle">
																		<img
																				src="images/web.svg"
																				className="img-responsive center-block"
																				alt="Web Development"/>
																</div>
																<div className="item__text">
																		Web Development
																</div>
														</div>
														<div className="col-sm-6 col-md-3 text-center m-b-2 items">
																<div className="item__img-wrapper circle">
																		<img
																				src="images/mobile.svg"
																				className="img-responsive"
																				alt="Mobile Application Development"/>
																</div>
																<div className="item__text">
																		Mobile Application Development
																</div>
														</div>
														<div className="col-sm-6 col-md-3 text-center m-b-2 items">
																<div className="item__img-wrapper circle">
																		<img src="/images/product.svg" className="img-responsive" alt="Product Design"/>
																</div>
																<div className="item__text">
																		Product Design
																</div>
														</div>
														<div className="col-sm-6 col-md-3 text-center m-b-2 items">
																<div className="item__img-wrapper circle">
																		<img
																				src="images/workshop.svg"
																				className="img-responsive"
																				alt="Workshop & Seminar"/>
																</div>
																<div className="item__text">
																		Workshop & Seminar
																</div>
														</div>
												</div>
												<div className="clearfix"></div>
												<div className="col-xs-12 technologies m-t-1">
														<h5 className="heading">Technologies and tools that we use to build great products
														</h5>
														<a href="#" data-toggle="tooltip" data-placement="top" title="Sketch">
																<img src="/images/sketch.png" alt="Sketch"/>
														</a>
														<a href="#" data-toggle="tooltip" data-placement="top" title="Adobe Photoshop">
																<img src="/images/ps.png" alt="Adobe Photoshop"/>
														</a>
														<a href="#" data-toggle="tooltip" data-placement="top" title="Adobe Ilustrator">
																<img src="/images/ai.png" alt="Adobe Ilustrator"/>
														</a>
														<a href="#" data-toggle="tooltip" data-placement="top" title="Android Studio">
																<img src="/images/android-studio.png" alt="Android Studio"/>
														</a>
														<a href="#" data-toggle="tooltip" data-placement="top" title="Laravel">
																<img src="/images/laravel.png" alt="Laravel"/>
														</a>
														<a href="#" data-toggle="tooltip" data-placement="top" title="Vue.js">
																<img src="/images/vuejs.png" alt="Vue.js"/>
														</a>
														<a href="#" data-toggle="tooltip" data-placement="top" title="React.js">
																<img src="/images/react.png" alt="React.js"/>
														</a>
														<a href="#" data-toggle="tooltip" data-placement="top" title="Zeplin">
																<img src="/images/zeplin.png" alt="Zeplin"/>
														</a>
														<a href="#" data-toggle="tooltip" data-placement="top" title="Node JS">
																<img src="/images/nodejs.png" alt="Node JS"/>
														</a>
														<a href="#" data-toggle="tooltip" data-placement="top" title="Docker">
																<img src="/images/docker.png" alt="Docker"/>
														</a>
												</div>
										</div>
								</div>
								<div
										className="row section section--quotes text-center border-b-grey"
										id="indexQuotes">
										<div className="container">
												<div className="col-sm-12">
														<blockquote>
																{this.state.quotes.quote}
														</blockquote>
														<p className="profil">
																<img src={this.state.quotes.img} alt="image"/> {this.state.quotes.name}, {this.state.quotes.role}
														</p>
												</div>
										</div>
								</div>
						</div>
				)
		}
}

export default IndexPage
