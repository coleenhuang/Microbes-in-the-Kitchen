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
  const post = data.prismic.allPosts.edges
  if (!post) return null
  const { i18n } = useTranslation();
  if (pageContext.lang !== i18n.language) {
    i18n.changeLanguage(pageContext.lang)
  }

  return (
    <Layout>
      {post.map(({ node }) => (
        <div key={node._meta.id}
        style={{
          padding: '0 4rem 2rem 4rem',
          maxWidth: '800px',
          margin:`0 auto`}}>
        <RichText render={node.title} />
        <div>
        {/* map the alternateLanguages and render links for each one
          TODO: Make this functional
          Attach the correct links to the language switcher
          */}

        {node._meta.alternateLanguages
          ? node._meta.alternateLanguages.map((altLang, index) => {
              console.log(altLang)
              return (
                <Link
                  className="lang"
                  key={index}
                  to={linkResolver(altLang)}
                >
                  {altLang.lang}
                </Link>
              )
            })
          : null}
      </div>
        {node.main_image && <img
          src={node.main_image.homepage.url}
          alt={node.main_image.homepage.alt}
          style={{display:'block', margin:'0 auto'}} />}
        {node.body.map((slice, index) =>{
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
      ) )}
    </Layout>
  );
}
