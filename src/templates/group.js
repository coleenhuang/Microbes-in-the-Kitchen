import { graphql, Link } from 'gatsby';
import { linkResolver } from 'gatsby-source-prismic-graphql';
import { useTranslation } from 'react-i18next';
import { language } from 'i18next'
import { RichText } from 'prismic-reactjs';
import React from 'react';
import Layout from '../components/layout/layout';
import Article from  '../components/Article'

export const query = graphql`
query gQuery($uid: String! $lang: String!){
    prismic {
        group(uid: $uid, lang: $lang) {
          group
          _meta {
            id
            uid
            lang
          }
        }
        allPosts(lang: $lang) {
            edges {
              node {
                title
                _meta {
                  id
                  lang
                }
                main_image
                body1 {
                  ... on PRISMIC_PostBody1Group {
                    type
                    fields {
                      group {
                        ... on PRISMIC_Group {
                          group
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
  const group = data.prismic.group
  if (!group) return null
  const groupName = data.prismic.group.group
  console.log(data.prismic.allPosts.edges)
  const posts = data.prismic.allPosts.edges.filter(
    ({node}) => {
      const postList =[]
      const meta = node.body1
      if (!meta) return null

      const g = meta.find((i) => i.type ==="group")
      if (g===undefined){
        return false
      }
      g.fields.forEach(gr => postList.push(gr.group.group))
      return postList.includes(groupName)
    }
  )
  const { i18n } = useTranslation();
  if (pageContext.lang !== i18n.language) {
    i18n.changeLanguage(pageContext.lang)
  }
  console.log(posts)
  return (
    <Layout>
        <h2 key={group._meta.id}>{groupName}</h2>
        {posts.map(({node}, index)=>(
          <Article key={index} node={node} />
        ))}
    </Layout>
  );
}
