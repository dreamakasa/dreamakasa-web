import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Header = () => (
  <nav className="navbar">
    <div className="container-fluid">
          <div className="navbar__header">
              <a href="/" id="logo" data-toggle="tooltip" data-placement="bottom" title="Dream Akasa">
                  <img src="images/logo.svg" alt="Dream Akasa" />
              </a>
              <button type="button" className="btn toggle-menu pull-right" id="toggleNavbar">
                  <span className="bar">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </span>
                  <span className="text">Menu</span>
              </button>
          </div>
          <div className="navbar__collapse">
        <ul className="nav navbar-nav pull-left">
          <li className=""><a href="index.html">Home</a></li>
          <li className=""><a href="about.html">About</a></li>
        </ul>
        <ul className="nav navbar-nav pull-right">
          <li className=""><a href="services.html">Services</a></li>
          <li className=""><a href="contact.html">Get In Touch</a></li>
        </ul>
          </div>
    </div>
  </nav>
)

const TemplateWrapper = ({ children }) => (
  <div className="wrapper">
    <Helmet
      title="Dream Akasa | We help companies from design to development with solution-by-design and human-centered approach."
      meta={[
        { name: 'description', content: 'Dream Akasa' },
        { name: 'keywords', content: 'dreamakasa, Dream Akasa, development' },
      ]}
    />
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
