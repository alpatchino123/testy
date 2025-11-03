
import React from "react";
import { createRoot } from "react-dom";

function App() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 text-green-400">
        ⚽ Football Predictions
      </h1>
      <p className="text-lg text-gray-300">
        Welcome! This page is running React + Tailwind on GitHub Pages.
      </p>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

