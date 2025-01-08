import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './AboutModal.css';

const AboutModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            // Cierra el modal solo si el clic ocurrió en el overlay
            onClose();
        }
    };

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="modal-close-btn"
                >
                    &times;
                </button>
                <h2 className="modal-title">About Us</h2>
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
        document.body // Renderizamos en el body
    );
}

export default AboutModal;

// props validation
AboutModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
