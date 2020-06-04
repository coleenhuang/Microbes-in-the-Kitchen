import { graphql, Link } from 'gatsby';
import { linkResolver } from 'gatsby-source-prismic-graphql';
import React from 'react';
import Layout from '../components/layout/layout';
import Article from  '../components/Article'

export const query = graphql`
query tagQuery($uid: String $lang: String!){
    prismic {
        allTags(uid: $uid, lang: $lang) {
          edges {
            node {
              _meta {
                id
                lang
                uid
              }
              tag
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

export default ({data}) => {
  const tag = data.prismic.allTags.edges.slice(0,1).pop()
  const posts = data.prismic.allPosts.edges.filter(
    ({node}) => {
      const t = node.body1.find((i) => i.type ==='tags')
      console.log('t', t)
      const tagList =[]
      t.fields.forEach(ta => tagList.push(ta.tag.tag))
      console.log(tagList)
      console.log(tag.node.tag)
      return tagList.includes(tag.node.tag)
    }
  )
    console.log('posts', posts)
  return (
    <Layout>
        <h2 key={tag.node._meta.id}>{tag.node.group}</h2>
        {posts.map(({ node }, index) => {
            return(
              <Article key={index} node={node} />
        )})
        }
      <Link to="/">Back to index</Link>
    </Layout>
  );
}