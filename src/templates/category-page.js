import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import TwoColumnsRightSidebar from "../components/two-columns-right-sidebar";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import Sidebar from "../components/sidebar";
import InnerPageHeader from "../components/inner-page-header";

// import {toPlainText} from '../lib/helpers'

const CategoryPageTemplate = (props) => {
  const {
    data,
    errors,
    pageContext: { catCurrentPage, catNumPages, categorySlug },
    location,
  } = props;
  const page = data && data.page;

  const posts = data && data.posts;

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <Layout>
      {errors && <SEO seoTitle="GraphQL Error" />}
      {page && (
        <SEO
          seoTitle={page.seoTitle || page.title || "Untitled"}
          description={page.seoDescription || ""}
          slug={categorySlug}
        />
      )}

      {errors && (
        <>
          <GraphQLErrorList errors={errors} />
        </>
      )}

      {posts && (
        <TwoColumnsRightSidebar
          title={page.title}
          path={location.pathname}
          header={<InnerPageHeader title={page.title} />}
          mainContent={
            <BlogPostPreviewList
              title="Category Posts"
              rootSlug={categorySlug}
              nodes={postNodes}
              currentPage={catCurrentPage}
              numPages={catNumPages}
            />
          }
          sidebarContent={<Sidebar />}
        />
      )}
    </Layout>
  );
};

export default CategoryPageTemplate;

export const query = graphql`

  query CategoryPageTemplateQuery($categoryId: String!, $skip: Int!, $limit: Int!) {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { categories: { elemMatch: { id: { eq: $categoryId } } } }
      limit: $limit
      skip: $skip
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
              gatsbyImageData(width: 384, fit: FILLMAX, placeholder: BLURRED)
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
    page: sanityCategory(id: { eq: $categoryId }) {
      title
      seoTitle
      seoDescription
    }
  }
`;
