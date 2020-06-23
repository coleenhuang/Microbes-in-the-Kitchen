import { graphql} from 'gatsby';
import React from 'react';
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
  const tag = data.prismic.tag
  const posts = data.prismic.allPosts.edges.filter(
    ({node}) => {
      const tagList =[]
      const meta = node.body1
      if (!meta) return null
      const t = meta.find((i) => i.type ==='tags')

      if(t===undefined){
        return false
      }
      t.fields.forEach(ta => tagList.push(ta.tag.tag))
      return tagList.includes(tag.tag)
    }
  )
    console.log('posts', posts)
  return (
    <Layout>
        <h2 key={tag._meta.id}>{tag.tag}</h2>
        {posts.map(({ node }, index) => {
            return(
              <Article key={index} node={node} />
        )})
        }
    </Layout>
  );
}
