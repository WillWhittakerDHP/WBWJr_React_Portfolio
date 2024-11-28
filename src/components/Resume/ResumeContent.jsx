import { Link } from 'react-router-dom';
import ListItem from './ListItem';
import './resume.css';

export default function ResumeContent() {
  
    return (
      <>
        <ul className="list-group list-group">
            <ListItem>
              <h2>Create a resume and a list of the developer’s proficiencies</h2>
            <Link key={1} to='../public/resume.pdf' download>DownLoad my Resume</Link>      
            <h3>My Proficiencies</h3> 
            <ol>
            <li>First One</li>
            <li>Second One</li>
            <li>Third One</li>
            <li>Fourth</li>
            </ol>
            </ListItem>
        </ul>
      </>
    );
}