/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {format} from 'date-fns' // distanceInWords, differenceInDays
// import {buildImageObj, imageUrlFor} from '../lib/helpers'
import PortableText from './portableText'
import SocialLinks from './social-links'
// import Container from './container'
// import AuthorList from './author-list'

// import styles from './blog-post.module.css'

function BlogPost (props) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt} = props
  return (
    <>
      <h1 sx={{mt: 0}}>{title}</h1>
      <div className='in-blog-metatop' sx={{color: 'textMuted'}}>
        <span> Published on: {format(publishedAt, 'MMMM Do, YYYY')} | Written by Jimmy Vercellino</span>

      </div>
      {/* <img style={{margin: '0 auto 2rem', display: 'block', width: '80%'}}
        src={imageUrlFor(buildImageObj(mainImage))
          .width(350)
          .height(300)
          .fit('crop')
          .auto('format')
          .url()}
        alt={mainImage.alt}
      /> */}
      {_rawBody && <PortableText blocks={_rawBody} />}

      <div className='in-blog-metabottom mt-30'>
        {/* <span><a href='#'><i className='zmdi zmdi-favorite-outline' /> Like : 08</a> / <a href='#'><i className='zmdi zmdi-comment-outline' />Comment</a></span> */}
        <span style={{color: 'red'}}>
          {categories.map(category => (
            <span key={category._id}>{category.title} </span>
          ))}
          {/* <br />
                      Tags: */}
        </span>
      </div>

      <ul className='author-socialicons' sx={{variant: 'lists.reset', mt: 3, li: {display: 'inline-block'}, a: {fontSize: 4, color: 'black', mr: 2}}}>
        <SocialLinks />
      </ul>

      {/* <div className='admin-author-details pt-5'>
        <h4 className='mb-30'>Author</h4>

        <div className='admin-aouthor'>
          <div className='admin-image'>
            <img src='/images/blog/author-image/author-image-1.png' alt='' />
          </div>
          <div className='admin-info'>
            <div className='name'>
              <h5>Jimmy Vercellino</h5>
              <p>Mortgage Originator, Specializing in VA Loans</p>
            </div>

            <p>Jimmy Vercellino, a Marine veteran, specializes in helping military veterans benefit from the VA Loan Program and buy the home of their dreams.</p>
            <ul className='author-socialicons'>
              <SocialLinks />
            </ul>
          </div>
        </div>

      </div> */}
      {/* <!-- blog-details-wrapper -->   */}

    </>
  )
}

export default BlogPost
