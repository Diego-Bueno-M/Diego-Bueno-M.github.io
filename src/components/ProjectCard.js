function ProjectCard(props) {
  return (
    <div>
      <h3>
        { props.name }
      </h3>
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
      <a
        target="_blank"
        rel="noreferrer"
        onClick={() => window.open(props.url, '_blank').focus()}
        href={ props.url }>
        <button type="button">Repositório</button>
      </a>
    </div>
  );
}

export default ProjectCard;