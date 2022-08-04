import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Here we go!</p>
      <StaticImage alt="picture" src="../images/pic1.jpg" />
    </Layout>
  );
};

export default IndexPage;
