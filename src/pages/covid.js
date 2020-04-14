import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => {
  return (
    <div className="featured-products">
    {data.restApiApiTotalConfirmed.data}
    {data.allRestApiApiCasesByResidence.edges.map(({ node }) => (
      <div class="product">
        {node.data.map(data => (
          <div>{data.count} {data.residence} </div>
        ))}
      </div>
    ))}

  </div>
  )
}

export const query = graphql`
  {
    allRestApiApiCasesByResidence {
      edges {
        node {
          data {
            count
            residence
          }
        }
      }
    }
    restApiApiTotalConfirmed {
      data
    }
  }
`

export default ComponentName