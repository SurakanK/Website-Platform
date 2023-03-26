import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";

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
