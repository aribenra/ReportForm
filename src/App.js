// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaHome, FaFileAlt, FaListAlt } from 'react-icons/fa';
import ReportForm from './components/ReportForm';
import ReportList from './components/ReportList';
import ReportModal from './components/ReportModal';
import './App.css'; // Asegúrate de que esta línea esté presente para importar el archivo CSS

const App = () => {
    const [reports, setReports] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleFormSubmit = async (formData) => {
        try {
            const response = await fetch('http://192.168.8.43:5000/api/generateReport', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Error generating report');
            }

            const result = await response.json();
            const newReport = {
                ...formData,
                informe: result.informe,
                fecha: new Date().toISOString()
            };

            setReports([...reports, newReport]);
            setMessage('Informe enviado');
            setError('');
            setModalContent(result.informe);
            setModalVisible(true);
            setTimeout(() => setMessage(''), 5000);
        } catch (error) {
            console.error('Error generating report:', error);
            setError('Error al enviar el informe');
            setMessage('');
            setTimeout(() => setError(''), 5000);
        }
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <Router>
            <div className="d-flex">
                <nav className="sidebar">
                    <ul className="list-unstyled components">
                        <li>
                            <Link to="/" className="d-flex align-items-center">
                                <FaHome className="me-2" />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/form" className="d-flex align-items-center">
                                <FaFileAlt className="me-2" />
                                <span>Formulario</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/reports" className="d-flex align-items-center">
                                <FaListAlt className="me-2" />
                                <span>Lista de Informes</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="content">
                    <div className="container">
                        <h1 className="text-center my-4">Informe de Resolución de Problemas de Conectividad</h1>
                        {message && <div className="alert alert-success">{message}</div>}
                        {error && <div className="alert alert-danger">{error}</div>}
                        <Routes>
                            <Route path="/" element={<div>Bienvenido a la página de inicio</div>} />
                            <Route path="/form" element={<ReportForm onSubmit={handleFormSubmit} />} />
                            <Route path="/reports" element={<ReportList reports={reports} />} />
                        </Routes>
                        {modalVisible && <ReportModal content={modalContent} onClose={closeModal} />}
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
