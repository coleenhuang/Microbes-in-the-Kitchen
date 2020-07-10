import { graphql} from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { language } from 'i18next'
import Layout from '../components/layout/layout';
import Article from  '../components/Article'

export const query = graphql`
query tagQuery($uid: String! $lang: String!){
    prismic {
        tag(uid: $uid, lang: $lang) {
          tag
          _meta {
            id
            uid
            lang
            alternateLanguages {
              uid
              id
              type
              lang
            }
          }
        }
        allPosts(lang: $lang) {
            edges {
              node {
                _meta {
                  uid
                  lang
                  id
                  type
                }
                title
                main_image
                body1 {
                  ... on PRISMIC_PostBody1Tags {
                    type
                    fields {
                      tag {
                        ... on PRISMIC_Tag {
                          tag
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
              }
            }
        }
    }
}`

export default ({data, pageContext}) => {
  const tag = data.prismic.tag
  if (!tag) return null
  const tagName = tag.tag
  const posts = data.prismic.allPosts.edges.filter(
    //filters to get posts that match desired tag
    ({node}) => {
      const tagList =[]
      const meta = node.body1
      if (!meta) return null
      const t = meta.find((i) => i.type ==='tags')

      if(!t){
        //if there is no tag field
        return false
      }
      t.fields.forEach(ta => {
        if (!ta.tag) return false //if tag field left blank
        //Makes list of tags in post
        return tagList.push(ta.tag.tag)})
      return tagList.includes(tagName)
    }
  )
  const { i18n } = useTranslation();
  if (pageContext.lang !== i18n.language) {
    i18n.changeLanguage(pageContext.lang)
  }
  const altLang = tag._meta.alternateLanguages?tag._meta.alternateLanguages[0]:null
  return (
    <Layout altLang={altLang}>
        <h2 key={tag._meta.id}>{tag.tag}</h2>
        {posts.map(({ node }, index) => {
            return(
              <Article key={index} node={node} />
        )})
        }
    </Layout>
  );
}
