import React from 'react';
import { Link, useStaticQuery } from 'gatsby'
import MyLinks from './MyLinks'
import OtherLinks from './OtherLinks'
const SideNav = () => {
    const data = useStaticQuery(graphql`
    query groupQuery {
        prismic {
            allGroups {
                edges {
                  node {
                    _meta {
                      id
                      lang
                    }
                    group
                  }
                }
            }
        }
    }`)
    const lang = 'en-us'
    const groups = data.prismic.allGroups.edges.filter(group => group.node._meta.lang === lang)
    
    return (
        <div style={{gridColumn: '-3/-2', gridRowStart:'3'}}>
            <ul>
                Categories
                {groups.map(({ node }) => {
                    return (
                        <li key={node._meta.id}>
                          {node.group}
                        </li>
                    )
                })}
            </ul>
            <MyLinks />
            <OtherLinks />
        </div>
    )
}

export default SideNav