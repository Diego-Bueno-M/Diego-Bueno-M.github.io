function Contact() {
  return (
    <section>
      <h2>Contatos</h2>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          onClick={() => window.open("https://www.linkedin.com/in/diego-bueno-mendonca-dev-full-stack/", '_blank').focus()}
          href="https://www.linkedin.com/in/diego-bueno-mendonca-dev-full-stack/"
        >
          Linkedin 
        </a>
      </p>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          onClick={() => window.open("https://github.com/Diego-Bueno-M", '_blank').focus()}
          href="https://github.com/Diego-Bueno-M"
        >
          GitHub 
        </a>
      </p>
      <p>Email: diegobuenomendonca@hotmail.com</p>
      <p>WhatsApp: (11) 95320-5179</p>
    </section>
  );
}

export default Contact;