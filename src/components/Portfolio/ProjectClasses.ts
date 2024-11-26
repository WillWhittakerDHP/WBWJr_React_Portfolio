class Project {
  id: number;
  title: string;
  image: string;
  alt: string;
  deployedApp: string;
  gitRepo: string;


  constructor(
    id: number,
    title: string,
    image: string,
    alt: string,
    deployedApp: string,
    gitRepo: string,

  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.alt = alt;
    this.deployedApp = deployedApp;
    this.gitRepo = gitRepo;
  }
}


class Projects {
  projects: Project[];
  constructor(
    projects: Project[]
  ) {
    this.projects = projects;
  }
  
}
export default Projects;