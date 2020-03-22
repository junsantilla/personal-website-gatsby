import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const ContactPage = () => (
    <div className="bg-light">
        <Header />
        <div className="jumbotron mb-5 mb-0">
            <div className="container">
                <h1>Contact Me</h1>
                <p>You can get in touch anytime through</p>
            </div>
        </div>

        <div className="container-fluid mb-5 social-media">
            <div className="container">
                <div className="row mb-4">
                    <div class="col-12">
                        <h2 className="h4">Social Media</h2>
                      
                    </div>
                </div> 
                <div className="row">
                    <div class="col-12">
                        <ul>
                            <li>
                                <a href="https://facebook.com/jun.rs.35" className="font-weight-bold" target="_blank">jun.rs.35</a>
                                <footer class="blockquote-footer">Facebook</footer>
                            </li>
                            <li>
                                <a href="https://twitter.com/junsantilla" className="font-weight-bold" target="_blank">junsantilla</a>
                                <footer class="blockquote-footer">Twitter</footer>
                            </li>
                            <li>
                                <a href="https://dev.to/junsantilla" className="font-weight-bold" target="_blank">junsantilla</a>
                                <footer class="blockquote-footer">DEV Community</footer>
                            </li>
                        </ul>
                    </div>
                </div>         
            </div>
        </div>

        <div className="container-fluid mb-5">
            <div className="container">
                <div className="row mb-4">
                    <div class="col-12">
                        <h2 className="h4">Email Address</h2>
                
                    </div>
                </div> 
                <div className="row">
                    <div class="col-12">
                        <ul>
                            <li>
                                <a href="mailto:junsantilla@live.com" className="font-weight-bold" target="_blank">junsantilla@live.com</a>
                            </li>
                        </ul>
                    </div>
                </div>         
            </div>
        </div>

        <Footer />
    </div>
)

export default ContactPage
