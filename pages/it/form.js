import Head from "next/head";
import Script from "next/script";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainLayout } from "../../components/PageLayout";
import { PageBanner } from "../../components/PageBanner";

export default function Home() {
  return (
    <>
      {/* header area start from here*/}
      {/* header area start from here*/}
      <Header></Header>
      <PageBanner></PageBanner>
      <MainLayout>
        <div className="leform-inline" data-id="7"></div>
      </MainLayout>
      <Footer></Footer>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></Script>
      <Script
        id="leform-remote"
        src="https://forms.storkippa.com.ng/content/plugins/halfdata-green-forms/js/leform.min.js?ver=1.4"
        data-handler="https://forms.storkippa.com.ng/ajax.php"
      ></Script>
    </>
  );
}
