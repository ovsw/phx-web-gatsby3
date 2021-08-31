/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import {imageUrlFor} from '../lib/image-url'
import {buildImageObj} from '../lib/helpers'

// import { GatsbySeo, LocalBusinessJsonLd } from 'gatsby-plugin-next-seo'

// JSON+LD schemas
import {localBusinessSchema} from './schemas'

import {useSiteMetadata} from '../hooks/use-site-metadata'
import {useSiteSettings} from '../hooks/use-site-settings'


function SEO({ seoTitle, description, lang = 'en', slug = '', image, noIndex = false }) {
  // grab default values from gatsby config
  const siteMetadata = useSiteMetadata()
  const {defaultImage, siteUrl} = siteMetadata

  // grab site settings from CMS
  const siteSettings = useSiteSettings()
  const {title: settingsTitle, description: settingsDescription} = siteSettings

  // default to default values
  const seoTitleComputed = seoTitle || settingsTitle
  const seoDescriptionComputed = description || settingsDescription

  // seoImage
  const seoImage = (image && image.asset) ? imageUrlFor(buildImageObj(image)).width(1200).url() : `${siteUrl}/images/jimmy-vercellino-phx-home-loans-banner.jpg`

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{seoTitleComputed}</title>
        <meta name="description" content={seoDescriptionComputed} />

        {noIndex && <meta name='robots' content='noindex' />}

        <meta name="image" content={seoImage} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={`${siteUrl}/${slug}${slug ? "/" : ""}`} />
        <meta property="og:site_name" content="Phoenix Mortgage Lenders Jimmy V NMLS# 184169" />
        <meta property="og:title" content="Phoenix Mortgage Lenders Jimmy V NMLS# 184169" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={seoDescriptionComputed} />
        <meta property="og:image" content={seoImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@phxhomeloan" />
        <link rel="canonical" href={`${siteUrl}/${slug}${slug ? "/" : ""}`} />

        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
    </>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.object,
  slug: PropTypes.string,
}

export default SEO
