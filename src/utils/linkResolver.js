import { Link, RichText, Date } from 'prismic-reactjs';

export const linkResolver = (doc) => {
  if (doc.type ==='blog_post'){
    return `/post/${doc.uid}`
  }
  return `/`
}
