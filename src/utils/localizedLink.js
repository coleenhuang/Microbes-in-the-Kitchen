import React from 'react'
import { Link } from 'gatsby'

const LocalizedLink = (props) => {
    const lang = props.lang==='zh-tw'?'zh/':'/'
    const link = props.type?`${lang}${props.type}/${props.uid}`:`${lang}/${props.uid}`
    return (
        <Link to={link}>
            {props.children}
        </Link>
    )
}

export default LocalizedLink;