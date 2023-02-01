function ProjectCard(props) {
  return (
    <div>
      <img
        alt="project thumb"
        src={props.image}
      />
      <ul>
        Tecnologias utilizadas
        { props.stacks.map((stack, index) => {
          return( 
            <li key={`${ stack }-${ index }`}>
              {stack}
            </li>
          );
        }) }
      </ul>
      <a rel="noopener noreferrer" href={ props.url }>
        <button type="button">Repositório</button>
      </a>
    </div>
  );
}

export default ProjectCard;