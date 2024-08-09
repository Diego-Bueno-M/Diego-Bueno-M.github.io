import '../styles/Techs.css';

function Techs() {
  const javascriptImg = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg';
  const reactImg = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg';
  const nodeImg = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg';
  const pythonImg = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg';
  const mysqlImg = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg';

  return (
    
    <section id="techs">
      <img src={javascriptImg} alt="javaScript icon" />
      <img src={reactImg} alt="react icon"/>
      <img src={nodeImg} alt="node icon"/>
      <img src={pythonImg} alt="python icon" />
      <img src={mysqlImg} alt="mysql icon"/>
    </section>
  );
}

export default Techs;