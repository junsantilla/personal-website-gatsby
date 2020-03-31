import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Banner from "../components/banner"

import logoBootstrap from "../img/bootstrap.svg"
import logoCSS3 from "../img/css3.svg"
import logoGatsby from "../img/gatsby.svg"
import logoGit from "../img/git.svg"
import logoGraphQL from "../img/graphql.svg"
import logoHTML5 from "../img/html5.svg"
import logoReact from "../img/react.svg"
import logoWordPress from "../img/wordpress.svg"

const IndexPage = () => (
    <div className="bg-light page-content">
        <Layout>
        <Head title="" />
        <Banner pageTitle="Hi I'm Jun" pageDescription="I'm glad you're here. Don't worry, I'm from the internet!" />
        
        <div className="container-fluid mb-5">
            <div className="container">
                <div className="row mb-4">
                    <div class="col-12">
                        <h2>Toolbox</h2>
                        <footer class="blockquote-footer">I generally work with lots of different technology, but currently I am using these frequently.</footer>
                    </div>
                </div>
                <div className="row">
                    <div class="col-6 col-md-3 mb-4">
                        <div className="interest bg-white p-4 text-center border">
                            <img src={logoGit} />
                            <h3 className="h6">Git</h3>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 mb-4">
                        <div className="interest bg-white p-4 text-center border">
                            <img src={logoWordPress} />
                            <h3 className="h6">WordPress</h3>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 mb-4">
                        <div className="interest bg-white p-4 text-center border">
                            <img src={logoHTML5} />
                            <h3 className="h6">HTML5</h3>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 mb-4">
                        <div className="interest bg-white p-4 text-center border">
                            <img src={logoCSS3} />
                            <h3 className="h6">CSS3</h3>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 mb-4">
                        <div className="interest bg-white p-4 text-center border">
                            <img src={logoReact} />
                            <h3 className="h6">React</h3>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 mb-4">
                        <div className="interest bg-white p-4 text-center border">
                            <img src={logoGatsby} />
                            <h3 className="h6">Gatsby</h3>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 mb-4">
                        <div className="interest bg-white p-4 text-center border">
                            <img src={logoGraphQL} />
                            <h3 className="h6">GraphQL</h3>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 mb-4">
                        <div className="interest bg-white p-4 text-center border">
                            <img src={logoBootstrap} />
                            <h3 className="h6">Bootstrap</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid projects mb-5"> 
            <div className="container">
                <div className="row mb-4">
                    <div class="col-12">
                        <h2>Projects</h2>
                        <footer class="blockquote-footer">Check out my projects created in my free time.</footer>
                    </div>
                </div> 
                <div className="row">
                    <div class="col-12">
                        <ul>
                            <li>
                                <a href="https://github.com/junsantilla/jsnav/" target="_blank">jsnav</a>
                                <footer class="blockquote-footer">A responsive multi-level navigation menu.</footer>
                            </li>
                            <li>
                                <a target="_blank">gastby-starter-developer</a>
                                <footer class="blockquote-footer">The soure code of this website will be available on GitHub soon.</footer>
                            </li>
                        </ul>
                    </div>
                </div>         
            </div>
        </div>
        </Layout>
        
    </div>
)

export default IndexPage
