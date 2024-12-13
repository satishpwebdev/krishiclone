import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    const { title, description, keywords } = pageProps;

    if (title || description || keywords) {
      document.title = title || 'Krishi Helper '; 
      document.querySelector("meta[name='description']").setAttribute("content", description || 'Krishi Helper');
      document.querySelector("meta[name='keywords']").setAttribute("content", keywords || 'Default, keywords');
    }
  }, [pageProps.title, pageProps.description, pageProps.keywords]);

  return (
    <>
    <Head>
        <title>{pageProps.title || 'Krishi Helper'}</title>
        <meta name="description" content={pageProps.description || 'Krishi helper'} />
        <meta name="keywords" content={pageProps.keywords || 'Default, keywords'} />
        <meta name="robots" content="index, follow" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="../willofav.png" /> 
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
