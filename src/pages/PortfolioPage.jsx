import ProjectItems from '../components/Portfolio/ProjectLinks';
import '../components/Portfolio/portfolio.css';

export default function PortfolioPage() {
  
  return (
    <div className="container pt-4">
      <h3>Tiles for six of the developer’s projects with titles, images, and links to deployed applications and GitHub repositories</h3>
      <ProjectItems />
    </div>
  );
}
