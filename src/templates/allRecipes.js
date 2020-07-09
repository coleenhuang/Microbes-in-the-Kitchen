import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/layout'
import { useTranslation } from 'react-i18next';
import { language } from 'i18next'
import { linkResolver } from 'gatsby-source-prismic-graphql'

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
              type
            }
          }
        }
      }
    }
  }
`

export default ({data, pageContext}) => {
    if (!data.prismic.allPosts.edges) return null
    const posts = data.prismic.allPosts.edges.filter(({node}) => {
      if (!node.category) return null
      return node.category.category==='Recipes'
    })
    const { i18n } = useTranslation();
    if (pageContext.lang !== i18n.language) {
      i18n.changeLanguage(pageContext.lang)
    }
    const altLang = {
      //required information for linkResolver
      uid: "recipes",
      lang: pageContext.lang==='en-us'?'zh-tw':'en-us',
      type: 'allrecipes'
    }
    
    return (
        <Layout altLang={altLang}>
            <h2>Recipes</h2>
            {posts.map(({ node }) => {
                return(
                  <Link to={linkResolver(node._meta)} key={node._meta.id}>
                    <p >{node.title[0].text}</p>
                  </Link>
                )
            })}
        </Layout>
    )
}
