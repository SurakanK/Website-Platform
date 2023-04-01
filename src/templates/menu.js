import { graphql, useStaticQuery } from "gatsby";

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
