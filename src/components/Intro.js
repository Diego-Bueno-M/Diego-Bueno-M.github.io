import '../styles/Intro.css'
import intro from '../images/intro.jpg'

function Intro() {
  return (
    <section id="intro">
      <div>
        <h1>Olá! Me chamo Diego Mendonça e sou Dev Full-stack!</h1>
        <h2>Bem-vindo(a) e boa leitura!</h2>
      </div>
      <img
        src={ intro }
        alt="computer"
      />
    </section>
  );
}

export default Intro;