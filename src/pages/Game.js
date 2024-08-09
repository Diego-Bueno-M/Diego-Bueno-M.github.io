import '../styles/Game.css';
import { useEffect } from 'react';

function Game() {
  function generateRandomNumber() {
    return Math.random() < 0.5 ? -Math.random() : Math.random();
  }
  function handleButtonClick() {
    alert("Obrigado!");
  }

  function handleNoButtonHover() {
    const noButton = document.getElementById("no_button");
    const randomPositionLeft = Math.random() * 50;
    const randomPositionTop = generateRandomNumber() * 50;
    noButton.style.position = "relative";
    noButton.style.left = `${randomPositionLeft}%`;
    noButton.style.top = `${randomPositionTop}%`;
  }

  useEffect(() => {
    const noButton = document.getElementById("no_button");
    noButton.addEventListener("mouseover", handleNoButtonHover);
    return () => {
      noButton.removeEventListener("mouseover", handleNoButtonHover);
    };
  });
  return (
    <section id="game">
      <h2>Gostou do portifólio?</h2>
      <div>
        <button onClick={handleButtonClick}>Sim, foi o melhor portifólio que vi na vida!</button>
        <button id="no_button">Não.</button>
      </div>
    </section>
  );
}

export default Game;