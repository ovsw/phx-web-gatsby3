/** @jsx jsx */
import React from "react"; // eslint-disable-line
import { jsx, Container } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { FaPlayCircle } from "react-icons/fa";

import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const HomeHero = ({ onOpenJimmyVideo }) => {
  const { mobile, desktop, portrait } = useStaticQuery(graphql`
    query GET_HERO_BG_IMAGES {
      mobile: file(relativePath: { eq: "hero-image-bg-mobile.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      desktop: file(relativePath: { eq: "building-photo-2026.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      portrait: file(relativePath: { eq: "jimmy-v-portrait-no-bg.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 960
            placeholder: NONE
            formats: [AUTO, WEBP, AVIF, PNG]
            quality: 85
          )
        }
      }
    }
  `);

  const sources = [
    getImage(mobile),
    {
      ...getImage(desktop),
      media: `(min-width: 640px)`,
    },
  ];
  const portraitImage = getImage(portrait);

  return (
    <>
      <BgImage
        image={sources}
        loading="eager"
        Tag="section"
        sx={{
          paddingTop: ["11rem"],
          minHeight: [null, "80vh", "100vh"],
          display: "flex",
          position: "relative",
          alignItems: ["flex-start", null, null, "center"],
          overflow: "hidden",
        }}
      >
        <Container
          sx={{
            pt: [3, 1, 2, 2],
            pb: [0, 0, 0, 2],
            textAlign: ["center", "left"],
            overflow: "visible",
          }}
        >
          <div
            sx={{
              display: "flex",
              flexDirection: ["column", null, null, "row"],
              alignItems: ["center", null, null, "flex-end"],
              justifyContent: "space-between",
              position: "static",
              minHeight: [null, null, null, "49rem"],
              overflow: "visible",
            }}
          >
            <div
              className="textWrapper"
              sx={{
                padding: ["2rem 1.5rem", "2.5rem", "2.75rem", "3rem"],
                backgroundColor: "white",
                borderRadius: ["7px 7px 0 0", null, null, "7px"],
                maxWidth: ["28rem", "32rem", "34rem", "34rem", "36rem"],
                width: ["86%", "82%", "76%", "50%", "48%"],
                position: "relative",
                zIndex: 2,
                boxShadow: [
                  "0 10px 35px rgba(0,0,0,.08)",
                  null,
                  null,
                  "0 16px 40px rgba(0,0,0,.08)",
                ],
                "@media screen and (min-width: 1024px) and (max-width: 1279px)": {
                  width: "52%",
                },
              }}
            >
              <h1
                sx={{
                  variant: "text.superHeading",
                  color: "black",
                  justifyContent: ["center", "center", "center", "flex-start"],
                  position: "relative",
                  mb: 2,
                  "::before": {
                    borderTopColor: "black",
                    marginTop: "-1px",
                    position: ["absolute", "absolute", "absolute", "static"],
                    bottom: "-.5rem",
                    left: "50%",
                    transform: ["translateX(-50%)", "translateX(-50%)", "translateX(-50%)", "none"],
                  },
                }}
              >
                Phoenix Mortgage Lender
              </h1>
              <h2
                sx={{
                  fontFamily: "heading",
                  color: "black",
                  fontWeight: "heading",
                  lineHeight: "none",
                  fontSize: [3, "3.3rem", "3.4rem", "3.8rem"],
                  letterSpacing: "-.03em",
                  mt: [0, null, 3, 0],
                  mb: [3, 4, 4, 4],
                }}
              >
                <span
                  sx={{
                    color: "primary",
                    display: "block",
                    fontSize: [5, "3.1rem"],
                    mb: 2,
                  }}
                >
                  Personalized Service
                </span>{" "}
                for your Home Loan
              </h2>
              <p
                sx={{
                  fontSize: [0, 1],
                  maxWidth: ["none", "none", "90%", "82%"],
                  mb: [3, 4, 4, 4],
                }}
              >
                Buying a house is an exciting adventure, and we want to help you navigate your
                mortgage loan options so you get the right type of home loan with the best terms.{" "}
                <br /> <br />
                I’m Jimmy Vercellino, an experienced mortgage originator with Phoenix lender
                Luminate Bank. My team and I work hard to provide a timely, efficient and excellent
                home loan process for you. We serve families nationwide.
              </p>
              <button
                type="button"
                onClick={onOpenJimmyVideo}
                sx={{
                  variant: "buttons.simple",
                  mr: [0, 0, 0, 2],
                  mb: [2, 2, 2, 0],
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <FaPlayCircle sx={{ mr: 2, fontSize: "1.1em" }} />
                <span>Meet Jimmy</span>
              </button>
              <a
                href="https://connect.phxhomeloan.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ variant: "buttons.simpleAccent", display: "inline-block" }}
              >
                <span>Get Started</span>
              </a>
            </div>

            <div
              sx={{
                width: ["94%", "92%", "90%", "100%"],
                maxWidth: ["36rem", "38rem", "42rem", "none"],
                mt: [0, 0, 0, 0],
                ml: ["auto", "auto", "auto", 0],
                mr: ["auto", "auto", "auto", 0],
                pt: [2, 2, 2, 0],
                pb: [0, 0, 0, 0],
                px: [2, 2, 3, 0],
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                alignSelf: ["stretch", "stretch", "stretch", "auto"],
                position: ["static", null, null, "absolute"],
                bottom: [null, null, null, 0],
                left: [null, null, null, "15rem"],
                height: [null, null, null, "42rem"],
                zIndex: 3,
                overflow: "visible",
                "@media screen and (min-width: 1280px) and (max-width: 1439px)": {
                  height: "46rem",
                },
                "@media screen and (min-width: 1440px)": {
                  height: "49rem",
                },
              }}
            >
              <GatsbyImage
                image={portraitImage}
                alt="Jimmy Vercellino"
                sx={{
                  width: ["100%", "100%", "100%", "46rem"],
                  height: [null, null, null, "100%"],
                  maxWidth: "none",
                  ml: [0, 0, 0, 0],
                  mr: [0, 0, 0, 0],
                  "@media screen and (min-width: 1280px) and (max-width: 1439px)": {
                    width: "54rem",
                  },
                  "@media screen and (min-width: 1440px)": {
                    width: "62rem",
                  },
                }}
                imgStyle={{
                  objectFit: "contain",
                  objectPosition: "center bottom",
                }}
              />
            </div>
          </div>
        </Container>
      </BgImage>
    </>
  );
};

export default HomeHero;
