/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const MainLogo = () => {
  
  return (
    <Link to="/" title="Phoenix Home Loans" sx={{ display: "inline-block", lineHeight: 0 }}>
      <StaticImage
        src="../../../images/goldwater-vercellino-team-logo.png"
        width={320}
        placeholder="none"
        alt="Goldwater Bank - Vercellino Team logo"
        sx={{
          maxWidth: ["190px", "250px"],
        }}
      />
    </Link>
  );
}

export default MainLogo
