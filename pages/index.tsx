import {
  About,
  Blog,
  Contact,
  Header,
  Intro,
  Projects,
  Skills,
  Testimonials,
} from "../components";
import { PostType } from "../types/PostType";
import getPosts from "../utils/getPosts";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";

interface Props {
  Posts: [PostType];
}

const Home: FC<Props> = ({ Posts }) => {
  return (
    <div>
      <Head>
        <meta
          name="Andrei Cristian Bobirica"
          content="Student, Developer"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="https://www.avneesh.tech/rss.xml"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className="h-[10vh]">
        <Header />
      </div>

      <main className="relative pl-5 mb-10">
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const Posts = await getPosts("andreibobirica");

  return {
    props: {
      Posts: Posts.publication.posts,
    },
    revalidate: 600,
  };
};
