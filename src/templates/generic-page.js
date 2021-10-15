import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import GenericPageContent from '../components/generic-page-content'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import TwoColumnsRightSidebar from '../components/two-columns-right-sidebar'
import Sidebar from '../components/sidebar'
import InnerPageHeader from '../components/inner-page-header'

// import {toPlainText} from '../lib/helpers'

const GenericPageTemplate = props => {
  const {data, errors, location} = props
  const page = data && data.page

  return (
    <Layout>
      {errors && <SEO seoTitle='GraphQL Error' />}
      {page && <SEO seoTitle={page.seoTitle || page.title } description={page.seoDescription || ''} slug={page.slug.current} noIndex={page.seoNoIndex}/>}

      {errors && (
        <>
          <GraphQLErrorList errors={errors} />
        </>
      )}
      
      {page &&
      <TwoColumnsRightSidebar
        title={page.title}
        path={location.pathname}
        header={<InnerPageHeader title={page.title} />}
        mainContent={<GenericPageContent {...page} />}
        sidebarContent={<Sidebar />}
      />
      }
    </Layout>
  )
}

export default GenericPageTemplate

export const query = graphql`
  query GenericPageTemplateQuery($id: String!) {
    page: sanityPage(id: {eq: $id}) {
      id
      seoTitle
      seoDescription
      seoNoIndex
      title
      slug {
        current
      }
      _rawBody(resolveReferences: {maxDepth: 5})
    }
  }
`
