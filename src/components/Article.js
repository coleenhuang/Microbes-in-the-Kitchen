import React from 'react'
import LocalizedLink from '../utils/localizedLink'
import styles from './Article.module.css'
const Article = (props) => {
    const imageUrl = props.image.homepage?props.image.homepage.url:props.image.url
    return (
        <div className={styles.gridItem} key={props.item}>
            <div className={styles.flexContainer}>
                <img className={styles.mainImage} src={props.image.url} alt={props.image.alt}/>
                <LocalizedLink lang={props.lang} type='post' uid={props.uid}>
                    <h2>{props.children}</h2>
                </LocalizedLink>
                <p>{props.date}</p>
            </div>
        </div>
    )
}

export default Article;