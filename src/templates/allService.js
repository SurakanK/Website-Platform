import { graphql, useStaticQuery } from "gatsby";
import React from "react";

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

const allservice = () => {
  return (
    <div>
      <h1>allservice</h1>
    </div>
  );
};

export default allservice;
