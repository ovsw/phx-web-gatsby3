/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {graphql} from 'gatsby'


import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import GraphQLErrorList from '../components/graphql-error-list'

import SEO from '../components/seo'
import Layout from '../containers/layout'
// import {Helmet} from 'react-helmet'

import Hero from '../components/HomeHero'
import HomeVideo from '../components/HomeVideo'
import CTASection from '../components/CTASection'
import Services from '../components/HomeServices'
import Testimonials from '../components/HomeTestimonials'
import HomeFAQs from '../components/HomeFAQs'


// import Image from "../components/image"

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
      />

      <Hero />
      <Services />
      <CTASection buttonText='Try it Now' link='/mortgage-calculator/'>
        <h2 sx={{fontSize: [4, null, null, 6], my: 0}}>Mortgage <span sx={{color: 'primary'}}> Calculator</span></h2>
        <p sx={{mt: 1}}>find out what you can expect to pay for your home loan</p>
      </CTASection>

      <HomeVideo />

      {/* <Testimonials /> */}

      {/* <Container>

        <Link to='/contact-me/' sx={{variant: ['buttons.simpleAccent']}}>
          <span>Contact</span>
        </Link>
      </Container> */}

      {postNodes && (
        <BlogPostPreviewGrid
          title='From our Blog'
          nodes={postNodes}
          browseMoreHref='/blog/'
        />
      )}

      <HomeFAQs />
      <CTASection  buttonText='Learn More' link='/jimmy-vercellino-awarded-top-1-percent-mortgage-originators-in-us-2019/'>
        <h2 sx={{fontSize: [4, null, null, 6], my: 0, fontStyle: 'italic'}}>"<span sx={{color: 'primary'}}>TOP 1%</span> Mortgage Loan Originators"</h2>
        <p sx={{mt: 1, ml: 3}}> - in US 2019, according to Mortgage Executive Magazine</p>
      </CTASection>
    </Layout>
  )
}

export default IndexPage


export const query = graphql`
  

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
    }
    posts: allSanityPost(
      limit: 3
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          categories {
            title
          }
          publishedAt
          mainImage {
            alt
            asset {
              gatsbyImageData(height: 100, fit: FILLMAX, placeholder: BLURRED)
            }
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`
