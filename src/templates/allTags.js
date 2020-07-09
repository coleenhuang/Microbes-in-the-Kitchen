import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/layout'
import { linkResolver } from 'gatsby-source-prismic-graphql'
import { useTranslation } from 'react-i18next';
import { language } from 'i18next'

export const query = graphql`
query alltagQuery($lang: String){
    prismic {
        allTags(lang: $lang, sortBy: tag_ASC) {
          edges {
            node {
              tag
              _meta {
                lang
                type
                id
                uid
              }
            }
          }
        }
    }
}`
export default ({data, pageContext}) => {
    const tags = data.prismic.allTags.edges
    if (!tags) return null
    const { i18n } = useTranslation();
    if (pageContext.lang !== i18n.language) {
      i18n.changeLanguage(pageContext.lang)
    }
    const altLang = {
      //required information for linkResolver
      uid: "tags",
      lang: pageContext.lang==='en-us'?'zh-tw':'en-us',
      type: 'alltags'
    }
    
    return(
        <Layout altLang={altLang}>
            <h2>Tags</h2>
            {tags.map(({ node }) => (
              <Link to={linkResolver(node._meta)} key={node._meta.id}>
                <p style={{textAlign:'center'}}>{node.tag}</p>
              </Link>

            ))}
        </Layout>
    )
}
