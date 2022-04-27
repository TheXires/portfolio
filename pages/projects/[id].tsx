import Head from 'next/head';
import Footer from '../../components/general/Footer';
import { Layout } from '../../components/general/Layout';
import Backend from '../../components/project/Backend';
import Description from '../../components/project/Description';
import Frontend from '../../components/project/Frontend';
import ProjectHeader from '../../components/project/ProjectHeader';
import Wireframes from '../../components/project/Wireframes';
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
      <Layout>
        <Description description={projectData.description} />
        <Wireframes description={projectData.wireframes} image={projectData.wireframeImage} />
        <Frontend description={projectData.description} images={projectData.frontendImages} />
        <Backend description={projectData.backend} />
      </Layout>
      <Footer />
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
