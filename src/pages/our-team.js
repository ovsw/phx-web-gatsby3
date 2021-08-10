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
      <SEO seoTitle="Vercellino Team | Phoenix Mortgage Lender" description="The truly dedicated Vercellino Team is passionate about helping homebuyers take advantage of Home Loan benefits in Phoenix, AZ. Contact our team now." slug="our-team"/>
      <InnerPageHeader />
      <HomeTeam />      
    </Layout>
  )
}

export default TeamPage


