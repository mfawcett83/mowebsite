import React from "react";
import styled from '@emotion/styled';
import { Link } from "gatsby";

const StyledFooter = styled.footer`
  width: 100%;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: +1px;
  font-weight: 700;
`

const Footer = () => (
  <StyledFooter>
    <div>
      <Link to="/about/">About</Link>
    </div>
    <div>
      <Link to="/blog/">Blog</Link>
    </div>
    <div>
      <Link to="/projects/">Projects</Link>
    </div>
    <div>
      <Link to="/contact/">Contact</Link>
    </div>
    <a
      href="https://github.com/mfawcett83"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="External Link"
    >My GitHub
    </a>
  </StyledFooter>
)

export default Footer