import { graphql, Link } from 'gatsby';
import { linkResolver } from 'gatsby-source-prismic-graphql';
import { RichText } from 'prismic-reactjs';
import React from 'react';
import Layout from '../components/layout';

export const query = graphql`
query groupQuery($uid: String $lang: String!){
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
              _meta {
                id
                lang
              }
              title
            }
          }
        }
      }
}`

export default ({data}) => {
  const group = data.prismic.allGroups.edges
  const posts = data.prismic.allPosts.edges
  return (
    <Layout>
      {group.map(({ node }) => (
        <h2 key={node._meta.id}>{node.group}</h2>
      ) )}
        {posts.map(({ node }) => (
            <p>{node.title[0].text}</p>
        ))
        }
      <Link to="/">Back to index</Link>
    </Layout>
  );
}