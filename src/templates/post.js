import { graphql, Link } from 'gatsby';
import { linkResolver } from 'gatsby-source-prismic-graphql';
import { RichText } from 'prismic-reactjs';
import React from 'react';
import Layout from '../components/layout/layout';
import { useTranslation } from 'react-i18next';
import { language } from 'i18next'

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
            alternateLanguages {
              uid
              id
              type
              lang
            }
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

export default ({data, pageContext}) => {
  const post = data.prismic.allPosts.edges[0].node
  if (!post) return null
  const { i18n } = useTranslation();
  if (pageContext.lang !== i18n.language) {
    i18n.changeLanguage(pageContext.lang)
  }
  const altLang = post._meta.alternateLanguages[0]
  return (
    <Layout>
        <div key={post._meta.id}
        style={{
          padding: '0 4rem 2rem 4rem',
          maxWidth: '800px',
          margin:`0 auto`}}>
        <RichText render={post.title} />
        {post.main_image && <img
          src={post.main_image.homepage.url}
          alt={post.main_image.homepage.alt}
          style={{display:'block', margin:'0 auto'}} />}
        {post.body.map((slice, index) =>{
          if (slice.type==='text'){
            return RichText.render(slice.primary.text, linkResolver)
          }
          else if (slice.type==='subtitle'){
            return RichText.render(slice.primary.subtitle, linkResolver)
          }
          else if (slice.type==='image'){
            return <img
              src={slice.primary.image.url}
              alt={slice.primary.image.alt}
              style={{display:'block', margin:'0 auto'}}/>
          }
          else{
            return null
          }
        })}
        </div>
    </Layout>
  );
}
