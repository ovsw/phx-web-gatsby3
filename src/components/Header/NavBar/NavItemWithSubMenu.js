/** @jsx jsx */
import React, { useState } from "react"; // eslint-disable-line
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const NavItemWithSubMenu = ({ title, slug, children, index, closeMobileNav }) => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const mainItem =
    slug !== "#" ? (
      <Link to={slug} onClick={closeMobileNav}>
        {title}
      </Link>
    ) : (
      <a sx={{ cursor: "pointer" }}>{title}</a>
    );

  // const specialHiddenClass = index == 4 ? 'hiddenSubmenu' : ''

  return (
    <>
      {mainItem}
      <ul className="subMenuWrapperUl">
        {children.map(({ title, slug }) => (
          <li key={slug}>
            <Link to={slug} onClick={closeMobileNav}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavItemWithSubMenu;

const navItemStyles = (isSubmenuOpen) => {
  const styles = {};

  return styles;
};
