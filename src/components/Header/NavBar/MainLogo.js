/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const MainLogo = () => {
  
  return (
    <Link to="/" title="Phoenix Home Loans" sx={{ display: "inline-block", lineHeight: 0 }}>
      <StaticImage
        src="../../../images/luminate-bank-logo-horizontal-logo.png"
        width={400}
        placeholder="none"
        alt="Luminate Bank logo"
        sx={{
          maxWidth: ["190px", "250px"],
        }}
      />
    </Link>
  );
}

export default MainLogo
