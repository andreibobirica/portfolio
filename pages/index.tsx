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
          name="E-FIT"
          content="La Palestr Plug-IN"
        />
        <link rel="icon" href="/LOGO1.png" />
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
