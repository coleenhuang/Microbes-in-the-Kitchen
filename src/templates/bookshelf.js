import React from 'react'
import { graphql } from  'gatsby'
import Layout from '../components/layout/layout'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql';

export const query = graphql`
query bookshelfQuery($uid: String! $lang: String!) {
    prismic {
      bookshelf(lang: $lang, uid: $uid) {
        _meta {
          id
          lang
          uid
        }
        intro
        title
        body {
          ... on PRISMIC_BookshelfBodyText {
            type
            label
            primary {
              text
            }
          }
          ... on PRISMIC_BookshelfBodyBook_title {
            type
            label
            primary {
              booktitle
            }
          }
          ... on PRISMIC_BookshelfBodyImage {
            type
            label
            primary {
              image
            }
          }
        }
      }
    }
}`

export default ({ data }) => {
    const bookshelf = data.prismic.bookshelf
    if (!bookshelf) return null
    return(
        <Layout>
            <RichText render={bookshelf.title} />
            <RichText render={bookshelf.intro} />
            {bookshelf.body.map((slice, index) =>{
          if (slice.type==='text'){
            return RichText.render(slice.primary.text, linkResolver)
          }
          else if (slice.type==='book_title'){
            return RichText.render(slice.primary.booktitle, linkResolver)
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
        </Layout>
    )
}
