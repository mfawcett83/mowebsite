import React from 'react'
import styled from '@emotion/styled';
import Photo from '../assets/photo.svg';

const StyledSection = styled.section ` 
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
  .parent {
    position: relative;
  }
  .child {
    position: absolute;
    top: 0;
  }
  .child1 {
    left: 0;
  }
  .child2 {
    right: 650px;
    top: 45px;
  }
`

const Hero = () => {
  return (
    <StyledSection>
    <div class="parent">
    <div class="child child1">
      <h1>
      <br />
      <br />
        Hello!<br />
        <b>I'm Maurice Fawcett.</b>
      </h1>
      <h2 className="subtitle">
        I design and build <span className="highlighted">apps and websites!</span>
      </h2>
      <div className="subtitle">
        <i>Software Developer</i> - based in British Columbia, Canada.
      </div>
      </div>
      </div>
      <div class="child child2">
      <Photo />
      </div>
      </StyledSection>
      
  )
}

export default Hero