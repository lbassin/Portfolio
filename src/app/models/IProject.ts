export interface IProject {
  name: string;
  thumbnail: string;
  caption: string;
  links: Array<{
    label: string;
    url: string;
  }>;
  images: Array<{
    path: string;
    caption: string;
  }>;
}
