import { graphql, Link } from 'gatsby';
import { Img } from 'gatsby-image';
import { linkResolver } from 'gatsby-source-prismic-graphql';
import { RichText } from 'prismic-reactjs';
import React from 'react';
import Layout from '../components/layout/layout';

export const query = graphql`
query postQuery($uid: String $lang: String!){
  prismic {
    allPosts(uid: $uid, lang:$lang) {
      edges {
        node {
          _meta {
            id
            lang
            tags
            uid
          }
          title
          main_image
          body {
            ... on PRISMIC_PostBodyText {
              type
              label
              primary {
                text
              }
            }
            ... on PRISMIC_PostBodySubtitle {
              type
              label
              primary {
                subtitle
              }
            }
            ... on PRISMIC_PostBodyImage {
              type
              label
              primary {
                image
              }
            }
          }
        }
      }
    }
  }
}`

export default ({data}) => {
  const post = data.prismic.allPosts.edges
  console.log(post[0])
  return (
    <Layout>
      {post.map(({ node }) => (
        <div key={node._meta.id}>
        <RichText render={node.title} />
        {node.main_image && <img src={node.main_image.homepage.url} alt={node.main_image.homepage.alt} />}
        {node.body.map((slice, index) =>{
          if (slice.type==='text'){
            return RichText.render(slice.primary.text, linkResolver)
          }
          else if (slice.type==='subtitle'){
            return RichText.render(slice.primary.subtitle, linkResolver)
          }
          else if (slice.type==='image'){
            return <img src={slice.primary.image.url} alt={slice.primary.image.alt}/>
          }
          else{
            return null
          }
        })}
        </div>
      ) )}
    </Layout>
  );
}