import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'gatsby-link'
import Helmet from 'react-helmet'


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const NavLink = ({
  to,
  exact,
  strict,
  location,
  activeClassName,
  className,
  activeStyle,
  style,
  isActive: getIsActive,
  ariaCurrent,
  ...rest
}) => (
  <Route
    path={typeof to === 'object' ? to.pathname : to}
    exact={exact}
    strict={strict}
    location={location}
    children={({ location, match }) => {
      
      const isActive = !!(getIsActive ? getIsActive(match, location) : match)

      return (
        <li className={isActive ? [ className, activeClassName ].filter(i => i).join(' ') : className}>
          <Link
            to={to}
            style={isActive ? { ...style, ...activeStyle } : style}
            aria-current={isActive && ariaCurrent}
            {...rest}
          />
        </li>
      )
    }}
  />
)


const Header = () => (
  <nav className="navbar">
    <div className="container-fluid">
      <div className="navbar__header">
        <a href="/" id="logo" data-toggle="tooltip" data-placement="bottom" title="Dream Akasa">
          <img src="images/logo.svg" alt="Dream Akasa" />
        </a>
        <button type="button" className="btn toggle-menu pull-right" id="toggleNavbar">
          <span className="bar">
            <span className="icon-bar">
            </span>
            <span className="icon-bar">
            </span>
            <span className="icon-bar">
            </span>
          </span>
          <span className="text">Menu
          </span>
        </button>
      </div>
      <div className="navbar__collapse">
        <ul className="nav navbar-nav pull-left">
          <NavLink to="/" activeClassName="active" exact>Home</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </ul>
        <ul className="nav navbar-nav pull-right">
          <li className="">
            <a href="services.html">Services
            </a>
          </li>
          <li className="">
            <a href="contact.html">Get In Touch
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

const Footer = () => (
  <div>
    <div className="row section section--timeline-head">
      <div className="container">
        <h4 className="heading text-center m-b-2 col-xs-12">Latest from us
        </h4>
      </div>
    </div>
    <div className="row section section--timeline transparent">
      <div className="container">
        <div className="container__inner">
          <div className="timeline-container">
          </div>
        </div>
      </div>
    </div>
    <div className="row section section--footer transparent">
      <div className="container">
        <div className="footer__interested col-sm-12">
          <h4>
            <span className="text">Interested to work with us? 
            </span>
            <button className="btn btn--orange animate--arrow-right hover--swipe-left">
              GET IN TOUCH
              <span className="arrow">
              </span>
            </button>
          </h4>
        </div>
        <div className="footer__nav col-sm-12 border-t-blue clearfix">
          <ul className="list-group list-inline pull-left list-group--flush ">
            <li className="list-group-item">&copy; 2017 Dream Akasa
            </li>
            <li className="list-group-item">+62 877 36923163 
              <span>/</span> 
              <a href="http://localhost:9001/contact.html">Contact Us</a>
            </li>
          </ul>
          <ul className="list-group list-inline pull-right list-group--flush">
            <li className="list-group-item">
              <a target="blank" href="https://www.facebook.com/dreamakasa">
                <i className="fa fa-facebook-official">
                </i>
              </a>
            </li>
            <li className="list-group-item">
              <a target="blank" href="https://twitter.com/dreamakasa">
                <i className="fa fa-twitter">
                </i>
              </a>
            </li>
            <li className="list-group-item">
              <a target="blank" href="https://www.instagram.com/dreamakasa/">
                <i className="fa fa-instagram">
                </i>
              </a>
            </li>
            <li className="list-group-item">
              <a target="blank" href="https://www.linkedin.com/company/13219551/">
                <i className="fa fa-linkedin-square">
                </i>
              </a>
            </li>
            <li className="list-group-item">
              <a target="blank" href="https://github.com/dreamakasa">
                <i className="fa fa-github-alt">
                </i>
              </a>
            </li>
            <li className="list-group-item">
              <a target="blank" href="https://dribbble.com/dreamakasa">
                <i className="fa fa-dribbble">
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
