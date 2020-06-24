import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import { RichText } from 'prismic-reactjs'

export const query = graphql`
query aboutQuery($uid: String! $lang: String!){
    prismic {
        about(uid: $uid, lang: $lang) {
          _meta {
            id
            lang
            uid
          }
          body
          image
          title
        }
      }
}`

export default ({data}) => {
    const about = data.prismic.about
    if (!about) return null
    return (
    <Layout>
        <RichText render={about.title} />
        <img
            src={about.image.url}
            alt={about.image.alt}
            style={{display:'block', margin:'0 auto'}}/>
        <RichText render={about.body} />
    </Layout>
    )
}
