import '../styles/Header.css';

function Header() {
  return (
    <header className="header-container">
      <nav>
        <a href="#intro" className="nav-link">Intro</a>
        <a href="#about" className="nav-link">Sobre Mim</a>
        <a href="#projects-section" className="nav-link">Projetos</a>
        <a href="#contacts" className="nav-link">Contato</a>
      </nav>
    </header>
  );
}

export default Header;