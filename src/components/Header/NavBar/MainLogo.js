/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const MainLogo = () => {
  
  return (
    <Link to="/" title="Phoenix Home Loans" sx={{ display: "inline-block", lineHeight: 0 }}>
      <StaticImage
        src="../../../images/new-logos/JimmyVercillino_LuminateBank_Stacked.png"
        width={300}
        placeholder="none"
        alt="The Highly Motivated Vercellino Team, a division of Luminate Bank logo"
        imgStyle={{ objectFit: "contain" }}
        sx={{
          maxWidth: ["160px", "210px"],
        }}
      />
    </Link>
  );
}

export default MainLogo
