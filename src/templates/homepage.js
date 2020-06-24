import { graphql } from 'gatsby';
import { linkResolver } from 'gatsby-source-prismic-graphql';

import React from 'react';
import Article from '../components/Article'
import Layout from '../components/layout/layout';
import "./homepage.css"

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
    allPosts(lang: $lang, sortBy: date_DESC) {
        edges {
            node {
                _meta {
                  id
                  lang
                  uid
                }
                title
                date
                main_image
                summary
            }
        }
    }
  }
}`

export default ({data}) => {
  const homepage = data.prismic.allHomepages.edges
  if (!homepage) return null
  const posts = data.prismic.allPosts.edges
  return (
    <Layout>
        <div className='articleContainer'>
          {posts.map(({ node }, index) =>{
          return (
          <Article key={index} node={node}/>

          )})}
        </div>
    </Layout>
  );
}
