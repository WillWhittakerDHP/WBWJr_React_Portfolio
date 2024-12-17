import { Link } from 'react-router-dom';
// import Projects from "./ProjectClasses";
import ListItem from './ListItem';
// import projects from './projects.json';
import ToxicAmericanisms from '../../assets/ToxicAmericanisms.jpg';
import OpenWeatherAPI from '../../assets/OpenWeatherAPI.png';
import BSGSeason4Banner from '../../assets/BSGSeason4Banner.jpg';
import redHeadShot from '../../assets/redHeadShot.jpeg';
import FullStackImage from '../../assets/FullStackImage.png';
import ServiceSelectionTop from '../../assets/ServiceSelectionTop.png';

const projects = [
  {
    "id": 1, 
    "title":   "Take a Vehicle Make a Vehicle",
    "image": ToxicAmericanisms, 
    "alt": "cars and trucks and bikes",
    "deployedApp": "https://github.com/WillWhittakerDHP/Take-a-Vehicle-Make-a-Vehicle.git", 
    "gitRepo":"https://github.com/WillWhittakerDHP/Take-a-Vehicle-Make-a-Vehicle.git" 
  },
  {
  "id":   2,
  "title":   "They All Suck Eventually",
  "image":   OpenWeatherAPI,
  "alt": "Screencap from OpenWeathermap API",
  "deployedApp":   "https://github.com/WillWhittakerDHP/They-All-Suck-Eventually.git",
  "gitRepo":  "https://github.com/WillWhittakerDHP/They-All-Suck-Eventually.git"
  },
  {
  "id":   3,
  "title":   "Battlestar Galactica Database",
  "image":   BSGSeason4Banner,
  "alt": "season banner for BSG",
  "deployedApp":   "https://github.com/WillWhittakerDHP/Keepin_Em_Straight.git",
  "gitRepo":  "https://github.com/WillWhittakerDHP/Keepin_Em_Straight.git"
  },
  {
  "id":   4,
  "title":   "React Portfolio",
  "image":   redHeadShot,
  "alt": "my headshot",
  "deployedApp":   "https://github.com/WillWhittakerDHP/WBWJr_React_Portfolio.git",
  "gitRepo":  "https://github.com/WillWhittakerDHP/WBWJr_React_Portfolio.git"
  },
  {
  "id":   5,
  "title":   "Full Stack Homework",
  "image":   FullStackImage,
  "alt": "image representing the parts of a full stack app",
  "deployedApp":   "Julianne.OConner@kory.org",
  "gitRepo":  "transition cutting-edge web services"
  },
  {
  "id":   6,
  "title":   "DHP Differential Scheduler",
  "image": ServiceSelectionTop, 
  "alt": "landing page for the service selection page",
  "deployedApp":   "https://github.com/WillWhittakerDHP/DHP_Differential_Scheduler.git",
  "gitRepo":  "https://github.com/WillWhittakerDHP/DHP_Differential_Scheduler.git"
  }
]

export default function ProjectItems() {

  return (
    <>
      <ul className="list-group list-group">
        {projects.map((project) => (
          <ListItem key={project.id}>
            <p className="fw-bold mb-1">{project.title}</p>
            <img className="project-image" src={project.image} alt={project.alt} />
            <div className="d-flex .me-auto p-3">
            <div className="d-flex flex-column row-gap-3">
              <div className="mx-auto">
                <Link to={`${project.deployedApp}`} className="badge bg-primary rounded-pill p-2" >Deployed App</Link>
              </div>
              <div className="mx-auto">
                <Link to={`${project.gitRepo}`} className="badge bg-primary rounded-pill p-2">Github Repository</Link>  
              </div>
            </div>    
            </div>
          </ListItem>
        ))}
      </ul>
    </>
  );
}
