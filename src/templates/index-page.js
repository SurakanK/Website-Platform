import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import SubHeader from "../components/SubHeader";
import ServiceListBannerComponent from "../components/ServiceListBanner";
import StrengthBannerComponent from "../components/StrengthBanner";
import AllServiceBannerComponent from "../components/allServiceBanner";
import PartnersBannerComponent from "../components/partnersBanner";
import InvitationBannerComponent from "../components/InvitationBanner";
import NewsBannerComponent from "../components/NewsBanner";
import SubscribeBannerComponent from "../components/SubscribeBanner";

export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
  subhead,
  strength,
}) => {

  return (
    <div>
      <FullWidthImage img={getImage(image) || image} heading={heading} subheading={subheading} />
      <SubHeader img={getImage(subhead.image) || subhead.image} title={subhead.title} description={subhead.description}/>
      <StrengthBannerComponent items={strength}/>
      <ServiceListBannerComponent/>
      <AllServiceBannerComponent/>
      <PartnersBannerComponent/>
      <InvitationBannerComponent/>
      <NewsBannerComponent/>
      <SubscribeBannerComponent/>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        subhead={frontmatter.subhead}
        strength={frontmatter.strength}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      title
      image {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      heading
      subheading
      mainpitch {
        title
        description
      }
      description
      intro {
        blurbs {
          image {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
          text
        }
        heading
        description
      }
      subhead {
        description
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      strength {
        title
        description
        icon {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}
`;