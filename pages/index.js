import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainLayout } from "../components/PageLayout";
import { PageBanner } from "../components/PageBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Storkippa</title>
      </Head>
      {/* header area start from here*/}
      {/* header area start from here*/}
      <Header></Header>
      <PageBanner></PageBanner>
      <section className="card-container">
        <div className="card">
          <a
            href="https://folder-app-api-docs-89ms.vercel.app/"
            className="card"
          >
            <h3>View API Docs &rarr;</h3>
            <p>Take a look at the Documentation for the REST API. </p>
          </a>
        </div>

        <div className="card">
          <a href="https://mighty-dusk-83763.herokuapp.com/" className="card">
            <h3>View Demo Application &rarr;</h3>
            <p>
              Try this sample AngularJs inventory app that uses Heims as a
              backend.{" "}
            </p>
          </a>
        </div>
      </section>


      <Footer></Footer>
    </>
  );
}
