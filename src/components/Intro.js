import '../styles/Intro.css'
import profile_photo from '../images/profilePhoto.png'

function Intro() {
  return (
    <section id="intro">
      <div id="intro-container">
        <div>
          <h1>Olá! Me chamo <strong>Diego Mendonça</strong> e sou <strong>Dev Full-stack!</strong></h1>
          <h2>Bem-vindo(a) e boa leitura!</h2>
        </div>
        <div id="img-container">
          <img src={profile_photo} alt="profile_photo"/>
        </div>
      </div>
    </section>
  );
}

export default Intro;