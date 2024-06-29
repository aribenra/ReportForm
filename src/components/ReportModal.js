// src/components/ReportModal.js
import React from 'react';
import './ReportModal.css'; // Asegúrate de que esta línea esté presente para importar el archivo CSS

const ReportModal = ({ content, onClose }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        alert('Informe copiado');
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                <button className="copy-button" onClick={handleCopy}>Copiar Informe</button>
                <div className="modal-body">
                    <pre>{content}</pre>
                </div>
            </div>
        </div>
    );
};

export default ReportModal;
