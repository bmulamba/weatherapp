import React from "react";
import "./SearchWeather.css";

export default function SearchWeather({ input, setInput, handleSubmit }) {
  return (
    <div>
     
        <form onSubmit={handleSubmit}>
        <div className="form-search">
          <input
            type="text"
            placeholder="Enter Your City"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button>Search</button>
          </div>
        </form>
    </div>
  );
}
