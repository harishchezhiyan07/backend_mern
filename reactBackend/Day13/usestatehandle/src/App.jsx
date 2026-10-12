import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  const handleAdd = () => {
    if (name.trim() === "") return;

    setStudents([...students, name]);
    setName("");
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter student name"
      />

      <button onClick={handleAdd}>Add Student</button>

      {students.map((student, index) => (
        <p key={index}>{student}</p>
      ))}
    </div>
  );
};

export default App;