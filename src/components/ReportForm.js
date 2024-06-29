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

    const handleDerivacionChange = (e) => {
        const { name, checked } = e.target;
        if (name === 'derivacionNOC') {
            setFormData({
                ...formData,
                derivacionNOC: checked,
                derivacionVT: checked ? false : formData.derivacionVT,
                supervisorNOC: checked ? formData.supervisorNOC : '',
            });
        } else if (name === 'derivacionVT') {
            setFormData({
                ...formData,
                derivacionVT: checked,
                derivacionNOC: checked ? false : formData.derivacionNOC,
                supervisorVT: checked ? formData.supervisorVT : '',
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="report-form">
            <div className="card">
                <div className="card-header">Información inicial</div>
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

            <div className="card">
                <div className="card-header">Acciones</div>
                <div className="card-body">
                    {[
                        'configuracionWAN',
                        'optimizacionCanalesWiFi',
                        'cambioDNS',
                        'reinicioONT',
                        'reinicioMesh',
                        'sincronizacionMesh',
                        'cambioContraseñaWiFi',
                        'implementacionCableadoRed',
                        'ajusteAnchoBanda',
                        'verificacionCoberturaWiFi',
                        'revisionVelocidadDuplex',
                        'verificacionDispositivosAlternativos',
                        'configuracionVoIP',
                        'configuracionAppFonowin'
                    ].map((field, index) => (
                        <div className="form-group row" key={index}>
                            <label className="col-sm-6 col-form-label">{field.replace(/([A-Z])/g, ' $1').replace(/ W A N/g, ' WAN').replace(/ D N S/g, ' DNS').replace(/ O N T/g, ' ONT').replace(/ Wi Fi/g, ' WiFi').replace(/ Vo I P/g, ' VoIP').replace(/ App Fonowin/g, ' App Fonowin').charAt(0).toUpperCase() + field.replace(/([A-Z])/g, ' $1').replace(/ W A N/g, ' WAN').replace(/ D N S/g, ' DNS').replace(/ O N T/g, ' ONT').replace(/ Wi Fi/g, ' WiFi').replace(/ Vo I P/g, ' VoIP').replace(/ App Fonowin/g, ' App Fonowin').slice(1)}</label>
                            <div className="col-sm-6">
                                <input type="checkbox" name={field} className="form-check-input" checked={formData[field]} onChange={handleChange} />
                                <label className="form-check-label" htmlFor={field}></label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card">
                <div className="card-header">Derivaciones</div>
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Derivacion NOC</label>
                        <div className="col-sm-9">
                            <input type="checkbox" name="derivacionNOC" className="form-check-input" checked={formData.derivacionNOC} onChange={handleDerivacionChange} />
                            <label className="form-check-label" htmlFor="derivacionNOC"></label>
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
                        <label className="col-sm-3 col-form-label">Derivacion VT</label>
                        <div className="col-sm-9">
                            <input type="checkbox" name="derivacionVT" className="form-check-input" checked={formData.derivacionVT} onChange={handleDerivacionChange} />
                            <label className="form-check-label" htmlFor="derivacionVT"></label>
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

            <div className="card">
                <div className="card-header">Conclusiones</div>
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
            <button type="submit" className="btn btn-dark mt-3 submit-button">Enviar Informe</button>
        </form>
    );
};

export default ReportForm;
