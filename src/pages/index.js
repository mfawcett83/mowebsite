import React from "react";
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from "../components/layout";
import Hero from "../components/hero";
import GlobalStyle from "../components/globalStyle";

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
    </Layout>

    )
}