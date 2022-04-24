import Head from 'next/head';
import ProjectHeader from '../../components/project/ProjectHeader';
import { Project } from '../../types/project';
import { getAllProjectIds, getProjectData } from '../../util/projects';

interface Props {
  projectData: Project;
}

export default function Post({ projectData }: Props) {
  return (
    <div>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <ProjectHeader
        description={projectData.short}
        heading={projectData.title}
        icons={projectData.technologies}
        imgUrl={projectData.headerImage}
      />
      <div style={{ height: 1500, backgroundColor: 'black' }} />
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
