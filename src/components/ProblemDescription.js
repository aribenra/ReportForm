// src/components/ProblemDescription.js
import React, { useState } from 'react';
import problemList from '../data/problemList.json';

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
