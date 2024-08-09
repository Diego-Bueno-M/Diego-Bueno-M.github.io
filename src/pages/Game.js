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
    const yesButton = document.getElementById("yes_button");
    const yesButtonRect = yesButton.getBoundingClientRect();
    const randomPositionLeft = (Math.random() - 0.5) * 100;
    let randomPositionTop = generateRandomNumber() * 50;

    if (randomPositionTop < 0) {
      randomPositionTop = Math.abs(randomPositionTop) + yesButtonRect.height;
    }

    noButton.style.position = "relative";
    noButton.style.left = `${randomPositionLeft}%`;
    noButton.style.top = `${randomPositionTop}px`;
  }

  function positionNoButtonInitially() {
    const noButton = document.getElementById("no_button");
    const yesButton = document.getElementById("yes_button");
    const yesButtonRect = yesButton.getBoundingClientRect();

    noButton.style.position = "relative";
    noButton.style.left = "0px";
    noButton.style.top = `${yesButtonRect.height + 10}px`;
  }

  useEffect(() => {
    const noButton = document.getElementById("no_button");
    noButton.addEventListener("mouseover", handleNoButtonHover);
    positionNoButtonInitially();
    return () => {
      noButton.removeEventListener("mouseover", handleNoButtonHover);
    };
  });

  return (
    <section id="game">
      <h2>Gostou do portifólio?</h2>
      <button id="yes_button" onClick={handleButtonClick}>Sim, foi o melhor portifólio que vi na vida!</button>
      <button id="no_button">Não.</button>
    </section>
  );
}

export default Game;