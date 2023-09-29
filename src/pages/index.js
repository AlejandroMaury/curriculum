import css from "../styles/style.css";
import * as React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout'


const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="Home page">
        <p>Acá ira toda pagina que recibe a los visitantes </p>

      </Layout>

      {/* <header>
        <Link className="vinculos" to="/about">About Me</Link>
      </header>
      <main className={css}>
        <div>
          <h1>Alejandro Arango Maury</h1>

        </div>

      </main> */}
    </>
  );
}

export const Head = () => <title>Alejandro Arango</title>

export default IndexPage
