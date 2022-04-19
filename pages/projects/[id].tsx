import Head from 'next/head';
import { Project } from '../../types/project';
import { getAllProjectIds, getProjectData } from '../../lib/projects';
import Link from 'next/link';

interface Props {
  projectData: Project;
}

export default function Post({ projectData }: Props) {
  return (
    <div>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <h1>{projectData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}></div>
      <Link href="/">{'<- Back'}</Link>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}
