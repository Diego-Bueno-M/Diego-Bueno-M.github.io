import ProjectCard from "../components/ProjectCard";
import '../styles/Projects.css'
import solarSystem from '../images/solarSystem.png'

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
    </section>
  );
}

export default Project;