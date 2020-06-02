import { graphql, Link } from 'gatsby';
import { linkResolver } from 'gatsby-source-prismic-graphql';
import { RichText } from 'prismic-reactjs';
import React from 'react';
import Layout from '../components/layout/layout';
import Article from  '../components/Article'

export const query = graphql`
query grQuery($uid: String $lang: String!){
    prismic {
        allGroups(uid: $uid, lang: $lang) {
          edges {
            node {
              _meta {
                id
                lang
                uid
              }
              group
              image
            }
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

export default ({data}) => {
  const group = data.prismic.allGroups.edges.slice(0,1).pop()
  const posts = data.prismic.allPosts.edges.filter(
    ({node}) => {
      const g = node.body1.find((i) => i.type ==='group')
      console.log('g', g)
      const postList =[]
      g.fields.forEach(gr => postList.push(gr.group.group))
      console.log(postList)
      console.log(group.node.group)
      return postList.includes(group.node.group)
    }
  )
    console.log('posts', posts)
  return (
    <Layout>
        <h2 key={group.node._meta.id}>{group.node.group}</h2>
        {posts.map(({ node }, index) => {
            return(
              <Article key={index} 
              item={node._meta.id} 
              lang={node._meta.lang}
              uid={node._meta.uid}
              date={node.date}
              image={node.main_image.homepage}>
                {node.title[0].text}
            </Article>
        )})
        }
      <Link to="/">Back to index</Link>
    </Layout>
  );
}