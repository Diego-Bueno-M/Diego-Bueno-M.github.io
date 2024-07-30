import '../styles/Game.css';

function Game() {
  
  function handleButtonClick(event) {
    if (event.target.innerText === "Sim, foi o melhor portifólio que vi na vida!") {
      alert("Obrigado!");
    } else {
      const randomPositionLeft = Math.floor(Math.random() * 10) + 5;
      const randomPositionTop = Math.floor(Math.random() * 10) + 1;
      const button = event.target;
      button.style.position = "relative";
      button.style.left = `${randomPositionLeft * 10}%`;
      button.style.top = `${randomPositionTop * 10}%`;
    }
  }

  return (
    <section id="game">
      <h2>Gostou do portifólio?</h2>
      <div>
        <button onClick={(event) => handleButtonClick(event)}>Sim, foi o melhor portifólio que vi na vida!</button>
        <button onClick={(event) => handleButtonClick(event)}>Não.</button>
      </div>
    </section>
  );
}

export default Game;