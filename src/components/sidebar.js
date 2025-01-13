/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import SocialLinks from './social-links'

const Sidebar = () => {

  const { bgImage } = useStaticQuery(
    graphql`
      query {
        bgImage: file(
          relativePath: {
            eq: "jimmy-vercellino-award-top-1-percent-mortgage-originators-america.png"
          }
        ) {
          childImageSharp {
            gatsbyImageData(height: 736, placeholder: BLURRED)
          }
        }
      }
    `
  );
  
  const awardImage = getImage(bgImage);
  return (
    <aside>
      <div sx={sideBarStyles}>
        <div className="dark">
          <h4>
            <span>Apply online for a loan today!</span>
          </h4>
          <p>Fast and easy online application.</p>
          <a
            href="https://nam11.safelinks.protection.outlook.com/?url=https%3A%2F%2Fapplynow.goluminate.com%2Fhomehub%2Fsignup%2Fjimmy.vercellino%40goluminate.com&data=05%7C02%7CJimmyV%40goluminate.com%7Cf1762972fdf54352283608dd2e985eb2%7C59ae8427c05f4c7da4c21eebd4616d71%7C0%7C0%7C638717954160217613%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=MptYp7%2F0vYh%2BDv81bxnmRdABRCK%2FbIxKMvtOUlfIYzM%3D&reserved=0"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              variant: "buttons.simpleAccent",
            }}
          >
            Get Started
          </a>
        </div>

        <div className="accent">
          <h4>
            <span>Mortgage Calculator</span>
          </h4>
          <p>Find out what you can expect to pay for your home loan.</p>
          <Link
            to="/mortgage-calculator/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              variant: "buttons.simpleAccent",
            }}
          >
            Calculate Now
          </Link>
        </div>

        <div className="white">
          <h4>
            <span>What's My Home Worth?</span>
          </h4>
          <p>Get a ballpark estimate for your home with our online calculator.</p>
          <Link
            to="/home-value-estimator/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              variant: "buttons.simpleAccent",
            }}
          >
            Calculate Now
          </Link>
        </div>

        {/* <Link
          className="award"
          to="/jimmy-vercellino-awarded-top-1-percent-mortgage-originators-in-us-2019/"
        >
          <GatsbyImage
            image={awardImage}
            alt="Award for Jimmy Vercellino as top 1% Mortgage Originators in America 2019 from Morgage Executive Magazine"
          />
        </Link> */}

        <div className="social">
          <ul
            sx={{
              variant: "lists.reset",
              display: "flex",
              justifyContent: "center",
              li: {
                px: 2,
              },
              a: {
                fontSize: 5,
                "&:hover": {
                  color: "primary",
                },
                color: "black",
              },
            }}
          >
            <SocialLinks />
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar

const sideBarStyles = {
  px: [2, null, null, 4],
  pr: [2, null, null, 0],
  h4: {
    mt: 0,
    mb: 3,
    fontSize: 2,
    lineHeight: 1,
    span: {
      display: 'block'
    },
    '&::after': {
      content: '""',
      clear: 'both',
      width: '2.5em',
      display: 'inline-block',
      margin: '.8em 0 0',
      borderBottom: '2px solid #e49f37'
    }
  },
  '>div': {
    borderRadius: 'default',
    textAlign: 'center',
    p: 4,
    '&.social': {
      px: 0
    },
    mb: 3,
    '>a': {
      mt: 2
    }
  },
  '.dark': {
    bg: 'black',
    color: 'white',
    h4: {
      color: 'primary'
    }
  },
  '.accent': {
    bg: 'primary',
    color: 'white',
    h4: {
      color: 'black',
      '&::after': {
        borderColor: 'white'
      }
    },
    a: {
      bg: 'white',
      color: 'black'
    }
  },
  '.white': {
    border: '1px solid gray'
  },
  '.award': {
    padding: 0,
    border: 'none'
  }
}
