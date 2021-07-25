require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

// const path = require(`path`)

const config = require("./config/website");

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: `PHX Home`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    defaultImage: "/images/jimmy-vercellino-phx-home-loans-banner.jpg",
    siteUrl: config.siteUrl,
    siteNav: [
      // {
      //   title: 'Home',
      //   slug: '/',
      //   children: []
      // },
      {
        title: "Apply",
        slug: "/apply/",
        children: [],
      },
      {
        title: "About us",
        slug: "#",
        children: [
          {
            title: "Our Team",
            slug: "/our-team/",
          },
          {
            title: "Jimmy's Story",
            slug: "/phoenix-loan-originator/",
          },
        ],
      },
      {
        title: "Loan Information",
        slug: "#",
        children: [
          {
            title: "Loan Options",
            slug: "/types-of-mortgage-loans/",
          },
          {
            title: "Refinancing",
            slug: "/refinance-home-loan/",
          },
          {
            title: "What is Mortgage Insurance (PMI)",
            slug: "/private-mortgage-insurance-pmi/",
          },
        ],
      },
      {
        title: "Types of Loans",
        slug: "#",
        children: [
          // {
          //   title: 'Adjustable Rate Mortgage',
          //   slug: '/phoenix-adjustable-rate-mortgage/'
          // },
          {
            title: "Conventional Loan",
            slug: "/phoenix-conventional-loan/",
          },
          {
            title: "FHA Loan",
            slug: "/phoenix-fha-loan/",
          },
          {
            title: "Jumbo Loan",
            slug: "/phoenix-jumbo-loan/",
          },
          {
            title: "Construction-to-Permanent Loan",
            slug: "/phoenix-construction-to-permanent-loan/",
          },
          // {
          //   title: 'USDA Loan',
          //   slug: '/phoenix-usda-loan/'
          // },
          {
            title: "VA Loan",
            slug: "/phoenix-va-loan/",
          },
        ],
      },
      {
        title: "Blog",
        slug: "/blog/",
        children: [
          {
            title: "Types of Loans",
            slug: "/types-of-loans/",
          },
          {
            title: "Personal Finances",
            slug: "/personal-finances/",
          },
          {
            title: "Requirements",
            slug: "/requirements/",
          },
          {
            title: "Benefits of Buying Now",
            slug: "/benefits-of-buying-now/",
          },
          {
            title: "Buyer Education",
            slug: "/buyer-education/",
          },
          // {
          //   title: 'Realtor Information',
          //   slug: '/realtor-information/'
          // }
        ],
      },
      {
        title: "Media",
        slug: "/media/",
        children: [],
      },
      {
        title: "Contact",
        slug: "/contact/",
        children: [],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PHX Home Loans`,
        short_name: `PHX Home Loans`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#e49f37`,
        display: `minimal-ui`,
        icon: `src/images/goldwater-bank-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // {
    //   resolve: "gatsby-plugin-next-seo",
    //   options: {
    //     openGraph: {
    //       type: "website",
    //       locale: "en_IE",
    //       url: "https://phxhomeloan.com/",
    //       site_name: "Phoenix Mortgage Lenders Jimmy V NMLS# 184169",
    //     },
    //     twitter: {
    //       handle: "@phxhomeloan",
    //       site: "@phxhomeloan",
    //       cardType: "summary_large_image",
    //     },
    //   },
    // },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-110965058-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // sampleRate: 5,
        // siteSpeedSampleRate: 10
      },
    },
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-netlify",
  ],
};
