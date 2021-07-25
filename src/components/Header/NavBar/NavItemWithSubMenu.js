/** @jsx jsx */
import React, {useState} from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {Link} from 'gatsby'

const NavItemWithSubMenu = ({title, slug, children}) => {
  // const [isSubMenuVisible, setIsSubMenuVisible] = useState(false)

  const mainItem = slug !== '#' ? <Link to={slug}>{title}</Link> : <a sx={{cursor: "pointer"}}>{title}</a>

  return (
    <>
      {mainItem}
      <ul className='subMenuWrapperUl'>
        {children.map(({title, slug}) => (
          <li key={slug} >
            <Link to={slug}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavItemWithSubMenu
