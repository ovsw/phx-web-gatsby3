/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'

function HomeFAQs (props) {

  return (

    <section sx={{variant: 'sections.hpSection', bg: '#fdf9f2'}}>
      <Container>
        <div sx={{mb: 5}}>
          <span sx={{variant: 'text.superHeading'}}>Some</span>
          <h2 sx={{variant: 'text.mainHeading', mb: 0}}> Frequently Asked <span sx={{color: 'primary'}}>Questions</span></h2>
        </div>

        <div sx={{h3: {mb: 0}, p: {mt: 2, mb: 4}}}>
          <ul className='faqs'>
            <li><h3>What Are the Types of Home Loans Available?</h3>
              <p>For most mortgage borrowers, there are three major loan types: conventional, FHA and VA. Which one you choose depends upon your down payment, credit record, military service and other factors. We can help you determine which is the best option for you.</p>
            </li>
            <li><h3>What is a Conventional Mortgage?</h3>
              <p>A conventional mortgage is a home loan is the most typically used home loan. It conforms to the loan limits set forth by Freddie Mac and Fannie Mae, and is not guaranteed or insured by the federal government. You can get a conventional loan at a fixed or adjustable rate.</p>
            </li>
            <li><h3>What is an FHA Mortgage?</h3>
              <p>An FHA home mortgage loan is often used for first time home buyers, but is available to anyone. The down payment is only 3.5%, and accepts lower credit scores than conventional loans. The interest rate will be higher, but qualifying for the loan is easier.</p>
            </li>
          </ul>

        </div>
      </Container>
    </section>
  )
}

export default HomeFAQs
