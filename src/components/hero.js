import React from "react"
import styled from '@emotion/styled';

const StyledSection = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
`

const Hero = () => {
  return (
    <StyledSection id="hero">
      <h1 className="title">
        Hello <span role="img" aria-label="emoji">👋</span><br />
        I'm Maurice Fawcett
      </h1>
      <h2 className="subtitle">
        I design and build <span className="highlighted">apps and websites!</span>
      </h2>
      <div className="description">
        Front End Developer - based in British Columbia, Canada.
      </div>
      <span></span>
    </StyledSection>
  )
}

export default Hero