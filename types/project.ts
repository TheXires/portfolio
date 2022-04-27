import { IconName } from '../components/general/TechnologyIcon';

export interface Project {
  id: string;
  title: string;
  technologies: IconName[];
  short: string;
  thumbnail: string;
  github: string;
  headerImage: string;
  description: string;
  wireframes: string;
  wireframeImage: string;
  frontend: string;
  frontendImages: string[];
  backend: string;
}
