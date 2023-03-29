import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadataService = () => {
  const data = useStaticQuery(
    graphql`
      query serviceGroupQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "service-page" } }) {
          frontmatter {
            text
            title
            serviceGroup {
              card {
                Color
                text
                title
                icon {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return data.markdownRemark.frontmatter;
};
