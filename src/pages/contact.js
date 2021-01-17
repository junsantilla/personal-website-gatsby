import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Banner from "../components/banner"

const ContactPage = () => (
    <div className="bg-light">
        <Layout>
        <Head title="Contact Me | " />
        <Banner pageTitle="Contact Me" pageDescription="You can get in touch anytime through" />

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
                                <a href="https://facebook.com/jun.rs.35" target="_blank">jun.rs.35</a>
                                <footer class="blockquote-footer">Facebook</footer>
                            </li>
                            <li>
                                <a href="https://twitter.com/junsantilla" target="_blank">junsantilla</a>
                                <footer class="blockquote-footer">Twitter</footer>
                            </li>
                            <li>
                                <a href="https://dev.to/junsantilla" target="_blank">junsantilla</a>
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
                                <a href="mailto:junsantilla@live.com" target="_blank">junsantilla@live.com</a>
                            </li>
                        </ul>
                    </div>
                </div>         
            </div>
        </div>
        </Layout>
    </div>
)

export default ContactPage
