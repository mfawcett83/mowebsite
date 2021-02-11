import React from "react";
import styled from '@emotion/styled';
import { Link } from "gatsby";

const StyledFooter = styled.footer`
  width: 100%;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`

const StyledNavLink = styled(Link)`
  display: block;
  padding: 15px 19px;
  color: white;
  font-size: 22px;
  line-height: 0;
  font-weight: bold;
`;
const NavLink = props => (
  <StyledNavLink
    {...props}
    getProps={({ isPartiallyCurrent }) => {
      return {
        style: {
          color: isPartiallyCurrent ? '#1c75bc' : 'white',
          backgroundColor: isPartiallyCurrent ? 'white' : 'transparent',
        },
      };
    }}
  />
);

const Footer = () => (
  <StyledFooter>
<div>
      <NavLink to="/about/">About</NavLink>
    </div>
    <div>
      <NavLink to="/blog/">Blog</NavLink>
    </div>
    <div>
      <NavLink to="/projects/">Projects</NavLink>
    </div>
    <div>
      <NavLink to="/contact/">Contact</NavLink>
    </div>
    <NavLink
      href="https://github.com/mfawcett83"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="External Link"
    >My GitHub
    </NavLink>
  </StyledFooter>
)

export default Footer