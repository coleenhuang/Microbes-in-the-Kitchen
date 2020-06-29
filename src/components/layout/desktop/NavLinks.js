import React from 'react'

const NavLinks () = {
  return (
    <ul >
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/bookshelf'>
                Bookshelf
            </Link>
        </li>
        <li>
            <Link to='/recipes'>
                Recipes
            </Link>
        </li>
        <li>
            <Link to='/tags'>
                Tags
            </Link>
        </li>
        <li>
          Links
        </li>
    </ul>
  )
}

export default NavLinks
