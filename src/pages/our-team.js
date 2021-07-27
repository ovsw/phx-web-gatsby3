import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import GenericPageContent from '../components/generic-page-content'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import TwoColumnsRightSidebar from '../components/two-columns-right-sidebar'
import Sidebar from '../components/sidebar'
import InnerPageHeader from '../components/inner-page-header'


import HomeTeam from '../components/HomeTeam'

// import {toPlainText} from '../lib/helpers'

const TeamPage = props => {

  return (
    <Layout>
      <SEO seoTitle="Our Team" description="The truly dedicated, hightly motivated Vercellino Team" slug="/our-team/"/>
      <InnerPageHeader />
      <HomeTeam />      
    </Layout>
  )
}

export default TeamPage


