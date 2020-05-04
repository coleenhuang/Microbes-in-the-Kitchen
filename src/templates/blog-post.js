import { RichText } from 'prismic-reactjs'

export default ({ data }) => {
  const doc = data.prismic.allBlog_posts.edges.slice(0,1).pop();
  if (!doc) return null;
  return (
    <div>
      <h1>{RichText.render(doc.node.article_title)}</h1>
      <p>{RichText.render(doc.node.blog_text)}</p>
    </div>
  )
}

export const query = graphql`
query {
  prismic {
    allBlog_posts(uid: $uid){
      edges {
        node {
          article_title
          mainimage
          blog_text
          _linkType
        }
      }
    }
  }
}`
