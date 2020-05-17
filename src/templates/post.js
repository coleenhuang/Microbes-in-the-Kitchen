import { graphql, Link } from 'gatsby';
import { linkResolver } from 'gatsby-source-prismic-graphql';
import { RichText } from 'prismic-reactjs';
import React from 'react';
import Layout from '../components/layout';

export const query = graphql`
query postQuery($uid: String){
  prismic {
    allPosts(uid: $uid) {
      edges {
        node {
          _meta {
            id
            lang
            tags
            uid
          }
          title
        }
      }
    }
  }
}`

export default ({data}) => {
  const post = data.prismic.allPosts.edges
  return (
    <Layout>
      {post.map(({ node }) => (
        <div key={node._meta.id}>
        <RichText render={node.title} />
        </div>
      ) )}
      <h1></h1>
      <Link to="/">Back to index</Link>
    </Layout>
  );
}