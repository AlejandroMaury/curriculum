import css from "../styles/style.css";
import * as React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image";


const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="Home page">
        <p>Acá ira toda pagina que recibe a los visitantes </p>
        <StaticImage alt="Pitbull" src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" />
        <StaticImage alt="Alpes" src="../images/alpes.jpg" />
        <StaticImage alt="Alpes" src="../images/alpesII.jpg" />
        <StaticImage alt="Alpes" src="../images/alpesIII.jpg" />

      </Layout>


    </>
  );
}

export const Head = () => <title>Alejandro Arango</title>

export default IndexPage
