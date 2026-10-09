
import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState("Arun");
  const [salary, setSalary] = useState(25000);

  const increaseSalary = () => {
    setSalary(salary + 5000);
  };

  
  const [courses, setCourses] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  const addReact = () => {
    setCourses([...courses, "React"]);
  };

  const updateCSS = () => {
    setCourses(
      courses.map((course) =>
        course === "CSS" ? "Advanced CSS" : course
      )
    );
  };

  return (
    <div>
      {/* Task 1 */}
      <h1>Employee Salary</h1>
      <h2>Employee Name: {name}</h2>
      <h2>Salary: ₹{salary}</h2>

      <button onClick={increaseSalary}>
        Increase Salary
      </button>

      <hr />

      
      <h1>Course List</h1>

      {courses.map((course, index) => (
        <p key={index}>
          {index + 1}. {course}
        </p>
      ))}

      <button onClick={addReact}>Add React</button>

      <button onClick={updateCSS}>Update CSS</button>
    </div>
  );
};

export default App;