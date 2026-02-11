/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {Link, useStaticQuery, graphql} from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";

import SocialLinks from './social-links'

import {FaGlobeAmericas, FaPhone, FaEnvelope} from 'react-icons/fa'

const Footer = () => {

  return (
    <footer >
      <div sx={{
        backgroundColor: 'primary',
        //background: 'linear-gradient(to right, #ebb745 0%, #dd8729 100%)',
         color: 'white', fontSize: 0, p: {my: 0}}}>
        <Container sx={{
          display: 'flex',
          flexWrap: ['wrap', null, null, 'nowrap'],
          pt: 5,
          pb: 2,
          a: {textDecoration: 'none',
            color: 'white'
          },
          '.footerColumn': {
            pb: [4, 4, 4, 0]          }
        }}>
          <div className='footerColumn' sx={{width: ['full', null, null, '4/12'], pt: 0}}>
            <StaticImage
              src="../images/new-logos/JimmyVercillino_LuminateBank_Stacked.png"
              width={300}
              placeholder="none"
              alt="The Highly Motivated Vercellino Team, a division of Luminate Bank logo"
              imgStyle={{objectFit: "contain"}}
              sx={{
                display: "inline-block",
                lineHeight: 0,
                maxWidth: ["160px", "210px"],
                mt: 0,
                mb: "1rem",
              }}
            />
            <p>NMLS ID 477166</p>
            <p>Call: <a href="tel:6029085849">602-908-5849</a></p>
            <p>3602 E Campbell Ave, <br />Phoenix AZ 85018</p>

          </div>

          <div className='footerColumn' sx={{
            width: ['full', null, null, '4/12'],
            px: [0, null, null, 4],
            li: {
              py: 1,
              a: {
                textDecoration: 'underline'
              }
            }
          }}>
            <p sx={{variant: 'text.superHeading', '::before': {borderTopColor: 'white'}, color: 'white'}}>Useful Resources</p>
            <ul className='footer-nav' sx={{ paddingLeft: 3}}>
              <li><Link to='/types-of-mortgage-loans/'>Types of Mortgage Loans</Link></li>
              <li><Link to='/phoenix-conventional-loan/'>Conventional Loan</Link></li>
              <li><Link to='/phoenix-fha-loan/'>FHA Loan</Link></li>
              <li><Link to='/phoenix-jumbo-loan/'>Jumbo Loan</Link></li>
              <li><Link to='/phoenix-construction-to-permanent-loan/'>Construction-to-Permanent Loan</Link></li>
              <li><Link to='/phoenix-va-loan/'>VA Loan</Link></li>
              <li><Link to='/refinance-home-loan/'>Mortgage Refinancing</Link></li>
              <li><Link to='/private-mortgage-insurance-pmi/'>Mortgage Insurance</Link></li>
            </ul>
          </div>

          <div className='footerColumn' sx={{
            width: ['full', null, null, '4/12'],
            px: 2
          }}>
            <p sx={{variant: 'text.superHeading', '::before': {borderTopColor: 'white',width: '20px'}, color: 'white'}}>Contact Jimmy</p>
            <h4 sx={footerHeaderStyles}>Jimmy Vercellino</h4>
            <p>NMLS# 184169</p>
            <ul sx={{variant: 'lists.reset', mt: 4, li: {mt: 2}, svg: {color: 'black'}}}>
              <li><a href='tel:480-800-8387'><FaPhone /> 480-800-8387</a></li>
              {/* <li><a href='tel:18775051281'><FaPhone /> 1-877-505-1281</a></li> */}
              <li><a href='mailto:jimmy.vercellino@goluminate.com'><FaEnvelope /> jimmy.vercellino@goluminate.com</a></li>
              <li><a href='https://phxhomeloan.com/'><FaGlobeAmericas /> phxhomeloan.com</a></li>
            </ul>
            <ul sx={{
              variant: 'lists.reset',
              pt: 4,
              display: 'flex',
              li: {
                fontSize: 5,
                mr: 3,
                a: {
                  color: 'black',
                  ':hover': {
                    color: 'white'
                  }
                }
              }
            }}>
              <SocialLinks />
            </ul>
          </div>
        </Container>
        <Container sx={{pb: 5}}>
        <div className='footerColumn' sx={{
            
           
          }}>
            <p sx={{variant: 'text.superHeading', '::before': {borderTopColor: 'white'}, color: 'white'}}>Important</p>
            {/* <h4 sx={footerHeaderStyles}>Important Information about Procedures for Opening a New Account.</h4>
            <p sx={{color: '#fff6dd'}}> To help the government fight the funding of terrorism and money laundering activities, Federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account (e.g., establishes a formal relationship by means of a loan application). What this means for you: When you open an account, we will ask for your name, address, date of birth, and other information that will allow us to identify you. We may also ask to see your driver's license or other identifying documents.</p>
          */}
          <p sx={{color: '#fff6dd'}}>This is not an offer to enter into an agreement. Not all customers will qualify. Information, rates and programs are subject to change without notice. All products are subject to credit and property approval. Other restrictions and limitations may apply. Equal Housing Lender.</p>

            <p sx={{pt: 3}}>
              <a href='http://www.nmlsconsumeraccess.org/' title='NML Consumer Access' rel='noopener noreferrer' style={{marginRight: '1rem'}}><img src='/images/logo/ico2.png' alt='NML Consumer Access Logo' /></a>
              <img src='/images/logo/equal-housing-opportunity-logo.png' alt='Equal Housing Opportunity Logo' title='Equal Housing Opportunity Logo' />
            </p>
          </div>
        </Container>
      </div>

      <div sx={{bg: 'black', color: 'white', textAlign: 'center', py: 1, fontSize: 0}}>
        <Container>
          <p>Copyright &copy; 2019-{new Date().getFullYear()} &nbsp;
          Luminate Bank, Member FDIC. NMLS ID 477166. Call:<a href="tel:18775051281" sx={{color: 'primary'}}>1-877-505-1281</a>. All rights reserved.&nbsp;
          {/* Luminate Bank*/}
          | Website by <a href='https://ovswebsites.com' target='_blank' sx={{color: '#ff5071'}}>OVS Websites</a>.</p>
        </Container>

      </div>
    </footer>

  )
}

export default Footer

const footerHeaderStyles = {
  color: 'black',
  fontSize: 2,
  my: 3,
  lineHeight: '1.45'
}
