import {useStaticQuery, graphql} from 'gatsby'
export const useSiteMetadata = () => {
  const {site} = useStaticQuery(graphql`
    query{
      site {
        siteMetadata {
          title
          description
          defaultImage
          siteUrl
          siteUrl
          siteNav {
            title
            slug
            children{
              title
              slug
            }
          }
        }
      }
    }
  `)
  return site.siteMetadata
}
