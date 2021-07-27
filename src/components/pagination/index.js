/** @jsx jsx */
import React from "react"; // eslint-disable-line
import { jsx } from "theme-ui";
import { Link } from "gatsby";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Pagination = ({ currentPage, numPages, rootSlug }) => {
  // pagination constants
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <ul sx={paginationStyles}>
      {!isFirst && (
        
        <Link
          to={`/${rootSlug}/${prevPage}${prevPage === "" ? "" : "/"}`}
          rel="prev"
          title="Previous Page"
        >
          <FaChevronLeft sx={{ position: "relative", top: "2px" }} />
        </Link>
      )}

      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`/${rootSlug}/${i === 0 ? "" : i + 1}${i === 0 ? "" : "/"}`}
          activeClassName="activePage"
        >
          {i + 1}
        </Link>
      ))}

      {!isLast && (
        <Link to={`/${rootSlug}/${nextPage}/`} rel="next" title="Next Page">
          <FaChevronRight sx={{ position: "relative", top: "2px" }} />
        </Link>
      )}
    </ul>
  );
};

export default Pagination;

const paginationStyles = {
  pl: 0,
  a: {
    textDecoration: "none",
    px: 2,
    py: 1,
    bg: "black",
    color: "white",
    mr: 2,
  },
  ".activePage": {
    bg: "primary",
    color: "black",
    // fontWeight: 'bold'
  },
};
