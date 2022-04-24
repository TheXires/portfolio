import { IconName } from '../components/general/TechnologyIcon';

export interface Project {
  id: string;
  title: string;
  github: string;
  thumbnail: string;
  short: string;
  headerImage: string;
  technologies: IconName[];
  contentHtml?: any;
}
