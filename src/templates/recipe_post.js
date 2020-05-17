import { graphql, Link } from 'gatsby';
import { linkResolver } from 'gatsby-source-prismic-graphql';
import { RichText } from 'prismic-reactjs';
import React from 'react';
import Layout from '../components/layout';

export const query = graphql`
query recipeQuery($uid: String $lang: String!){
  prismic {
    allRecipes(uid: $uid, lang: $lang) {
      edges {
        node {
          _meta {
            id
            lang
            tags
            uid
          }
          recipe_body
          recipe_title
        }
      }
    }
  }
}`

export default ({data}) => {
  const recipe = data.prismic.allRecipes.edges
  return (
    <Layout>
      {recipe.map(({ node }) => (
        <div key={node._meta.id}>
        <h1>{node.recipe_title.text}</h1>
        {node.recipe_body.map(paragraph =>(
          <p>{paragraph.text}</p>
        ))}
        </div>
      ) )}
      <h1></h1>
      <Link to="/">Back to index</Link>
    </Layout>
  );
}
