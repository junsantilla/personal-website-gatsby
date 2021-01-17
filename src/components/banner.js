import React from 'react'

const Banner = (props) => {
    return (
        <div className="jumbotron mb-5 mb-0">
            <div className="container">
                <h1>{props.pageTitle}</h1>
                <p>{props.pageDescription}</p>
            </div>
        </div>
    )
}

export default Banner