import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import logo from "../img/logo.jpg"
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/index.scss'

const Header = () => {
	const data = useStaticQuery(graphql`
		query HeaderQuery {
			site {
				siteMetadata {
					title
				}
			}
	  	}
	`)

	return (
		<div>
			<div className="jsnav-header bg-white border-bottom sticky-top">
				<div className="container">
					<div className="jsnav-header-wrapper">
						<div className="logo">
							<Link to="/"><img src={logo} /></Link>
						</div>
						<div className="burger-menu">
							<div className="hamburger-inner"></div>
						</div>
						<nav className="jsnav-menu">
							<ul>
								<li className="current-menu">
									<Link to="/contact">Contact Me</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	)
}


	

export default Header
