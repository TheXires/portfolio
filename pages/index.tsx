import Head from 'next/head';
import { useEffect } from 'react';
import Header from '../components/Header';
import Works from '../components/Works';
import { getProjectData, getSortedProjectsData } from '../util/projects';
import { Project } from '../types/project';

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
      <Works projects={allProjectsData} />
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
