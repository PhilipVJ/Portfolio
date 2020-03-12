export interface Project {
  category: string;
  title: string;
  img: string;
  smallDescription: string;
  detailedDescription: string;
  tools: string[];
  techniques: string[];
  downloadLink?: string;
  githubLink?: string;
}
