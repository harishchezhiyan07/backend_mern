
import React, { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`min-h-screen p-10 ${
        isDark ? "bg-red-600 text-pink-300" : "bg-yellow-300 text-green-800"
      }`}
    >
      <h1 className="text-3xl font-bold mb-5">
        {isDark ? "Dark Mode" : "Light Mode"}
      </h1>

      <button
        onClick={() => setIsDark(!isDark)}
        className="px-5 py-2 bg-blue-800 text-white rounded"
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default App;

