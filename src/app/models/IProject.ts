export interface IProject {
  name: string;
  thumbnail: string;
  caption: string;
  url: string;
  content: string;
  links: Array<{
    label: string;
    url: string;
  }>;
  images: Array<{
    path: string;
    caption: string;
  }>;
}
