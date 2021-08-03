import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import {toPlainText} from '../lib/helpers'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import TwoColumnsRightSidebar from '../components/two-columns-right-sidebar'
import BlogPost from '../components/blog-post'
import Sidebar from '../components/sidebar'
import BlogPageHeader from '../components/blog-page-header'

const BlogPostTemplate = props => {
  const {data, errors, location} = props
  const post = data && data.post
  return (
    <Layout>
      {errors && <SEO seoTitle='GraphQL Error' />}
      {post && <SEO seoTitle={post.seoTitle || post.title || 'Untitled'} description={post.seoDescription || toPlainText(post._rawExcerpt)} image={post.mainImage} slug={post.slug.current} noIndex={post.seoNoIndex != null} />}

      {errors && (
        <>
          <GraphQLErrorList errors={errors} />
        </>
      )}

      {post && <TwoColumnsRightSidebar
        path={location.pathname}
        header={<BlogPageHeader title='Blog' />}
        mainContent={<BlogPost {...post} />}
        sidebarContent={<Sidebar />}
      />
      }
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      id
      seoTitle
      seoDescription
      seoNoIndex
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`
