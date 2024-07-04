// src/components/ProblemDescription.js
import React, { useState } from 'react';

const problemList = [
    "Ancho de banda asimétrico",
    "Ancho de banda menor al contratado",
    "Intermitencia con el servicio de internet",
    "Intermitencia en el servicio de internet",
    "Latencia en juegos",
    "Lentitud al jugar Warcraft",
    "Lentitud con el servicio de internet",
    "Lentitud con su servicio de internet",
    "Lentitud con ancho de banda",
    "Lentitud en el juego Valorant",
    "Lentitud en un repetidor TP-Link",
    "No cuenta con línea telefónica",
    "No cuenta con servicio de Fonowin",
    "No puede acceder a la aplicación Forticlient",
    "No puede acceder a la aplicación Movistar TV",
    "No puede acceder a Google y recibe autenticación CAPTCHA constantemente",
    "No puede acceder a la red de la banda 5GHz",
    "No puede navegar por internet en la TV",
    "No puede navegar por YouTube",
    "No puede ver la aplicación Movistar TV",
    "No puede ver la red WiFi de su ONT",
    "No puede ver las redes WiFi en el televisor",
    "Problemas al conectar un repetidor y sin servicio de internet",
    "Problemas al ingresar a Outlook y Teams",
    "Problemas con la conectividad de las cámaras",
    "Problemas con la velocidad de los Mesh",
    "Problemas con un repetidor y sin servicio de internet",
    "Problemas para acceder a Google y recibe autenticación CAPTCHA constantemente",
    "Problemas para enviar correos",
    "Problemas recurrentes por las mañanas y por las noches",
    "Pérdida total del servicio",
    "Pérdida total del servicio de Fonowin",
    "Sin navegación de internet en el televisor",
    "Sin servicio de internet por los puertos LAN del ONT",
    "Solicita cambio de contraseña de la red WiFi"
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
