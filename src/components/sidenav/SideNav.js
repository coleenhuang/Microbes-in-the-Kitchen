import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import MyLinks from './MyLinks'
import OtherLinks from './OtherLinks'
import { linkResolver } from 'gatsby-source-prismic-graphql'

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
                      type
                      uid
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
            <section>
                <h4 style={{textAlign: 'center'}}>Categories</h4>
                <ul style={{listStyleType: 'none'}}>
                    {groups.map(({ node }) => {
                        return (
                            <li key={node._meta.id}>
                                <Link to={linkResolver(node._meta)}>
                                    {node.group}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <OtherLinks />
        </div>
    )
}

export default SideNav
