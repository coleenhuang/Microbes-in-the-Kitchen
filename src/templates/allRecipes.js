import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import LocalizedLink from '../utils/localizedLink'

export const query = graphql`
query recipeQuery($lang: String){
    prismic {
      allPosts(lang: $lang, sortBy: title_DESC) {
        edges {
          node {
            title
            category {
              ... on PRISMIC_Categories {
                category
                _linkType
              }
            }
            _meta {
              id
              lang
              uid
            }
          }
        }
      }
    }
  }
`

export default ({data}) => {
    if (!data.prismic.allPosts.edges) return null
    const posts = data.prismic.allPosts.edges.filter(({node}) => {
      if (!node.category) return null
      return node.category.category==='Recipes'
    })
    return (
        <Layout>
            <h2>Recipes</h2>
            {posts.map(({ node }) => {
                return(
                  <LocalizedLink lang={node._meta.lang} type='post' uid={node._meta.uid}>
                    <p key={node._meta.id}>{node.title[0].text}</p>
                  </LocalizedLink>

                )
            })}
        </Layout>
    )
}
