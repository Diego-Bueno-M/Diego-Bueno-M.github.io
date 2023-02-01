function ProjectCard(props) {
  return (
    <div>
      <a rel="noopener noreferrer" href={ props.url }>
        <button type="button">Repositório</button>
      </a>
      <ul>
        Tecnologias utilizadas
        { props.stacks.map((stack) => {
          return( 
            <li>
              {stack}
            </li>
          );
        }) }
      </ul>
    </div>
  );
}

export default ProjectCard;