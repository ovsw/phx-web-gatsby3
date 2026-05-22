/** @jsx jsx */
import React, { useState } from "react"; // eslint-disable-line
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const isExternalUrl = (url) => /^https?:\/\//.test(url);

const NavLink = ({ slug, children, onClick }) =>
  isExternalUrl(slug) ? (
    <a href={slug} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link to={slug} onClick={onClick}>
      {children}
    </Link>
  );

const NavItemWithSubMenu = ({ title, slug, children, index, closeMobileNav }) => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const mainItem =
    slug !== "#" ? (
      <NavLink slug={slug} onClick={closeMobileNav}>
        {title}
      </NavLink>
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
            <NavLink slug={slug} onClick={closeMobileNav}>
              {title}
            </NavLink>
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
