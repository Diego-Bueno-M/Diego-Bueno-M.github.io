import ProjectCard from "../components/ProjectCard";
import '../styles/Projects.css';
import solarSystem from '../images/solarSystem.png';
import techNews from '../images/techNews.png';
import trybeWallet from '../images/trybeWallet.png';

function Project() {
  return (
    <section id="projects-section">
      <h2 id="projects-h2">Principais Projetos</h2>
      <div id ="projects-div">
        <div id="projects-card">
          <ProjectCard
            name="Projeto Sistema Solar"
            image={solarSystem}
            stacks={['React', 'JSX']}
            url='https://github.com/Diego-Bueno-M/Project-Solar-System'
          />
        </div>
        <div id="projects-card">
          <ProjectCard
            name="Tech News"
            image={techNews}
            stacks={['Pyhton', 'BeautifulSoup', 'parsel', 'pymongo']}
            url='https://github.com/Diego-Bueno-M/tech-News'
          />
        </div>
        <div id="projects-card">
          <ProjectCard
            name="Trybe Wallet"
            image={trybeWallet}
            stacks={['React', 'Redux']}
            url='https://github.com/Diego-Bueno-M/trybe-wallet'
          />
        </div>
      </div>
    </section>
  );
}

export default Project;