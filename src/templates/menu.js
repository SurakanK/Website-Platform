import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export const useSiteMetadataNavMenu = () => {
  const data = useStaticQuery(
    graphql`
      query navMenu {
        markdownRemark(frontmatter: { templateKey: { eq: "menu" } }) {
          frontmatter {
            navMenuList {
              title
              link {
                text
                title
              }
            }
          }
        }
      }
    `
  );
  return data.markdownRemark.frontmatter;
};

const menu = () => {
  return (
    <div>
      <h1>menu</h1>
    </div>
  );
};

export default menu;
