import React from "react";
import "./SearchWeather.css";

export default function SearchWeather({ input, setInput, handleSubmit }) {
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
}
