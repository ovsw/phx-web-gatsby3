/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'

// import styles from './blog-post.module.css'

function GenericPage ({title, header, children, mainContent, sidebarContent}) {
  return (
    <>
      {header}
      <section sx={{py: [4, null, null, 5]}}>
        <Container sx={{
          display: 'flex',
          flexWrap: 'wrap'
        }}>
          <div sx={{
            width: ['full', null, null, '2/3']
          }}>
            {mainContent}
          </div>

          <div sx={{
            width: ['full', null, null, '1/3']
          }}>
            {sidebarContent}
          </div>

        </Container>
      </section>

    </>
  )
}

export default GenericPage
