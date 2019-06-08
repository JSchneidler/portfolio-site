import React, { useState } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
import Typewriter from "../components/typewriter";

import "../styles/index.css";

const typewriterOptions = ["SOFTWARE ENGINEER", "WEB DEVELOPER"];

export default ({ data }) => {
  const [typewriterOption, setTypewriterOption] = useState(
    Math.floor(Math.random() * typewriterOptions.length)
  );

  return (
    <>
      <SEO title="Home" keywords={["gatsby", "application", "react"]} />
      <div id="background-image-overlay" />
      <Img
        fluid={data.backgroundImage.childImageSharp.fluid}
        className="background-image"
        backgroundColor
      />
      <div id="content-container">
        <div id="content">
          <h1 id="header-text">JORDAN SCHNEIDLER</h1>
          <hr id="divider" />
          <Typewriter
            id="typewriter"
            text={typewriterOptions[typewriterOption]}
          />
        </div>
      </div>
    </>
  );
};

export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
