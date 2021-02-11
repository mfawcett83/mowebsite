import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled';

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

export default NavLink