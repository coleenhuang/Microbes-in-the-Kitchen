import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import { node } from 'prop-types'

export const query = graphql`
query alltagQuery($lang: String){
    prismic {
        allTags(lang: $lang, sortBy: tag_ASC) {
          edges {
            node {
              tag
              _meta {
                id
                uid
              }
            }
          }
        }
    }
}`
export default ({data}) => {
    const tags = data.prismic.allTags.edges
    return(
        <Layout>
            <h2>Tags</h2>
            {tags.map(({ node }) => (
                <p key={node._meta.id} style={{textAlign:'center'}}>{node.tag}</p>
            ))}
        </Layout>
    )
}