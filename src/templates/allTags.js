import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import LocalizedLink from '../utils/localizedLink'

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
    if (!tags) return null
    return(
        <Layout>
            <h2>Tags</h2>
            {tags.map(({ node }) => (
              <LocalizedLink lang={node._meta.lang} type='tag' uid={node._meta.uid}>
                <p key={node._meta.id} style={{textAlign:'center'}}>{node.tag}</p>
              </LocalizedLink>

            ))}
        </Layout>
    )
}
