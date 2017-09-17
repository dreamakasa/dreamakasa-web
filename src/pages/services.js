import React from 'react'
import Link from 'gatsby-link'

const ServicesPage = () => (
  <div>
      	<div className="row section section--banner transparent text-center">
      		<div className="container">
	      		<div className="col-md-10 col-md-offset-1">
			      	<h1 className="heading">What can we help you with?</h1>
			        <h6 className="text">
			        	Deliver great services is our main priority. User experience is our resource and design is our way to build user-centered products.
			        </h6>
		        </div>
	        </div>
	    </div>
	    <div className="row section section--services transparent p-t-0">
      		<div className="container">
	        	<div className="service col-sm-12">
			    	<div className="items media">
					  	<div className="media-left">
							<div className="item__img-wrapper circle">
						   		<img src="images/web.svg" className="img-responsive" alt="Web Development" />
						  	</div>
					  	</div>
					  	<div className="media-body">
						    <h4 className="media-heading item__text">Web Development</h4>
						    <p className="item__sub-text">Wev develop web-based product that able to be used directly on our browser.</p>
					  	</div>
					</div>
				</div>
	        	<div className="service col-sm-12">
			    	<div className="items media">
					  	<div className="media-left">
							<div className="item__img-wrapper circle">
						   		<img src="images/mobile.svg" className="img-responsive" alt="Mobile Application Development" />
						  	</div>
					  	</div>
					  	<div className="media-body">
						    <h4 className="media-heading item__text">Mobile Application Development</h4>
						    <p className="item__sub-text">Smartphone is handy device that able to carry around. We build and develop mobile application so it can be accessed anytime and anywhere for you</p>
					  	</div>
					</div>
				</div>
	        	<div className="service col-sm-12">
			    	<div className="items media">
					  	<div className="media-left">
							<div className="item__img-wrapper circle">
						   		<img src="images/product.svg" className="img-responsive" alt="Product Design" />
						  	</div>
					  	</div>
					  	<div className="media-body">
						    <h4 className="media-heading item__text">Product Design</h4>
						    <p className="item__sub-text">We make solution of the problem as the product and we design it so our product will be helpful and also.. beautiful!</p>
					  	</div>
					</div>
				</div>
	        	<div className="service col-sm-12">
			    	<div className="items media">
					  	<div className="media-left">
							<div className="item__img-wrapper circle">
						   		<img src="images/workshop.svg" className="img-responsive" alt="Workshop & Seminar" />
						  	</div>
					  	</div>
					  	<div className="media-body">
						    <h4 className="media-heading item__text">Workshop & Seminar</h4>
						    <p className="item__sub-text">Sharing is caring. By sharing experiences and knowledge, we helped educate about developing the great products.</p>
					  	</div>
					</div>
				</div>
	        </div>
      	</div>
		<div className="row section section--quotes text-center border-b-grey">
    		<div className="container">
    			<h5 className="heading">Client Thoughts</h5>
				<div id="carousel-example-generic" className="carousel carousel--text slide col-sm-12" data-ride="carousel">
                  	{/* <!-- Indicators --> */}
                  	<ol className="carousel-indicators">
	                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
	                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
	                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                  	</ol>

                  	{/* <!-- Wrapper for slides --> */}
                	<div className="carousel-inner" role="listbox">
	                    <div className="item active">
	                        <div className="carousel-caption">
	                        	<blockquote>We trust Dream Akasa with all our design & development projects and are very happy working together.</blockquote>
	                        	<p className="profil">
							        <img src="images/default-avatar.png" />
						        	Carl Carlson
						        </p>
					        </div>
	                    </div>
	                    <div className="item">
	                      	<div className="carousel-caption">
	                        	<blockquote>Dream akasa help us to design and develop for our company application. Their response and work is really great! Very recommended to work.</blockquote>
	                        	<p className="profil">
							        <img src="images/default-avatar.png" />
						        	Arron Montgomery
						        </p>
					        </div>
                    	</div>
                    	<div className="item">
	                      	 <div className="carousel-caption">
	                        	<blockquote>Dream akasa help us doing usability test for our <i>stealth</i> startup app. The result is really well and detail!</blockquote>
	                        	<p className="profil">
							        <img src="images/default-avatar.png" />
						        	Tracey Carlson
						        </p>
					        </div>
                    	</div>
                  	</div>
                </div>
	        </div>
    	</div>


   		</div>
)

export default ServicesPage
