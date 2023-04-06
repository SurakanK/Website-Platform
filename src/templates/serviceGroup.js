import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export const useSiteMetadataService = () => {
  const data = useStaticQuery(
    graphql`
      query serviceGroupQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "serviceGroup" } }) {
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

const serviceGroup = () => {
  return (
    <div>
      <h1>serviceGroup</h1>
    </div>
  );
};

export default serviceGroup;
