// src/components/ReportList.js
import React, { useState } from 'react';
import './ReportList.css'; // Importa el archivo CSS para el estilo

const ReportList = ({ reports }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredReports = reports.filter(report =>
        report.cliente.includes(searchTerm) ||
        report.ticket.includes(searchTerm) ||
        report.fecha.includes(searchTerm)
    );

    return (
        <div className="report-list-container">
            <input
                type="text"
                placeholder="Buscar por cliente, ticket o fecha"
                className="form-control my-3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="list-group">
                {filteredReports.map((report, index) => (
                    <li key={index} className="list-group-item report-item">
                        <h5>Cliente: {report.cliente}</h5>
                        <p>Ticket: {report.ticket}</p>
                        <p>Fecha: {new Date(report.fecha).toLocaleString()}</p>
                        <pre>{report.informe}</pre>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReportList;
