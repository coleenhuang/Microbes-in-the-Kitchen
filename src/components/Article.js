import React from 'react'
import LocalizedLink from '../utils/localizedLink'

const Article = (props) => {
    return (
        <div key={props.key}>
            <LocalizedLink lang={props.lang} type='post' uid={props.uid}>
                {props.text}
            </LocalizedLink>
        </div>
    )
}

export default Article;