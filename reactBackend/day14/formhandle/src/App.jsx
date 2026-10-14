
import { useState } from "react";

const App = () => {
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: ""
  });

  const [employees, setEmployees] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmployee({
      ...employee,
      [name]: value
    });
  };

  // Add or update employee
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedEmployees = employees.map((item, index) =>
        index === editIndex ? { ...employee } : item
      );

      setEmployees(updatedEmployees);
      setEditIndex(null);
    } else {
      setEmployees([...employees, { ...employee }]);
    }

    setEmployee({
      name: "",
      department: "",
      salary: ""
    });
  };

  // Edit employee
  const handleEdit = (index) => {
    setEmployee({ ...employees[index] });
    setEditIndex(index);
  };

  // Delete employee
  const handleDelete = (index) => {
    setEmployees(
      employees.filter((item, i) => i !== index)
    );

    if (editIndex === index) {
      setEmployee({
        name: "",
        department: "",
        salary: ""
      });
      setEditIndex(null);
    } else if (editIndex !== null && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Employee Management
        </h1>

        {/* Employee Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Employee Name"
            value={employee.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Enter Department"
            value={employee.department}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="salary"
            placeholder="Enter Salary"
            value={employee.salary}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            min="0"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            {editIndex !== null ? "Update Employee" : "Add Employee"}
          </button>
        </form>

        {/* Employee List */}
        <h2 className="text-2xl font-bold mt-8 mb-4">
          Employee List
        </h2>

        {employees.length === 0 ? (
          <p className="text-gray-500">No employees added yet.</p>
        ) : (
          employees.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 mb-3 flex flex-col sm:flex-row sm:justify-between gap-3"
            >
              <div>
                <p><b>Name:</b> {item.name}</p>
                <p><b>Department:</b> {item.department}</p>
                <p><b>Salary:</b> ₹{item.salary}</p>
              </div>

              <div className="flex gap-2 items-center">
                <button
                  type="button"
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(index)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;


