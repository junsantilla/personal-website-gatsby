import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Head = (props) => {
    const data = useStaticQuery(graphql`
		query HeaderQuery {
			site {
				siteMetadata {
                    title
                    description
				}
			}
	  	}
    `)
    
    return (
        <Helmet>
            <title>{props.title}{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description} />
            
        </Helmet>
    )
}

export default Head