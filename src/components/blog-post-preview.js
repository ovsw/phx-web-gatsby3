/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'

import {format,parseISO} from 'date-fns'
import {Link} from 'gatsby'
import {toPlainText, truncateToWords} from '../lib/helpers' // cn, buildImageObj, getBlogUrl,
// import {imageUrlFor} from '../lib/image-url'
import BackgroundImage from 'gatsby-background-image'
// import PortableText from './portableText'

import {FaChevronRight} from 'react-icons/fa'

// gatsby plugin image imports
import {GatsbyImage} from 'gatsby-plugin-image'

function BlogPostPreview (props) {

  return (
    <div sx={{
      position: 'relative',
      display: 'flex',
      overflow: 'hidden'
    }} >

      <GatsbyImage image={props.mainImage.asset.gatsbyImageData}/>

      {/* <img
        src={imageUrlFor(buildImageObj(props.mainImage))
          .width(900)
          .height(Math.floor((16 / 12) * 900))
          // .height(400)
          .auto('format')
          .url()}
        alt={props.mainImage.alt}
        sx={{
          variant: 'utils.pin'
        }}
      /> */}

      <div className='contentWrapper' sx={{
        pt: '10rem',
        background: '-webkit-linear-gradient(top, rgba(25, 25, 25, 0.2) 10%, rgba(25, 25, 25, 0.6) 40%, rgba(25, 25, 25, 1) 90%)',
        color: 'white',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}>
        <div className='date' sx={{
          p: '1.5rem',
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 1,
          color: 'black',
          textAlign: 'right',
          '::before': {
            display: 'block',
            content: '""',
            width: '15rem',
            height: '7rem',
            position: 'absolute',
            zIndex: '-1',
            right: '-1px',
            top: '0',
            margin: '0',
            transform: 'skewY(30deg)',
            transformOrigin: '100% 0',
            bg: '#efefef'
          },
          span: {
            lineHeight: 0
          }
        }}
        >
          <span sx={{fontSize: 4, fontWeight: 'bold'}}>
            {format((props.publishedAt), 'D')}<br />
          </span>
          <span sx={{fontSize: 2, textTransform: 'uppercase', position: 'relative', top: '-8px'}}>
            {format(props.publishedAt, 'MMM')}
          </span>
        </div>
        <div sx={{padding: 4, pt: 0, p: {fontSize: 0, m: 0}}}>
          <h4 sx={{fontFamily: 'heading', mt: 0, textShadow: '0 0 5px rgba(0,0,0,.5)'}}>
            <Link to={`/${props.slug.current}/`} sx={{textDecoration: 'none', color: 'white', fontSize: 3, lineHeight: 1}}>{props.title}</Link>
          </h4>
          <span sx={{variant: 'text.superHeading', a: {fontSize: 0, color: 'white', textDecoration: 'none'}, mb: 3}}>
            <Link to={`/${props.slug.current}/`}>{props.categories[0].title}</Link>
          </span>
          {props._rawExcerpt && (
            <p>
              {truncateToWords(toPlainText(props._rawExcerpt), 25)}
              {/* <PortableText blocks={props._rawExcerpt} /> */}
              <br />
              <Link to={`/${props.slug.current}/`} sx={{color: 'primary', textDecoration: 'none', fontWeight: 'bold', fontFamily: 'heading', ':hover': {color: 'white'}}}>Read More <span sx={{fontSize: '0.7em'}}><FaChevronRight /></span></Link>
            </p>
          )}
        </div>
      </div>
      {/* end content wrapper */}

    </div>
  )
}

export default BlogPostPreview
