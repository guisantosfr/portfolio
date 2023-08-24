import './styles.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contato</h2>
        <p>Tenho interesse em receber informações sobre oportunidades de trabalho e feedbacks sobre meus projetos.</p>
        <a className="btn" href="mailto:santosgui678@gmail.com">Email</a>
        <a className="btn" href="https://api.whatsapp.com/send?phone=5586988775657">Whatsapp</a>
      </div>
    </section>

  )
}

export default Contact