import React from 'react'
import { graphql } from  'gatsby'
import Layout from '../components/layout/layout'
import { RichText } from 'prismic-reactjs'

export const query = graphql`
query bookshelfQuery {
    prismic {
      bookshelf(lang: "en-us", uid: "bookshelf") {
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
    return(
        <Layout>
            <RichText render={bookshelf.title} />
        </Layout>
    )
}