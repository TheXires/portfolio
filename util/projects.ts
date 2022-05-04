import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project } from '../types/project';

const postsDirectory = path.join(process.cwd(), 'projects');

export function getSortedProjectsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allProjectsData: Project[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title,
      technologies: matterResult.data.technologies,
      short: matterResult.data.short,
      thumbnail: matterResult.data.thumbnail,
      github: matterResult.data.github,
      headerImage: matterResult.data.headerImage,
      description: matterResult.data.description,
      wireframes: matterResult.data.wireframes,
      wireframeImage: matterResult.data.wireframeImage,
      frontend: matterResult.data.frontend,
      frontendImages: matterResult.data.frontendImages,
      backend: matterResult.data.backend,
    };
  });
  // Sort posts by date
  return allProjectsData.sort(({ id: a }, { id: b }) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getProjectData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id and contentHtml
  return {
    id,
    ...matterResult.data,
  };
}
