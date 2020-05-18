import React from 'react'
import { Link } from 'gatsby'

const LocalizedLink = (props) => {
    const lang = props.lang==='zh-tw'?'zh/':'/'
    return (
        <Link to={`${lang}${props.type}/${props.uid}`}>
            {props.children}
        </Link>
    )
}

export default LocalizedLink;