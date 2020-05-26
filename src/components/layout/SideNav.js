import React from 'react';
import { Link, useStaticQuery } from 'gatsby'

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
        <div style={{gridColumn: '-3/-2', gridRow:'3/4'}}>
            <ul>
                {groups.map(({ node }) => {
                    return (
                        <li key={node._meta.id}>
                          {node.group}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideNav