export interface IProject {
  name: string;
  image: string;
  caption: string;
  links: Array<{
    label: string;
    url: string;
  }>;
}
