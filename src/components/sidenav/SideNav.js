import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import MyLinks from './MyLinks'
import OtherLinks from './OtherLinks'
import LocalizedLink from '../../utils/localizedLink'

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
                                <LocalizedLink lang={lang} type='group' uid={node._meta.uid}>
                                    {node.group}
                                </LocalizedLink>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <MyLinks />
            <OtherLinks />
        </div>
    )
}

export default SideNav