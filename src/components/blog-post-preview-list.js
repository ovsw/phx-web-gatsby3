/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import BlogPostPreview from './blog-post-preview'
import Pagination from './pagination'
// import { GatsbySeo } from 'gatsby-plugin-next-seo'

function BlogPostPreviewList ({nodes, currentPage, numPages, rootSlug}) {
  const showPagination = !(numPages < 2)

  return (
    <>
      
      {/* <h2 className={styles.headline}>{props.title}</h2> */}
      {showPagination && <Pagination currentPage={currentPage} numPages={numPages} rootSlug={rootSlug} />}
      <div sx={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {nodes &&
          nodes.map(node => (
            <div key={node.id} sx={{
              width: ['full', null, null, '1/2'],
              maxWidth: ['none', null, '600px', 'none'],
              mx: [0, 0, 'auto', 0],
              display: 'flex',
              pr: 2,
              pb: 2,
              '&:nth-of-type(even)': {
                pr: 0
              }}}>
              <BlogPostPreview {...node} largeThumbs />
            </div>
          ))
        }
      </div>
      {showPagination && <Pagination currentPage={currentPage} numPages={numPages} rootSlug={rootSlug} />}
    </>
  )
}

BlogPostPreviewList.defaultProps = {
  title: '',
  nodes: []
}

export default BlogPostPreviewList
