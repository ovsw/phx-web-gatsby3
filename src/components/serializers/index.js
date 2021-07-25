/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'

import {Link} from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

import Figure from './Figure'
import Table from './Table'
import Embed from './Embed'

import {GoLinkExternal} from 'react-icons/go'

import config from '../../../config/website'

const YTopts = {
  width: '100%',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    modestbranding: 1,
    rel: 0
  }
}

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    youtube: ({node}) => {
      const {url} = node
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} opts={YTopts} />)
    },
    mytable: Table,
    iframeEmbed: Embed
  },
  marks: {
    button: props => {
      const url = props.mark.href
      const isExternal = isAbsoluteURL(url)
      if (isExternal) {
        return <a href={url} rel='noopener noreferrer' target='_blank' className='contentButton'><span>{props.children}<GoLinkExternal /></span></a>
      } else {
        return <Link to={url} activeClassName='active' className='contentButton'><span>{props.children}</span></Link>
      }
    },
    link: ({mark, children}) => {
      // Read https://css-tricks.com/use-target_blank/
      const {blank, href} = mark
      const isExternal = isAbsoluteURL(href)
      if (isExternal) {
        return <a href={href} className='externalLink' rel='noopener noreferrer' target='_blank'>{children}</a>
        // return blank
        //   ? <a href={href} className='externalLink' rel='noopener noreferrer' target='_blank'>{children}</a>
        //   : <a href={href}>{children}</a>
      } else {
        if (href.charAt(0) === '/') {
          return <a href={`${config.siteUrl}${href}`}>{children}</a>
        } else {
          return <a href={href}>{children}</a>
        }
      }
    }
  }
}

export default serializers
