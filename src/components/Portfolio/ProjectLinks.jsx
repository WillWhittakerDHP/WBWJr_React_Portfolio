import { Link } from 'react-router-dom';
// import Projects from "./ProjectClasses";
import ListItem from './ListItem';
import projects from './projects.json';

export default function ProjectItems() {

  return (
    <>
      <ul className="list-group list-group">
        {projects.map((project) => (
          <ListItem key={project.id}>
            {/* <Projects project={project} /> */}
            <h2 className="fw-bold mb-1">{project.title}</h2>
            <img className="fw-bold mb-1" src={project.image} alt={project.alt} />
            <Link to={`${project.deployedApp}`} className="badge bg-primary rounded-pill">Deployed App</Link>
            <Link to={`${project.gitRepo}`} className="badge bg-primary rounded-pill">Github Repository</Link>      
          </ListItem>
        ))}
      </ul>
    </>
  );
}
