/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {mapEdgesToNodes} from '../lib/helpers'
import HomeTeamItem from './HomeTeamItem'

import {useSiteTeam} from '../hooks/use-team'

const HomeTeam = () => {
  const teamNodes = (useSiteTeam() || {})
    ? mapEdgesToNodes(useSiteTeam())
    : []
  return (
    <section sx={{
      variant: 'sections.hpSection'
    }}>
      <Container>
        <span sx={{variant: 'text.superHeading'}}>The Highly Motivated</span>
        <h2 sx={{variant: 'text.mainHeading', mb: 4}}>Vercellino <span sx={{color: 'primary'}}>Team</span></h2>

        <div sx={{
          display: 'flex',
          flexWrap: 'wrap'
        }}>
          {teamNodes.map(teamMember => (
            <div className="satefut"  key={teamMember.name} sx={{
              width: ['full', null, null, '1/2'],
              px: [0, null, null, 2, 3],
              mb: [3, null, null, 4],
              display: 'flex'
              // bg: 'red'
            }}>
              
              <HomeTeamItem {...teamMember} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default HomeTeam
