/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'

// import {buildImageObj} from '../lib/helpers'
// import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

// import styles from './blog-post.module.css'

function GenericPage (props) {
  const {_rawBody} = props
  return (
    <>
      <div sx={{variant: 'styles', 'h2:first-child': {mt: 0}}} role='main'>
        {_rawBody && <PortableText blocks={_rawBody} />}
      </div>

      {/* <div className='meta-bottom'> */}
      {/* <span>
        <a href='#'><i className='zmdi zmdi-favorite-outline' /> Like : 08</a> /
        <a href='#'><i className='zmdi zmdi-comment-outline' />Comment</a></span> */}
      {/* </div> */}

    </>
  )
}

export default GenericPage
