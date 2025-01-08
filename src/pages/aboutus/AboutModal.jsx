import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './AboutModal.css';

const AboutModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Si no está abierto, no renderizamos nada

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <button
                    onClick={onClose}
                    className="modal-close-btn"
                >
                    &times;
                </button>
                <h2 className="modal-title">¿Quienes somos?</h2>
                <p>
                    Localiza al instante las fuentes de agua más cercanas en Toledo, sin perder tiempo.
                    Con nuestra app, tendrás acceso rápido a todas las fuentes disponibles a tu alrededor.
                </p>
                <p>
                    Además, puedes dejar reseñas, calificar la calidad del agua y reportar si una fuente no está funcionando.
                    ¡Es una app colaborativa donde todos ayudamos a mejorar la ciudad!
                </p>
                <p>
                    Únete a la comunidad de Fuente Adictos, mantente hidratado y contribuye a un Toledo más saludable.
                    ¡Descubre la fuente perfecta con un solo toque!
                </p>
            </div>
        </div>,
        document.body // Renderizamos fuera del contenedor del mapa
    );
}

export default AboutModal;

// props validation
AboutModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
