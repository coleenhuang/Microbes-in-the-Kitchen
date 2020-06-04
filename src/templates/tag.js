import React from 'react'
import Layout from '../components/layout/layout'
import { graphql } from 'gatsby'

export const query = graphql`
    query tagQuery($uid: String $lang: String!){
        prismic {
            allTags(uid: $uid, lang: $lang) {
                edges {
                  node {
                    tag
                    _meta {
                      id
                      uid
                      lang
                    }
                  }
                }
              }
            }
        }
    `

export default({ data }) => {
    const tag = data.prismic.allTags.edges.slice(0,1).pop()
    return (
        <Layout>
            <h2>{tag.node.tag}</h2>
        </Layout>
    )
}