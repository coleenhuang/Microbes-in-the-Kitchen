import { graphql, Link } from 'gatsby';
import { linkResolver } from 'gatsby-source-prismic-graphql';
import { RichText } from 'prismic-reactjs';
import React from 'react';
import Article from '../components/Article'
import Layout from '../components/layout';

export const query = graphql`
query homepageQuery($uid: String $lang: String!){
  prismic {
    allHomepages(uid: $uid, lang: $lang) {
      edges {
        node {
          _meta {
            id
            lang
            uid
          }
          title
        }
      }
    }
    allPosts(lang: $lang) {
        edges {
            node {
                _meta {
                  id
                  lang
                  uid
                }
                title
                main_image
            }
        }
    }
  }
}`

export default ({data}) => {
  const homepage = data.prismic.allHomepages.edges
  const posts = data.prismic.allPosts.edges
  console.log(posts)

  return (
    <Layout>
      {homepage.map(({ node }) => (
        <div key={node._meta.id}>
        <RichText render={node.title} />
        </div>
      ) )}
      {posts.map(({ node }, index) =>{
          console.log(node.main_image.homepage)
          return (
        <Article key={index} 
        item={node._meta.id} 
        lang={node._meta.lang}
        uid={node._meta.uid}
        image={node.main_image.homepage}>
            {node.title[0].text}
        </Article>
      )})}
      <Link to="/">Back to index</Link>
    </Layout>
  );
}