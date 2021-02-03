import React from "react";
import Head from "next/head";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import LayoutWrapper from "./elements";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";

//styles live inside the elements file

const Layout = ({ children, title }) => {
  return (
    <LayoutWrapper>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <BodyWrapper>{children}</BodyWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;

const BodyWrapper = styled.div`
  background: white;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
