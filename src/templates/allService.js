import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadataAllService = () => {
  const data = useStaticQuery(
    graphql`
      query allServiceQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "allService" } }) {
          frontmatter {
            allService {
              card {
                link
                image {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              title
            }
            text
            title
          }
        }
      }
    `
  );
  return data.markdownRemark.frontmatter;
};
