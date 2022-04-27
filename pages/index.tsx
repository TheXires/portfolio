import Head from 'next/head';
import Footer from '../components/general/Footer';
import About from '../components/index/About';
import Header from '../components/index/Header';
import Works from '../components/index/Works';
import { Project } from '../types/project';
import { getSortedProjectsData } from '../util/projects';

interface Props {
  allProjectsData: Project[];
}

export default function Home({ allProjectsData }: Props) {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <a id="projects" />
      <Works projects={allProjectsData} />

      <a id="about" />
      <About />

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
