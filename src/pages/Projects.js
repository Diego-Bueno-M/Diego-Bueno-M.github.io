import ProjectCard from "../components/ProjectCard";
import '../styles/Projects.css'
import intro from '../images/intro.jpg'

function Project() {
  return (
    <section id="projects">
      <h2>Principais Projetos</h2>
      <div>
        <ProjectCard
          name="Projeto Teste"
          image={intro}
          stacks={['stack1', 'stack2', 'stack3']}
        />
      </div>
    </section>
  );
}

export default Project;