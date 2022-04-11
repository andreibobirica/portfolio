import data from "../public/data.json";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === "object") {
    AOS.init();
  }

  return (
    <>
      {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
        process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="lazyOnload"
          />
        )}

      <NextSeo
        title={data.name}
        titleTemplate={data.name}
        defaultTitle={data.name}
        description={data.about}
        canonical="https://www.avneesh.tech/"
        openGraph={{
          url: "https://www.avneesh.tech/",
          title: data.name,
          description: data.about,
          images: [
            {
              url: "https://www.avneesh.tech/og-image.png",
              width: 800,
              height: 420,
              alt: data.name,
            },
          ],
          profile: {
            firstName: "Avneesh",
            gender: "Male",
            lastName: "Agarwal",
            username: "avneesh0612",
          },
        }}
        twitter={{
          handle: "@avneesh0612",
          site: "@avneesh0612",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="https://www.avneesh.tech/rss.xml"
        />
        <meta
          property="og:image"
          content="https://www.avneesh.tech/og-image.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
