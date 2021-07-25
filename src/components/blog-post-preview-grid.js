/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {Link} from 'gatsby'
import BlogPostPreview from './blog-post-preview'

import {FaArrowCircleRight} from 'react-icons/fa'

function BlogPostPreviewGrid (props) {
  return (

    <section sx={{variant: 'sections.hpSection'}}>
      <Container>
        <div sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', mb: 5}}>
          <div sx={{width: ['full', null, null, '1/2']}}>
            <span sx={{variant: 'text.superHeading'}}>
          Latest News
            </span>
            <h2 sx={{variant: 'text.mainHeading', mb: 0}}>From our <span sx={{color: 'primary'}}>Blog</span></h2>
          </div>
          <div sx={{width: ['full', null, null, '1/2'], textAlign: 'right', mt: [4, null, null, 0]}}>
            <Link to='/blog/' sx={{variant: 'buttons.simpleAccent', fontSize: 0}}><span>More from our blog  &nbsp;<FaArrowCircleRight style={{verticalAlign: 'middle'}} /></span></Link>
          </div>
        </div>

        <div className='newsItemsContainerFlex' sx={{
          display: 'flex',
          flexWrap: ['wrap', null, null, 'nowrap'],
          px: [0, 0, '10rem', 0],
          '> div': {
            mr: [null, null, null, 4],
            mb: [4, null, null, 0]
          },

          '> div:last-child': {
            mr: 0
          }
        }}>

          {props.nodes &&
          props.nodes.map((node, i) => {
            if (i === 0) {
              return (
                <BlogPostPreview {...node} key={node.id} />
              )
            } else {
              return (
                <BlogPostPreview {...node} key={node.id} />
              )
            }
          })}

        </div>

      </Container>
    </section>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
