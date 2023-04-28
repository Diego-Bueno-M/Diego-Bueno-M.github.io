import '../styles/ProjectCard.css'

function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>
        { props.name }
      </h3>
      <img
        alt="project thumb"
        src={props.image}
      />
      <ul>
        <h4>Tecnologias utilizadas:</h4>
        { props.stacks.map((stack, index) => {
          return( 
            <li key={`${ stack }-${ index }`}>
              {stack}
            </li>
          );
        }) }
      </ul>
      <a
        target="_blank"
        rel="noreferrer"
        href={ props.url }>
        <button type="button">Repositório</button>
      </a>
    </div>
  );
}

export default ProjectCard;