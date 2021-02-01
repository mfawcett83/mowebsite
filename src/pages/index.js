import React from "react";
import { jsx, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled';
import Layout from "../components/layout"
import SVGPhoto from "../components/photo"
import Leaves from "../components/leaves"
import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid';
import Global from "../utils/global.js"

const theme = {
  colors: {
    primary: 'hotpink',
    background: 'orange',
  }
}

const SomeText = styled.div`
  color: ${props => props.theme.colors.primary};
`

const Heading = styled("h1")`
  background: ${props => props.bg};
  color: ${props => props.fg};
`;

const Subheading = Heading.withComponent("h2");


export default function Home() {
  return (
    <Layout>
        <GridRow align='start'>
          <GridColumn width={3}>
          <ThemeProvider theme={theme}>
            <SVGPhoto></SVGPhoto>
            <Heading>Maurice Fawcett</Heading>
            <Subheading>Front End Developer</Subheading>
            
          </ThemeProvider>
          </GridColumn>
          <GridColumn width={9}>
          <ThemeProvider theme={theme}>
          <Leaves></Leaves>
          </ThemeProvider>
          </GridColumn>
        </GridRow>
    </Layout>
  )
}