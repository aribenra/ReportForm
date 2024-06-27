// src/components/ReportForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ReportForm.css'; // Asegúrate de que esta línea esté presente para importar el archivo CSS

const ReportForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        cliente: '',
        ticket: '',
        problema: '',
        configuracionWAN: false,
        optimizacionCanalesWiFi: false,
        cambioDNS: false,
        reinicioONT: false,
        reinicioMesh: false,
        sincronizacionMesh: false,
        cambioContraseñaWiFi: false,
        implementacionCableadoRed: false,
        ajusteAnchoBanda: false,
        verificacionCoberturaWiFi: false,
        revisionVelocidadDuplex: false,
        verificacionDispositivosAlternativos: false,
        configuracionVoIP: false,
        configuracionAppFonowin: false,
        derivacionNOC: false,
        derivacionVT: false,
        supervisorNOC: '',
        supervisorVT: '',
        recomendaciones: '',
        resultados: '',
        comentarios: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleDerivacionNOCChange = (e) => {
        const { checked } = e.target;
        setFormData({
            ...formData,
            derivacionNOC: checked,
            derivacionVT: checked ? false : formData.derivacionVT,
            supervisorNOC: '',
            supervisorVT: ''
        });
    };

    const handleDerivacionVTChange = (e) => {
        const { checked } = e.target;
        setFormData({
            ...formData,
            derivacionVT: checked,
            derivacionNOC: checked ? false : formData.derivacionNOC,
            supervisorNOC: '',
            supervisorVT: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="p-3 report-form">
            <div className="card mb-3">
                <div className="card-header">
                    <h3>Información Inicial</h3>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Cliente <span className="text-danger">*</span></label>
                        <div className="col-sm-9">
                            <input type="text" name="cliente" className="form-control rounded-input" placeholder="Ingrese el nombre del cliente" value={formData.cliente} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Ticket <span className="text-danger">*</span></label>
                        <div className="col-sm-9">
                            <input type="text" name="ticket" className="form-control rounded-input" placeholder="Ingrese el número de ticket" value={formData.ticket} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Descripción del Problema <span className="text-danger">*</span></label>
                        <div className="col-sm-9">
                            <textarea name="problema" className="form-control rounded-input" placeholder="Describa el problema" value={formData.problema} onChange={handleChange} required />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header">
                    <h3>Acciones</h3>
                </div>
                <div className="card-body">
                    {['configuracionWAN', 'optimizacionCanalesWiFi', 'cambioDNS', 'reinicioONT', 'reinicioMesh', 'sincronizacionMesh', 'cambioContraseñaWiFi', 'implementacionCableadoRed', 'ajusteAnchoBanda', 'verificacionCoberturaWiFi', 'revisionVelocidadDuplex', 'verificacionDispositivosAlternativos', 'configuracionVoIP', 'configuracionAppFonowin'].map((field, index) => (
                        <div className="form-group row" key={index}>
                            <label className="col-sm-3 col-form-label">{field.replace(/([A-Z])/g, ' $1').charAt(0).toUpperCase() + field.replace(/([A-Z])/g, ' $1').slice(1)}</label>
                            <div className="col-sm-9">
                                <input type="checkbox" name={field} className="form-check-input" checked={formData[field]} onChange={handleChange} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header">
                    <h3>Derivaciones</h3>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Derivación NOC</label>
                        <div className="col-sm-9">
                            <input type="checkbox" name="derivacionNOC" className="form-check-input" checked={formData.derivacionNOC} onChange={handleDerivacionNOCChange} />
                        </div>
                    </div>
                    {formData.derivacionNOC && (
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Supervisor AT <span className="text-danger">*</span></label>
                            <div className="col-sm-9">
                                <select name="supervisorNOC" className="form-control rounded-input" value={formData.supervisorNOC} onChange={handleChange} required>
                                    <option value="">Seleccione</option>
                                    <option value="Kendall Nuñez">Kendall Nuñez</option>
                                    <option value="Guadalupe Rimari">Guadalupe Rimari</option>
                                    <option value="Kenneth Nuñez">Kenneth Nuñez</option>
                                </select>
                            </div>
                        </div>
                    )}
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Derivación VT</label>
                        <div className="col-sm-9">
                            <input type="checkbox" name="derivacionVT" className="form-check-input" checked={formData.derivacionVT} onChange={handleDerivacionVTChange} />
                        </div>
                    </div>
                    {formData.derivacionVT && (
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Supervisor AT <span className="text-danger">*</span></label>
                            <div className="col-sm-9">
                                <select name="supervisorVT" className="form-control rounded-input" value={formData.supervisorVT} onChange={handleChange} required>
                                    <option value="">Seleccione</option>
                                    <option value="Kendall Nuñez">Kendall Nuñez</option>
                                    <option value="Guadalupe Rimari">Guadalupe Rimari</option>
                                    <option value="Kenneth Nuñez">Kenneth Nuñez</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header">
                    <h3>Conclusiones</h3>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Recomendaciones para Mejora</label>
                        <div className="col-sm-9">
                            <textarea name="recomendaciones" className="form-control rounded-input" placeholder="Ingrese recomendaciones" value={formData.recomendaciones} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Resultados Obtenidos <span className="text-danger">*</span></label>
                        <div className="col-sm-9">
                            <textarea name="resultados" className="form-control rounded-input" placeholder="Ingrese los resultados" value={formData.resultados} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Comentarios Adicionales</label>
                        <div className="col-sm-9">
                            <textarea name="comentarios" className="form-control rounded-input" placeholder="Ingrese comentarios adicionales" value={formData.comentarios} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>

            <button type="submit" className="btn btn-dark mt-3">Enviar Informe</button>
        </form>
    );
};

export default ReportForm;
