import ProjectCard from "../components/ProjectCard";
import '../styles/Projects.css'
import solarSystem from '../images/solarSystem.png'
import techNwes from '../images/techNwes.png'

function Project() {
  return (
    <section id="projects">
      <h2>Principais Projetos</h2>
      <div>
        <ProjectCard
          name="Projeto Sistema Solar"
          image={solarSystem}
          stacks={['React', 'JSX']}
          url='https://github.com/Diego-Bueno-M/Project-Solar-System'
        />
      </div>
      <h2>Principais Projetos</h2>
      <div>
        <ProjectCard
          name="Projeto Sistema Solar"
          image={solarSystem}
          stacks={['Pyhton', 'BeautifulSoup', 'parsel', 'pymongo']}
          url='https://github.com/Diego-Bueno-M/Project-Solar-System'
        />
      </div>     
      <h2>Tech News</h2>
      <div>
        <ProjectCard
          name="Tech News"
          image={techNwes}
          stacks={['React', 'JSX']}
          url='https://github.com/Diego-Bueno-M/tech-News'
        />
      </div>
    </section>
  );
}

export default Project;