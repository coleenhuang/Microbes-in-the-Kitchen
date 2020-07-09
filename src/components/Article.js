import React from 'react'
import { Link } from 'gatsby'
import {linkResolver} from 'gatsby-source-prismic-graphql'
import { RichText } from 'prismic-reactjs';
import styles from './Article.module.css'
const Article = ({node}) => {
    return (
        <div className={styles.flexContainer} key={node._meta.id}>
            <img className={styles.mainImage} src={node.main_image.homepage.url} alt={node.main_image.homepage.url}/>
                <Link to={linkResolver(node._meta)} >
                    <h2>{node.title[0].text}</h2>
                    <p className={`${styles.date} ${styles.sub}`}>{node.date}</p>
                    <RichText className={styles.sub} render={node.summary} />
                </Link>
         </div>
    )
}

export default Article;