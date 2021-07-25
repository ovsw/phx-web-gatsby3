import React from 'react'
// import Img from 'gatsby-image'
// import {getFluidGatsbyImage} from 'gatsby-source-sanity'
// import clientConfig from '../../../client-config'

import {buildImageObj} from '../../lib/helpers' // cn
import {imageUrlFor} from '../../lib/image-url'

export default ({node}) => {
  const thumbSize = {width: 800, height: 400}
  const imageUrl = imageUrlFor(buildImageObj(node))
    .width(thumbSize.width)
    // .height(Math.floor((9 / 16) * 600))
    // .height(thumbSize.height)
    .auto('format')
    .url()
  return (
    <img src={imageUrl} className='contentImage landscape2' />
  )
}

// export default ({node}) => {
//   // console.log(node.asset.metadata.dimensions.width)
//   let fluidProps = getFluidGatsbyImage(
//     node.asset._id,
//     {maxWidth: 730},
//     clientConfig.sanity
//   )

//   let imageClassName = 'contentImage'

//   if (node.asset.metadata.dimensions.width < 700) {
//     fluidProps = getFluidGatsbyImage(
//       node.asset._id,
//       {maxWidth: 400},
//       clientConfig.sanity
//     )
//     imageClassName = imageClassName + ' small'
//   }

//   if (node.asset.metadata.dimensions.aspectRatio > 1) { imageClassName = imageClassName + ' landscape' } else { imageClassName = imageClassName + ' portrait' }

//   return (
//     <figure className={imageClassName}>
//       <Img fluid={fluidProps} alt={node.alt} />
//       <figcaption>{node.caption}</figcaption>
//     </figure>
//   )
// }
