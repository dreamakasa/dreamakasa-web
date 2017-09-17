import React from 'react'
import Link from 'gatsby-link'

const ContactPage = () => (
  <div>
      	<div className="row section section--banner text-center transparent">
      		<div className="container">
	      		<div className="col-md-10 col-md-offset-1">
			      	<h1 className="heading">Interested with us?</h1>
			        <h6 className="text">
			        	We're available for all work related inquiries and general questioning. Reach out to us anytime and we'll get back to you!
			        </h6>
		        </div>
	        </div>
	    </div>
        <div className="row section section--contact transparent p-t-0">
        	<div className="container">
	            <form className="col-sm-6 col-sm-offset-3 form--panel">
	             	<div className="form-group">
		                <label htmlFor="name">
		                  	Name
		                  	<span className="label__sub">What should we call you?</span>
		                </label>
	                	<input type="text" className="form-control" id="name" />
	              	</div>
	              	<div className="form-group">
		                <label htmlFor="occasion">
		                  Occasion
		                </label>
		                <div className="select-wrapper">
		                	<select className="form-control" id="occasion">
		                		<option>Just want to say hi</option>
		                		<option>Lorem ipsum dolor sit amet</option>
		                		<option>Consetur adsicing elit</option>
		                		<option>Ut enim ad finem</option>
		                	</select>
	                	</div>
	              	</div>
	             	<div className="form-group">
		                <label htmlFor="email">
		                  	Email
		                  	<span className="label__sub">Where should we reply to?</span>
		                </label>
	                	<input type="email" className="form-control" id="email" />
	              	</div>
	             	<div className="form-group">
		                <label htmlFor="email">
		                  	Message
		                  	<span className="label__sub">What do you want to talk about?</span>
		                </label>
		                <textarea className="form-control"></textarea>
	              	</div>
		            <button type="submit" className="btn btn-default btn-block btn--orange animate--arrow-right hover--swipe-left">
		                SUBMIT
		                <span className="arrow pull-right"></span>
		              </button>
	            </form>
		    </div>
        </div>
        <div className="row section section--contact-foot p-t-0 p-b-0 border-b-grey"></div>


    	</div>
)

export default ContactPage
