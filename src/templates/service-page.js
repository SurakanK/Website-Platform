import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadataService = () => {
  const data = useStaticQuery(
    graphql`
      query serviceQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "service-page" } }) {
          frontmatter {
            services {
              serviceCard {
                title
                text
                icon {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                Color
              }
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
