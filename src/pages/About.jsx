import '../style/About.css';
import { FaEnvelope, FaInstagram } from 'react-icons/fa'; 

const About = () => {
    return (
      <div className="about-container">
        <h1>¿Sediento?<br />¡Fuente Adictos está aquí!</h1>
        <p>
          Localiza al instante las fuentes de agua más cercanas en Toledo, sin perder tiempo. Con nuestra app, tendrás acceso rápido a todas las fuentes disponibles a tu alrededor.
        </p>
        <p>
          Además, puedes dejar reseñas, calificar la calidad del agua y reportar si una fuente no está funcionando. ¡Es una app colaborativa donde todos ayudamos a mejorar la ciudad!
        </p>
        <p>
          Únete a la comunidad de Fuente Adictos, mantente hidratado y contribuye a un Toledo más saludable. ¡Descubre la fuente perfecta con un solo toque!
        </p>

        <div className="social-container">
          <a href="mailto:example@example.com" className="social-icon" aria-label="Enviar un correo electrónico">
            <FaEnvelope size={24} />
          </a>
          <a href="https://www.instagram.com/tu_perfil" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Visitar Instagram">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>  
    );
  };
  
  export default About;
  