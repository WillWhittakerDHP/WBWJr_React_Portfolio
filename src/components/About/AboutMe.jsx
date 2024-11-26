import Headshot from './Headshot';
import Biography from './Biography';
import './aboutMe.css';

export default function AboutContent() {

  return (
    <div className="container pt-4">
      <Headshot />
      <Biography />
    </div>
  );
}