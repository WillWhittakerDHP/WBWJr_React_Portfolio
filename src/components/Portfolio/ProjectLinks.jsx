import { Link } from 'react-router-dom';
import { Projects } from "./ProjectClasses";
import ListItem from './ListItem';
import 'projects.json';

export default function ProjectItems({ Projects: { id, title, image, alt, deployedApp, gitRepo } }) {

  return (
    <>
      <ul className="list-group list-group">
        {Projects.map((project) => (
          <ListItem key={id}>
            <Projects project={project} />
            <h2 className="fw-bold mb-1">{title}</h2>
            <img className="fw-bold mb-1" alt={`${alt}`}>{image}</img>
            <Link to={`${deployedApp}`} className="badge bg-primary rounded-pill">Deployed App</Link>
            <Link to={`${gitRepo}`} className="badge bg-primary rounded-pill">Github Repository</Link>      
          </ListItem>
        ))}
      </ul>
    </>
  );
}
