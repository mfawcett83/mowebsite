import React from "react";
import { Global, css } from '@emotion/react';
import styled from "@emotion/styled";

const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

  * {
    text-align: center;
  }
`;

const FromGoogle = styled.h1`
  font-family: "Lato";
`;

function Global() {
  return (
    <div className="App">
      <Global styles={GlobalStyles} />
      <FromGoogle>This text's font family is from Google.</FromGoogle>
    </div>
  );
}

export default Global;