import {useStaticQuery, graphql} from 'gatsby'
export const useSiteSettings = () => {
  const {sanitySiteSettings} = useStaticQuery(graphql`
    query{
      sanitySiteSettings {
        description
        title
      }
    }
  `)
  return sanitySiteSettings
}
