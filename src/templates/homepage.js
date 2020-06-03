import { graphql } from 'gatsby';
import { linkResolver } from 'gatsby-source-prismic-graphql';
import { RichText } from 'prismic-reactjs';
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
    allPosts(lang: $lang) {
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
  const posts = data.prismic.allPosts.edges
  return (
    <Layout>
        <div className='articleContainer'>
          {posts.map(({ node }, index) =>{
          return (
          <Article key={index} 
            item={node._meta.id} 
            lang={node._meta.lang}
            uid={node._meta.uid}
            date={node.date}
            image={node.main_image.homepage}>
              <h2>{node.title[0].text}</h2>
              <p className='date sub'>{node.date}</p>
              <RichText className='sub' render={node.summary} />
          </Article>
          )})}
        </div>

      
    </Layout>
  );
}