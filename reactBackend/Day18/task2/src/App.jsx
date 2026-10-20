
import { useState, useEffect } from "react";

const App = () => {
  const [exercise, setExercise] = useState("1");
  const [output, setOutput] = useState("");

  // Exercise 6: State Snapshot
  const [students, setStudents] = useState(["Harish"]);

  // Exercise 7: Search, Filter and Sort
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Exercise 8: Employee CRUD
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: ""
  });

  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [];
  });

  const [editId, setEditId] = useState(null);

  // Exercise 9: Interval
  const [count, setCount] = useState(0);

  // Exercise 10: Debounced Search
  const [apiSearch, setApiSearch] = useState("");
  const [apiResults, setApiResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch users for Exercise 7
  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=100")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.log(error));
  }, []);

  // Exercise 8: Save employees
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Exercise 9: Correct interval
  useEffect(() => {
    if (exercise !== "9") return;

    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [exercise]);

  // Exercise 10: Debounced API Search
  useEffect(() => {
    if (apiSearch.trim() === "") {
      setApiResults([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const timer = setTimeout(async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://dummyjson.com/users/search?q=${encodeURIComponent(
            apiSearch
          )}`,
          { signal: controller.signal }
        );

        const data = await response.json();

        setApiResults(data.users || []);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [apiSearch]);

  // Exercise 1: First Non-Repeating Character
  const firstNonRepeating = () => {
    const str = "aabbcdecd";
    const count = {};

    for (let char of str) {
      count[char] = (count[char] || 0) + 1;
    }

    for (let char of str) {
      if (count[char] === 1) {
        setOutput(char);
        return;
      }
    }

    setOutput("No unique character");
  };

  // Exercise 2: Group Employees by Department
  const groupEmployees = () => {
    const data = [
      { name: "Harish", department: "IT", salary: 30000 },
      { name: "Kumar", department: "HR", salary: 25000 },
      { name: "Rahul", department: "IT", salary: 40000 },
      { name: "Priya", department: "HR", salary: 35000 }
    ];

    const result = {};

    data.forEach((emp) => {
      if (!result[emp.department]) {
        result[emp.department] = {
          employees: [],
          totalSalary: 0
        };
      }

      result[emp.department].employees.push(emp.name);
      result[emp.department].totalSalary += emp.salary;
    });

    setOutput(JSON.stringify(result, null, 2));
  };

  // Exercise 3: Shopping Cart
  const shoppingCart = () => {
    const cart = [
      { name: "Shirt", price: 1200, quantity: 2, stock: 5 },
      { name: "Shoes", price: 2500, quantity: 1, stock: 3 },
      { name: "Watch", price: 1000, quantity: 2, stock: 2 }
    ];

    let subtotal = 0;

    for (let item of cart) {
      if (
        !Number.isInteger(item.quantity) ||
        item.quantity <= 0 ||
        item.quantity > item.stock
      ) {
        setOutput(`Invalid quantity for ${item.name}`);
        return;
      }

      subtotal += item.price * item.quantity;
    }

    let discount = 0;

    if (subtotal > 5000) {
      discount = subtotal * 0.10;
    }

    const total = subtotal - discount;

    setOutput(
      JSON.stringify(
        { subtotal, discount, total },
        null,
        2
      )
    );
  };

  // Exercise 4: Flatten Nested Array
  const flattenArray = () => {
    const arr = [1, [2, 3], [4, [5, 6]]];
    const result = [];

    const flatten = (items) => {
      for (let item of items) {
        if (Array.isArray(item)) {
          flatten(item);
        } else {
          result.push(item);
        }
      }
    };

    flatten(arr);
    setOutput(JSON.stringify(result));
  };

  // Exercise 5: Find Missing Number
  const findMissing = () => {
    const arr = [1, 2, 3, 5, 6, 7];

    let expectedSum = 0;
    let actualSum = 0;

    for (let i = 1; i <= 7; i++) {
      expectedSum += i;
    }

    for (let num of arr) {
      actualSum += num;
    }

    setOutput(String(expectedSum - actualSum));
  };

  // Exercise 6: State Snapshot
  const addStudent = () => {
    const newStudent = "Kumar";
    const newArray = [...students, newStudent];

    setStudents(newArray);

    console.log("Old array:", students);
    console.log("New array:", newArray);
    setOutput(JSON.stringify(newArray));
  };

  // Exercise 7: Combined Search, Filter and Sort
  const getFilteredUsers = () => {
    let result = [...users];

    result = result.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    if (city !== "") {
      result = result.filter((user) => user.address.city === city);
    }

    result = result.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.id - b.id;
      }

      return b.id - a.id;
    });

    return result;
  };

  const cities = [...new Set(
    users.map((user) => user.address.city)
  )].sort();

  // Exercise 8: Add, Edit and Delete Employees
  const saveEmployee = (e) => {
    e.preventDefault();

    if (
      !employee.name.trim() ||
      !employee.department.trim() ||
      employee.salary === "" ||
      Number(employee.salary) < 0
    ) {
      alert("Enter valid employee details");
      return;
    }

    if (editId !== null) {
      setEmployees(
        employees.map((emp) =>
          emp.id === editId
            ? {
                ...emp,
                ...employee,
                salary: Number(employee.salary)
              }
            : emp
        )
      );

      setEditId(null);
    } else {
      const newEmployee = {
        ...employee,
        id: Date.now(),
        salary: Number(employee.salary)
      };

      setEmployees([...employees, newEmployee]);
    }

    setEmployee({
      name: "",
      department: "",
      salary: ""
    });
  };

  const editEmployee = (emp) => {
    setEmployee({
      name: emp.name,
      department: emp.department,
      salary: String(emp.salary)
    });

    setEditId(emp.id);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));

    if (editId === id) {
      setEditId(null);
      setEmployee({
        name: "",
        department: "",
        salary: ""
      });
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>JavaScript & React Practice</h1>

      <select
        value={exercise}
        onChange={(e) => {
          setExercise(e.target.value);
          setOutput("");
        }}
      >
        <option value="1">1. First Non-Repeating Character</option>
        <option value="2">2. Group Employees</option>
        <option value="3">3. Shopping Cart</option>
        <option value="4">4. Flatten Array</option>
        <option value="5">5. Missing Number</option>
        <option value="6">6. State Snapshot</option>
        <option value="7">7. Search, Filter & Sort</option>
        <option value="8">8. Employee CRUD</option>
        <option value="9">9. useEffect Interval</option>
        <option value="10">10. Debounced API Search</option>
      </select>

      <hr />

      {exercise === "1" && (
        <>
          <h2>First Non-Repeating Character</h2>
          <button onClick={firstNonRepeating}>Find Character</button>
        </>
      )}

      {exercise === "2" && (
        <>
          <h2>Group Employees by Department</h2>
          <button onClick={groupEmployees}>Group Employees</button>
        </>
      )}

      {exercise === "3" && (
        <>
          <h2>Shopping Cart</h2>
          <button onClick={shoppingCart}>Calculate Total</button>
        </>
      )}

      {exercise === "4" && (
        <>
          <h2>Flatten Nested Array</h2>
          <button onClick={flattenArray}>Flatten</button>
        </>
      )}

      {exercise === "5" && (
        <>
          <h2>Find Missing Number</h2>
          <button onClick={findMissing}>Find Missing Number</button>
        </>
      )}

      {exercise === "6" && (
        <>
          <h2>State Snapshot</h2>
          <p>Students: {students.join(", ")}</p>
          <button onClick={addStudent}>Add Student</button>
          <p>Check the browser console for the old and new arrays.</p>
        </>
      )}

      {exercise === "7" && (
        <>
          <h2>Search, Filter and Sort Users</h2>

          <input
            placeholder="Search user name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">All Cities</option>
            {cities.map((cityName) => (
              <option key={cityName} value={cityName}>
                {cityName}
              </option>
            ))}
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">ID: Low to High</option>
            <option value="desc">ID: High to Low</option>
          </select>

          {getFilteredUsers().map((user) => (
            <p key={user.id}>
              {user.id} - {user.firstName} {user.lastName}
              {" - "}{user.address.city}
            </p>
          ))}
        </>
      )}

      {exercise === "8" && (
        <>
          <h2>Employee CRUD</h2>

          <form onSubmit={saveEmployee}>
            <input
              placeholder="Employee Name"
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />

            <input
              placeholder="Department"
              value={employee.department}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  department: e.target.value
                })
              }
            />

            <input
              type="number"
              min="0"
              placeholder="Salary"
              value={employee.salary}
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />

            <button type="submit">
              {editId !== null ? "Update Employee" : "Add Employee"}
            </button>
          </form>

          {employees.map((emp) => (
            <div key={emp.id}>
              <p>
                {emp.name} - {emp.department} - ₹{emp.salary}
              </p>

              <button onClick={() => editEmployee(emp)}>Edit</button>
              <button onClick={() => deleteEmployee(emp.id)}>
                Delete
              </button>
            </div>
          ))}
        </>
      )}

      {exercise === "9" && (
        <>
          <h2>useEffect Interval</h2>
          <h3>Count: {count}</h3>
          <p>The count increases every second.</p>
        </>
      )}

      {exercise === "10" && (
        <>
          <h2>Debounced API Search</h2>

          <input
            placeholder="Search users by name..."
            value={apiSearch}
            onChange={(e) => setApiSearch(e.target.value)}
          />

          {loading && <p>Loading...</p>}

          {apiResults.map((user) => (
            <p key={user.id}>
              {user.firstName} {user.lastName}
            </p>
          ))}

          {!loading &&
            apiSearch.trim() !== "" &&
            apiResults.length === 0 && <p>No users found.</p>}
        </>
      )}

      {output !== "" && (
        <pre
          style={{
            background: "#f1f1f1",
            padding: "15px",
            whiteSpace: "pre-wrap"
          }}
        >
          {output}
        </pre>
      )}
    </div>
  );
};

export default App;


