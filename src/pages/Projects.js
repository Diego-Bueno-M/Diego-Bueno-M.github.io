import ProjectCard from "../components/ProjectCard";
import '../styles/Projects.css'

function Project() {
  return (
    <section id="projects">
      <h2>Principais Projetos</h2>
      <div>
        <ProjectCard
          name="Solar-System"
          image="https://www.ufmt.br/ocs/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
          url="https://github.com/Diego-Bueno-M/Project-Solar-System"
          stacks={['react']}
        />
        <ProjectCard
          name="Solar-System"
          image="https://www.ufmt.br/ocs/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
          url="https://github.com/Diego-Bueno-M/Project-Solar-System"
          stacks={['react']}
        />
        <ProjectCard
          name="Solar-System"
          image="https://www.ufmt.br/ocs/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
          url="https://github.com/Diego-Bueno-M/Project-Solar-System"
          stacks={['react']}
        />
      </div>
    </section>
  );
}

export default Project;