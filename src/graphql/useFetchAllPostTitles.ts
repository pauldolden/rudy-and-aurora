import { graphql, useStaticQuery } from "gatsby";

export const useFetchAllPostTitles = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicPost {
        edges {
          node {
            first_publication_date(fromNow: true)
            uid
            data {
              title {
                text
              }
            }
          }
        }
      }
    }
  `);
  return data;
};