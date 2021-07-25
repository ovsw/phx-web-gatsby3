import React from 'react'
import {FaTwitterSquare, FaLinkedinIn, FaFacebookSquare, FaInstagram, FaYoutubeSquare} from 'react-icons/fa'
import {IoLogoGoogle} from 'react-icons/io'

const SocialLinks = () => {
  return (
    <>
      <li><a href='https://www.youtube.com/channel/UCmSqQXiy5BIxh-hZYp_RDWw'rel='noopener noreferrer' target='_blank' title='YouTube'><FaYoutubeSquare /></a></li>
      <li><a href='https://twitter.com/phxhomeloan'rel='noopener noreferrer' target='_blank' title='Twitter'><FaTwitterSquare /></a></li>
      <li><a href='https://www.linkedin.com/in/jimmy-vercellino-29060930/' rel='noopener noreferrer' target='_blank' title='LinkedIn'><FaLinkedinIn /></a></li>
      <li><a href='http://www.facebook.com/TheVercellinoTeam'rel='noopener noreferrer' target='_blank' title='Facebok'><FaFacebookSquare /></a></li>
      <li><a href='https://www.instagram.com/jimmyvercellino_/' rel='noopener noreferrer' target='_blank' title='Instagram'>{<FaInstagram />}</a></li>
      <li><a href='https://www.google.com/maps/uv?hl=en&pb=!1s0x872b74ce3a1f36a7%3A0x64772747e819f813!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMm2fmD7HPPGlxUhUJt7W2TUyB3UgIoESnBJlaE%3Dw160-h160-k-no!5sphxhomeloan%20-%20Google%20Search!15sCAQ&imagekey=!1e10!2sAF1QipMw5F1B_cDEiMlXBd0OFYdGSq2ov7QQYB95Zmfv&sa=X&ved=2ahUKEwiunsWyl9joAhWmtYsKHTZcCqoQoiowE3oECB4QBg' rel='noopener noreferrer' target='_blank' title='Google My Business'>{<IoLogoGoogle />}</a></li>
    </>
  )
}

export default SocialLinks
