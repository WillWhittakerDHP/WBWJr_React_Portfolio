import Headshot from './Headshot';
import Biography from './Biography';
import './aboutMe.css';

export default function AboutCont() {

  return (
    <div className="container pt-4">
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="container text-center">
              <div className="row align-items-center">
                <div className="col">
                <Headshot />
                </div>
                <div className="col">
                <Biography />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}