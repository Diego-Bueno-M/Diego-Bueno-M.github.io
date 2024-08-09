import React, { useState } from 'react';
import '../styles/ProjectCard.css';
import Modal from './Modal';

function ProjectCard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="project-card">
      <h3>{props.name}</h3>
      <img
        alt="project thumb"
        src={props.image}
        onClick={handleImageClick}
        className="clickable-image"
      />
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="modal-content">
            <h4>Tecnologias utilizadas:</h4>
            <ul>
              {props.stacks.map((stack, index) => (
                <li key={`${stack}-${index}`}>{stack}</li>
              ))}
            </ul>
            <a target="_blank" rel="noreferrer" href={props.url}>
              Ver projeto
            </a>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProjectCard;