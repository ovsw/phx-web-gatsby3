import {useStaticQuery, graphql} from 'gatsby'
export const useSiteTeam = () => {
  const {teamMembers} = useStaticQuery(graphql`
    query{
          teamMembers: allSanityPerson(
            sort: { fields: [order], order: ASC }
          ) {
          edges {
            node {
              name
              role
              email
              phone
              nmls
              _rawBio
              mainImage {
                alt
                asset {
                  gatsbyImageData(width: 384, fit: FILLMAX, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
  `)
  return teamMembers
}
