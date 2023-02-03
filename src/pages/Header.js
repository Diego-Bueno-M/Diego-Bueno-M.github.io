import '../styles/Header.css';

function Header() {
  return (
    <header className="header-container">
      <p>Botar uma imagem</p>
      <p><a href="#intro">Intro</a></p>
      <p><a href="#about">Sobre Mim</a></p>
      <p><a href="#projects">Projetos</a></p>
      <p><a href="#contacts">Contato</a></p>
    </header>
  );
}

export default Header;