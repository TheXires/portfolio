import Head from 'next/head';
import Header from '../components/Header';
import Works from '../components/Works';
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

      <div
        style={{
          backgroundColor: '#23292F',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.8rem',
          color: 'white',
        }}
      >
        Coming soon
      </div>
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
