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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WZCLNW8",
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    },
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
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: [
          '/blog/2/',
          '/blog/3/',
          '/blog/4/',
          '/blog/5/',
          '/blog/6/',
          '/blog/7/',
          '/blog/8/',
          '/blog/9/',
          '/blog/10/',
          '/blog/11/',
          '/blog/12/',

          '/types-of-loans/2/',
          '/types-of-loans/3/',
          '/types-of-loans/4/',
          '/types-of-loans/5/',
          '/types-of-loans/6/',
          '/types-of-loans/7/',
          '/types-of-loans/8/',
          '/types-of-loans/9/',
          '/types-of-loans/10/',
          '/types-of-loans/11/',
          '/types-of-loans/12/',

          '/personal-finances/2/',
          '/personal-finances/3/',
          '/personal-finances/4/',
          '/personal-finances/5/',
          '/personal-finances/6/',
          '/personal-finances/7/',
          '/personal-finances/8/',
          '/personal-finances/9/',
          '/personal-finances/10/',

          '/requirements/2/',
          '/requirements/3/',
          '/requirements/4/',
          '/requirements/5/',
          '/requirements/6/',
          '/requirements/7/',
          '/requirements/8/',
          '/requirements/9/',
          '/requirements/10/',

          '/benefits-of-buying-now/2/',
          '/benefits-of-buying-now/3/',
          '/benefits-of-buying-now/4/',
          '/benefits-of-buying-now/5/',
          '/benefits-of-buying-now/6/',
          '/benefits-of-buying-now/7/',
          '/benefits-of-buying-now/8/',
          '/benefits-of-buying-now/9/',
          '/benefits-of-buying-now/10/',

          '/buyer-education/2/',
          '/buyer-education/3/',
          '/buyer-education/4/',
          '/buyer-education/5/',
          '/buyer-education/6/',
          '/buyer-education/7/',
          '/buyer-education/8/',
          '/buyer-education/9/',
          '/buyer-education/10/',
          '/buyer-education/11/',
          '/buyer-education/12/',
     
        ],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              edges {
                node {
                  path
                  context {
                    seoNoIndex
                  }
                }
              }
            }
          }
        `,
        serialize: ({site, allSitePage}) => {
          return allSitePage.edges
            .filter(({node}) => (
              node.context.seoNoIndex !== true
            ))
            .map(({node}) => {
              return {
                url: site.siteMetadata.siteUrl + node.path,
                changefreq: 'daily',
                priority: 0.7
              }
            })
        },
      }
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "UA-110965058-1",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: true,
    //     // sampleRate: 5,
    //     // siteSpeedSampleRate: 10
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-110965058-1", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          // anonymize_ip: true,
          // cookie_expires: 0,
          send_page_view: true,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: false,
          send_page_view: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-netlify",
  ],
};
