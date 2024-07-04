// src/components/ProblemDescription.js
import React, { useState } from 'react';

const problemList = [
  "Lentitud en el juego Valorant",
  "Lentitud por WiFi y cableado",
  "Pérdida total del servicio",
  "Sin conexión a internet",
  "Problemas para enviar correos",
  "Lentitud en el Mesh",
  "Lentitud con ancho de banda",
  "Problemas con la conectividad de las cámaras",
  "Sin servicio de internet por los puertos LAN del ONT",
  "Problemas con la velocidad de los Mesh",
  "Ancho de banda asimétrico",
  "Problemas al ingresar a Outlook y a Teams",
  "Sin navegación de internet en el televisor",
  "Lentitud con el servicio de internet",
  "Sin acceso a la aplicación Movistar TV",
  "Sin internet en la TV",
  "Lentitud en un repetidor TP-Link",
  "Pérdida total del servicio de Fonowin",
  "Intermitencia en el servicio de internet",
  "No se puede visualizar la red WiFi 5GHz",
  "Problemas para acceder a Google y recibe autenticación CAPTCHA constantemente",
  "Problemas con un repetidor y sin servicio de internet",
  "No puede navegar por internet en la TV",
  "No puede ver las redes WiFi en el televisor",
  "Solicita cambio de contraseña de la red WiFi",
  "Lentitud al jugar Warcraft",
  "No puede navegar por YouTube",
  "Problemas al conectar un repetidor y sin servicio de internet",
  "No puede acceder a la red de la banda 5GHz",
  "No puede ver la red WiFi de su ONT",
  "Problemas con el mesh implementado con un cable de red",
  "Problemas recurrentes por las mañanas y por las noches",
  "Ancho de banda menor al contratado",
  "No puede acceder a la aplicación Forticlient"
];

const ProblemDescription = ({ value, onChange }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);
    if (userInput.length > 0) {
      const filteredSuggestions = problemList.filter(problem =>
        problem.toLowerCase().includes(userInput.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
    onChange(userInput);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
    onChange(suggestion);
  };

  return (
    <div className="form-group row">
      <label className="col-sm-3 col-form-label">
        Descripción del Problema <span className="text-danger">*</span>
      </label>
      <div className="col-sm-9">
        <input
          type="text"
          className="form-control rounded-input"
          placeholder="Describa el problema"
          value={inputValue}
          onChange={handleInputChange}
          required
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="suggestion-item"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProblemDescription;
